
"use client";

import { useEffect, useRef, useState } from "react";

type Player = {
    playerName: string;
    playerId: string;
    teamName: string;
    teamId: string;
    primaryPosition: string;
    minutesPlayed: number;
    usageRate: number;
    "SCA/90": number;
    attackingInvolvement: number;
    GA: number;
    xGI: number;
    avg_xPass: number | null;
    attempted_passes: number | null;
    passing_acc: number | null;
    PAx_per_100: number | null;
    primary_colour: string | null;
};

export default function TeamUsage() {
    const plotRef = useRef<HTMLDivElement>(null);
    const plotInitialized = useRef(false);

    const [players, setPlayers] = useState<Player[]>([]);
    const [selectedTeam, setSelectedTeam] = useState<string>("");
    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
    const [search, setSearch] = useState("");
    const [isMobile, setIsMobile] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [playerSearch, setPlayerSearch] = useState("");
    const [addedPlayers, setAddedPlayers] = useState<Player[]>([]);

    const [yAxisMetric, setYAxisMetric] = useState<
    "attackingInvolvement" | "avg_xPass"
    >("attackingInvolvement");

    // Load player data
    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetch("/data/usage/players.json");

                if (!response.ok) {
                    throw new Error("Could not load the usage data.");
                }

                const data: Player[] = await response.json();
                setPlayers(data);
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : "Something went wrong."
                );
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);

    // Detect chart width
    useEffect(() => {
        const element = plotRef.current;
        if (!element) return;

        const observer = new ResizeObserver((entries) => {
            setIsMobile(entries[0].contentRect.width < 640);
        });

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    // Available teams
    const teams = [...new Set(players.map((player) => player.teamName))]
        .sort((a, b) => a.localeCompare(b));

    // Filter team search
    const filteredTeams = search.trim()
        ? teams
            .filter((team) =>
                team.toLowerCase().includes(search.toLowerCase())
            )
            .slice(0, 8)
        : [];

    // Players belonging to selected team
    const teamPlayers = selectedTeam
        ? players.filter(
            (player) =>
                player.teamName === selectedTeam &&
                player.minutesPlayed > 360
        )
        : [];
    // Players displayed in the figure
    const plotPlayers = [
        ...teamPlayers,
        ...addedPlayers.filter(
            (added) =>
                !teamPlayers.some(
                    (teamPlayer) => teamPlayer.playerId === added.playerId
                )
        ),
    ];

    // Search for players
    const filteredPlayers = playerSearch.trim().length > 0
        ? players
            .filter((player) =>
                player.playerName
                    .toLowerCase()
                    .includes(playerSearch.toLowerCase())
            )
            .filter((player) =>
                !plotPlayers.some(
                    (existing) => existing.playerId === player.playerId
                )
            )
            .sort((a, b) => a.playerName.localeCompare(b.playerName))
            .slice(0, 8)
        : [];
    // Render scatter plot
    useEffect(() => {
        async function renderPlot() {
            const Plotly = (await import("plotly.js-dist-min")).default;

            if (!plotRef.current) return;
           
            const maxValue = Math.ceil(
                Math.max(
                    0,
                    ...plotPlayers.map((player) =>
                        Math.max(
                            player.usageRate * 100,
                            player.attackingInvolvement * 100
                        )
                    )
                )
            );

            const referenceLine = yAxisMetric === "attackingInvolvement"
                ? [
                    {
                        type: "scatter",
                        mode: "lines",
                        x: [0, maxValue],
                        y: [0, maxValue],
                        line: {
                            color: "#888888",
                            width: 1.5,
                            dash: "dash",
                        },
                        hoverinfo: "skip",
                        showlegend: false,
                        font: {
                            family: "DIN Alternate",
                            color: "#CCCCCC",
                        },
                    },
                ]
                : [];
            
            const teamXPassValues = teamPlayers
                .map((player) => player.avg_xPass)
                .filter((value): value is number =>
                    value !== null && Number.isFinite(value)
                )
                .sort((a, b) => a - b);

            const middle = Math.floor(teamXPassValues.length / 2);

            const teamMedianAvgXPass =
                teamXPassValues.length === 0
                    ? null
                    : teamXPassValues.length % 2 === 0
                        ? (teamXPassValues[middle - 1] + teamXPassValues[middle]) / 2
                        : teamXPassValues[middle];

            const data: any[] = plotPlayers.length > 0
                ? [
                    ...referenceLine,

                    ...(yAxisMetric === "avg_xPass" && teamMedianAvgXPass !== null
                        ? [
                            {
                                type: "scatter",
                                mode: "lines",
                                x: [0, maxValue],
                                y: [teamMedianAvgXPass, teamMedianAvgXPass],
                                line: {
                                    color: "#888888",
                                    width: 1.5,
                                    dash: "dash",
                                },
                                hoverinfo: "skip",
                                showlegend: false,
                            },
                        ]
                        : []),
                    {
                        type: "scatter",
                        mode: "markers",

                        x: plotPlayers.map(
                            (player) => player.usageRate * 100
                        ),

                        y: plotPlayers.map((player) =>
                            yAxisMetric === "attackingInvolvement"
                                ? player.attackingInvolvement * 100
                                : player.avg_xPass
                        ),

                        customdata: plotPlayers.map((player) => [
                            player.playerName,
                            player.primaryPosition,
                            player.minutesPlayed,
                            player.GA,
                            player.xGI,
                            player["SCA/90"],
                            player.playerId,
                        ]),

                        marker: {
                            size: plotPlayers.map((player) =>
                                Math.max(9, 9 + Math.sqrt(Math.max(0, player.GA)) * 5)
                            ),
                            color: plotPlayers.map(
                                (player) => player.primary_colour || "#CCCCCC"
                            ),
                            opacity: 0.85,
                            line: {
                                color: plotPlayers.map((player) =>
                                    player.playerId === selectedPlayer?.playerId
                                        ? "#FFFFFF"
                                        : "#CCCCCC"
                                ),
                                width: plotPlayers.map((player) =>
                                    player.playerId === selectedPlayer?.playerId ? 2.5 : 0.8
                                ),
                            },
                        },

                        hoverinfo: "none",
                    },
                ]
                : [];

            const layout: any = {
                autosize: true,
                height: isMobile ? 430 : 520,

                paper_bgcolor: "#25292C",
                plot_bgcolor: "#25292C",

                margin: {
                    l: 65,
                    r: 25,
                    t: 25,
                    b: 65,
                },

                showlegend: false,

                xaxis: {
                    title: {
                        text: "Usage Rate (%)",
                        font: { color: "#CCCCCC", size: 13 },
                    },
                    color: "#CCCCCC",
                    gridcolor: "rgba(204,204,204,0.10)",
                    zeroline: false,
                    showline: true,
                    linewidth: 1,
                    linecolor: "#666666",
                    mirror: true,
                },

                yaxis: {
                    title: {
                        text: yAxisMetric === "attackingInvolvement"
                            ? "Attacking Involvement (%)"
                            : "Average xPass",
                        font: { color: "#CCCCCC", size: 13 },
                    },
                    tickformat: yAxisMetric === "avg_xPass" ? ".2f" : undefined,
                    color: "#CCCCCC",
                    gridcolor: "rgba(204,204,204,0.10)",
                    zeroline: false,
                    showline: true,
                    linewidth: 1,
                    linecolor: "#666666",
                    mirror: true,
                },

                hoverlabel: {
                    bgcolor: "#25292C",
                    bordercolor: "#CCCCCC",
                    font: {
                        color: "#CCCCCC",
                        size: 12,
                    },
                    align: "left",
                },
            };

            const config = {
                responsive: true,
                displayModeBar: false,
                scrollZoom: false,
            };

            let graphDiv: any;

            if (!plotInitialized.current) {
                graphDiv = await Plotly.newPlot(
                    plotRef.current,
                    data,
                    layout,
                    config
                );

                plotInitialized.current = true;
            } else {
                graphDiv = await Plotly.react(
                    plotRef.current,
                    data,
                    layout,
                    config
                );
            }

            graphDiv.removeAllListeners?.("plotly_click");

            graphDiv.on("plotly_click", (event: any) => {
                const point = event.points?.[0];
                const playerId = point?.customdata?.[6];

                const player = plotPlayers.find(
                    (player) => player.playerId === playerId
                );

                if (player) {
                    setSelectedPlayer(player);
                }
            });
        }
        
        const plotElement = plotRef.current as any;

    
        renderPlot();
    }, [selectedTeam, plotPlayers, isMobile, selectedPlayer, yAxisMetric]);

    // Clean up Plotly instance
    useEffect(() => {
        return () => {
            if (plotRef.current) {
                import("plotly.js-dist-min").then((module) => {
                    if (plotRef.current) {
                        module.default.purge(plotRef.current);
                        plotInitialized.current = false;
                    }
                });
            }
        };
    }, []);

    return (
        <section className="w-full">

            {/* Search controls */}
            <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* Team search */}
                <div className="relative">
                    <p className="mb-2 text-xs font-medium tracking-[0.2em] text-accent">
                        SELECT TEAM
                    </p>

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for a team..."
                        disabled={loading}
                        className="w-full rounded-lg border border-[var(--border)] bg-surface px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent/60 md:text-base"
                    />

                    {filteredTeams.length > 0 && (
                        <div className="absolute z-20 mt-1 max-h-72 w-full overflow-y-auto rounded-lg border border-[var(--border)] bg-surface shadow-xl">
                            {filteredTeams.map((team) => (
                                <button
                                    key={team}
                                    onClick={() => {
                                        setSelectedTeam(team);
                                        setSelectedPlayer(null);
                                        setSearch("");
                                    }}
                                    className="block w-full border-b border-[var(--border)] px-4 py-3 text-left text-sm text-foreground transition hover:bg-background"
                                >
                                    {team}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Player search */}
                <div className="relative">
                    <p className="mb-2 text-xs font-medium tracking-[0.2em] text-accent">
                        ADD PLAYER TO FIGURE
                    </p>

                    <input
                        type="text"
                        value={playerSearch}
                        onChange={(e) => setPlayerSearch(e.target.value)}
                        placeholder="Search for a player..."
                        disabled={loading}
                        className="w-full rounded-lg border border-[var(--border)] bg-surface px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent/60 md:text-base"
                    />

                    {filteredPlayers.length > 0 && (
                        <div className="absolute z-20 mt-1 max-h-72 w-full overflow-y-auto rounded-lg border border-[var(--border)] bg-surface shadow-xl">
                            {filteredPlayers.map((player) => (
                                <button
                                    key={player.playerId}
                                    onClick={() => {
                                        setAddedPlayers((current) => [...current, player]);
                                        setPlayerSearch("");
                                    }}
                                    className="block w-full border-b border-[var(--border)] px-4 py-3 text-left transition hover:bg-background"
                                >
                                    <span className="block text-sm text-foreground">
                                        {player.playerName}
                                    </span>
                                    <span className="mt-1 block text-xs text-muted">
                                        {player.teamName} · {player.primaryPosition}
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

            </div>

            {/* Selected team heading */}
            {selectedTeam && (
                <div className="mb-5 flex items-center justify-between gap-3">
                    <div>
                        <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                            {selectedTeam}
                        </h3>
                        <p className="text-xs text-muted md:text-sm">
                            {teamPlayers.length} players
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            setSelectedTeam("");
                            setSelectedPlayer(null);
                        }}
                        className="rounded-lg border border-[var(--border)] px-3 py-2 text-xs text-muted transition hover:bg-background hover:text-foreground sm:text-sm"
                    >
                        Clear team ×
                    </button>
                </div>
            )}

            {/* Selected player information */}
            {selectedPlayer && (
                <div className="mb-5 rounded-xl border border-[var(--border)] bg-surface p-5">

                    <div className="mb-5 flex items-start justify-between gap-3">
                        <div>
                            <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                                {selectedPlayer.playerName}
                            </h3>

                            <p className="mt-1 text-sm font-medium text-accent">
                                {selectedPlayer.teamName} · {selectedPlayer.primaryPosition} · {selectedPlayer.minutesPlayed.toLocaleString()} mins
                            </p>
                        </div>

                        <div className="flex items-center gap-3">

                            {addedPlayers.some(
                                (player) => player.playerId === selectedPlayer.playerId
                            ) && (
                                <button
                                    onClick={() => {
                                        setAddedPlayers((current) =>
                                            current.filter(
                                                (player) => player.playerId !== selectedPlayer.playerId
                                            )
                                        );
                                        setSelectedPlayer(null);
                                    }}
                                    className="text-sm text-red-400 transition hover:text-red-300"
                                >
                                    Remove player
                                </button>
                            )}

                            <button
                                onClick={() => setSelectedPlayer(null)}
                                className="text-sm text-muted transition hover:text-foreground"
                            >
                                Close ×
                            </button>

                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

                        {yAxisMetric === "avg_xPass" ? (
                            <>
                                <div>
                                    <p className="text-xs text-muted">Usage rate</p>
                                    <p className="mt-1 text-lg font-semibold text-foreground">
                                        {(selectedPlayer.usageRate * 100).toFixed(2)}%
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-muted">Average xPass</p>
                                    <p className="mt-1 text-lg font-semibold text-foreground">
                                        {selectedPlayer.avg_xPass != null
                                            ? selectedPlayer.avg_xPass.toFixed(3)
                                            : "—"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-muted">Passes attempted</p>
                                    <p className="mt-1 text-lg font-semibold text-foreground">
                                        {selectedPlayer.attempted_passes?.toLocaleString() ?? "—"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-muted">Passing accuracy</p>
                                    <p className="mt-1 text-lg font-semibold text-foreground">
                                        {selectedPlayer.passing_acc != null
                                            ? `${selectedPlayer.passing_acc.toFixed(2)}%`
                                            : "—"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-muted">PAx per 100</p>
                                    <p className="mt-1 text-lg font-semibold text-foreground">
                                        {selectedPlayer.PAx_per_100 != null
                                            ? selectedPlayer.PAx_per_100.toFixed(2)
                                            : "—"}
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <p className="text-xs text-muted">Usage rate</p>
                                    <p className="mt-1 text-lg font-semibold text-foreground">
                                        {(selectedPlayer.usageRate * 100).toFixed(2)}%
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-muted">Attacking involvement</p>
                                    <p className="mt-1 text-lg font-semibold text-foreground">
                                        {(selectedPlayer.attackingInvolvement * 100).toFixed(2)}%
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-muted">G+A</p>
                                    <p className="mt-1 text-lg font-semibold text-foreground">
                                        {selectedPlayer.GA}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-muted">xGI</p>
                                    <p className="mt-1 text-lg font-semibold text-foreground">
                                        {selectedPlayer.xGI.toFixed(2)}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-muted">SCA/90</p>
                                    <p className="mt-1 text-lg font-semibold text-foreground">
                                        {selectedPlayer["SCA/90"].toFixed(2)}
                                    </p>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            )}


            {/* Y-axis selection */}
            <div className="mb-4 flex flex-wrap items-center gap-2">

                <p className="mr-2 text-xs font-medium tracking-[0.2em] text-accent">
                    Y-AXIS
                </p>

                <button
                    onClick={() => setYAxisMetric("attackingInvolvement")}
                    className={`rounded-lg border px-4 py-2 text-xs font-medium transition sm:text-sm ${
                        yAxisMetric === "attackingInvolvement"
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-[var(--border)] text-muted hover:bg-background hover:text-foreground"
                    }`}
                >
                    Attacking Involvement
                </button>

                <button
                    onClick={() => setYAxisMetric("avg_xPass")}
                    className={`rounded-lg border px-4 py-2 text-xs font-medium transition sm:text-sm ${
                        yAxisMetric === "avg_xPass"
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-[var(--border)] text-muted hover:bg-background hover:text-foreground"
                    }`}
                >
                    Average xPass
                </button>

            </div>


            {/* Scatter plot */}
            <div className="w-full overflow-hidden rounded-xl border border-[var(--border)] bg-surface p-1.5 sm:p-3 md:p-4">
                <div ref={plotRef} className="w-full" />
            </div>

            {!selectedTeam && !loading && (
                <p className="mt-3 text-xs text-muted sm:text-sm">
                    Search for a team to explore its players.
                </p>
            )}

        </section>
    );
}
