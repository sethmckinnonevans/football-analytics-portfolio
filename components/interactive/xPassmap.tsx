
"use client";

import { useEffect, useRef, useState } from "react";

type Player = {
  player_id: number;
  player: string;
  team: string;
  appearances: number;
  passes_attempted: number;
  avg_xpass: number;
  completion_rate: number;
  total_PAx: number;
  file: string;
};

type Zone = {
  player_id: number;
  zone_x: number;
  zone_y: number;
  passes_attempted: number;
  avg_xpass: number;
  total_PAx: number;
  PAx_per_100: number;
};

type Pass = {
  player_id: number;
  player: string;
  team_name: string;
  opponent: string;
  game_id: number;
  minute: number;
  second: number;
  x: number;
  y: number;
  end_x: number;
  end_y: number;
  xPass: number;
  outcome: number;
  pass_length: number;
  zone_x: number;
  zone_y: number;
  PAx: number;
};

export default function xpassmap() {
    const plotRef = useRef<HTMLDivElement>(null);
    const plotInitialized = useRef(false);
    const [players, setPlayers] = useState<Player[]>([]);
    const [zones, setZones] = useState<Zone[]>([]);
    const [passes, setPasses] = useState<Pass[]>([]);
    const playerZonesRef = useRef<Zone[]>([]);
    const selectedZonePassesRef = useRef<Pass[]>([]);
    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
    const [search, setSearch] = useState("");
    const [hoveredPass, setHoveredPass] = useState<Pass | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedZone, setSelectedZone] = useState<{
        zone_x: number;
        zone_y: number;
    } | null>(null);

    const [loading, setLoading] = useState(true);
    const [passLoading, setPassLoading] = useState(false);
    const [error, setError] = useState("");

    // Load the player index and zonal statistics
    useEffect(() => {
        async function loadData() {
        try {
            const [playersResponse, zonesResponse] = await Promise.all([
            fetch("/data/xpass/players.json"),
            fetch("/data/xpass/zonal_stats.json"),
            ]);

            if (!playersResponse.ok || !zonesResponse.ok) {
            throw new Error("Could not load the xPass data.");
            }

            const playersData: Player[] = await playersResponse.json();
            const zonesData: Zone[] = await zonesResponse.json();

            setPlayers(playersData);
            setZones(zonesData);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong.");
        } finally {
            setLoading(false);
        }
        }

        loadData();
        
    }, []);

    // Detect whether the pitch container is mobile-sized
    useEffect(() => {
        const element = plotRef.current;
        if (!element) return;

        const observer = new ResizeObserver((entries) => {
            const width = entries[0].contentRect.width;
            setIsMobile(width < 640);
        });

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    // Load the selected player's individual passes
    useEffect(() => {
        if (!selectedPlayer) {
        setPasses([]);
        return;
        }

        let cancelled = false;

        async function loadPasses() {
            setPassLoading(true);
            setPasses([]);

            try {
                const response = await fetch(`/data/xpass/${selectedPlayer!.file}`);

                if (!response.ok) {
                throw new Error("Could not load this player's passes.");
                }

                const passData: Pass[] = await response.json();

                if (!cancelled) {
                setPasses(passData);
                }
            } catch (err) {
                if (!cancelled) {
                setError(err instanceof Error ? err.message : "Could not load passes.");
                }
            } finally {
                if (!cancelled) {
                setPassLoading(false);
                }
            }
            }

            loadPasses();

            return () => {
            cancelled = true;
            };
    }, [selectedPlayer]);

  // Get the selected player's zonal records
  const playerZones = selectedPlayer
    ? zones.filter((zone) => zone.player_id === selectedPlayer.player_id)
    : [];
    playerZonesRef.current = playerZones;

  // Search players by name or team
  const filteredPlayers = search.trim()
    ? players
        .filter((player) =>
          `${player.player} ${player.team}`
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .slice(0, 8)
    : [];

    const selectedZonePasses = selectedZone
        ? passes.filter(
            (pass) =>
                pass.zone_x === selectedZone.zone_x &&
                pass.zone_y === selectedZone.zone_y
            )
    : [];
    selectedZonePassesRef.current = selectedZonePasses;

    const selectedZoneStats = selectedZone
    ? playerZones.find(
        (zone) =>
            zone.zone_x === selectedZone.zone_x &&
            zone.zone_y === selectedZone.zone_y
      )
    : null;

  // Plot the pitch
 useEffect(() => {
    async function renderPlot() {
        const Plotly = (await import("plotly.js-dist-min")).default;

    if (!plotRef.current) return;

    const xCentres = Array.from(
      { length: 6 },
      (_, i) => i * 17.5 + 8.75
    );

    const yCentres = Array.from(
      { length: 5 },
      (_, i) => i * 13.6 + 6.8
    );

    const minPasses = 15;
    
    // Create a 5 x 6 grid, initially containing null values
    const zoneValues: (number | null)[][] = Array.from(
        { length: 5 },
        () => Array(6).fill(null)
        );

        // Populate the grid using the selected player's zonal data
        playerZones.forEach((zone) => {
        if (zone.passes_attempted >= minPasses) {
            zoneValues[zone.zone_y][zone.zone_x] = zone.PAx_per_100;
        }
    });

    // Find the largest absolute PAx value for a symmetric colour scale
    const maxAbsPAx = Math.max(
        1,
        ...playerZones
            .filter((zone) => zone.passes_attempted >= minPasses)
            .map((zone) => Math.abs(zone.PAx_per_100))
    );

    const shapes: any[] = [
      {
        type: "rect",
        x0: 0, y0: 0, x1: 105, y1: 68,
        line: { color: "#CCCCCC", width: 1.5 },
      },
      {
        type: "line",
        x0: 52.5, y0: 0, x1: 52.5, y1: 68,
        line: { color: "#CCCCCC", width: 1.2 },
      },
      {
        type: "circle",
        x0: 43.35, y0: 24.85,
        x1: 61.65, y1: 43.15,
        line: { color: "#CCCCCC", width: 1.2 },
      },
      {
        type: "rect",
        x0: 0, y0: 13.84, x1: 16.5, y1: 54.16,
        line: { color: "#CCCCCC", width: 1.2 },
      },
      {
        type: "rect",
        x0: 88.5, y0: 13.84, x1: 105, y1: 54.16,
        line: { color: "#CCCCCC", width: 1.2 },
      },
      {
        type: "rect",
        x0: 0, y0: 24.84, x1: 5.5, y1: 43.16,
        line: { color: "#CCCCCC", width: 1.2 },
      },
      {
        type: "rect",
        x0: 99.5, y0: 24.84, x1: 105, y1: 43.16,
        line: { color: "#CCCCCC", width: 1.2 },
      },
      ...[11, 94].map((x) => ({
        type: "circle",
        x0: x - 0.35, y0: 33.65,
        x1: x + 0.35, y1: 34.35,
        fillcolor: "#CCCCCC",
        line: { color: "#CCCCCC", width: 0.5 },
      })),
      {
        type: "circle",
        x0: 52.15, y0: 33.65,
        x1: 52.85, y1: 34.35,
        fillcolor: "#CCCCCC",
        line: { color: "#CCCCCC", width: 0.5 },
      },
    ];

    const leftArcX: number[] = [];
    const leftArcY: number[] = [];
    const rightArcX: number[] = [];
    const rightArcY: number[] = [];

    for (let i = 0; i <= 200; i++) {
    const theta = -Math.PI / 2 + (i / 200) * Math.PI;

    const leftX = 11 + 9.15 * Math.cos(theta);
    const rightX = 94 - 9.15 * Math.cos(theta);
    const y = 34 + 9.15 * Math.sin(theta);

    if (leftX >= 16.5) {
        leftArcX.push(leftX);
        leftArcY.push(y);
    }

    if (rightX <= 88.5) {
        rightArcX.push(rightX);
        rightArcY.push(y);
    }
    }

    
    const data: any[] = [
        {
            type: "heatmap",
            x: xCentres,
            y: yCentres,
            z: zoneValues,
            zmin: -maxAbsPAx,
            zmax: maxAbsPAx,
            zmid: 0,
            colorscale: [
                [0, "#E7EFFD"],
                [0.5, "#C5F36B"],
                [1, "#09D641"],
                ],
            showscale: true,
            colorbar: {
                title: {
                    text: "PAx per 100 Passes",
                    side: isMobile ? "top" : "right",
                    font: { color: "#CCCCCC", size: 14 },
                },
                tickfont: { color: "#CCCCCC", size: 12 },
                tickformat: "+.1f",
                orientation: isMobile ? "h" : "v",
                thickness: isMobile ? 8 : 12,
                len: isMobile ? 0.65 : 0.75,
                x: isMobile ? 0.5 : 0.9,
                ...(isMobile ? {
                    y: 1.12,
                    xanchor: "center",
                    yanchor: "bottom",
                } : {}),
                outlinewidth: 0,
                bgcolor: "rgba(0,0,0,0)",
            },
            opacity: 0.65,
            hoverinfo: "none",
            zsmooth: false,
            xgap: 0,
            ygap: 0,
        },

        // Completed pass lines
        {
            type: "scatter",
            mode: "lines",
            x: selectedZonePasses
                .filter((pass) => pass.outcome === 1)
                .flatMap((pass) => [pass.x * 1.05, pass.end_x * 1.05, null]),
            y: selectedZonePasses
                .filter((pass) => pass.outcome === 1)
                .flatMap((pass) => [pass.y * 0.68, pass.end_y * 0.68, null]),
            line: { color: "#05E862", width: 2.5 },
            hoverinfo: "skip",
            showlegend: false,
        },

        // Incomplete pass lines
        {
            type: "scatter",
            mode: "lines",
            x: selectedZonePasses
                .filter((pass) => pass.outcome === 0)
                .flatMap((pass) => [pass.x * 1.05, pass.end_x * 1.05, null]),
            y: selectedZonePasses
                .filter((pass) => pass.outcome === 0)
                .flatMap((pass) => [pass.y * 0.68, pass.end_y * 0.68, null]),
            line: { color: "#E8863A", width: 2.5 },
            hoverinfo: "skip",
            showlegend: false,
        },

        // Completed pass endpoints
        {
            type: "scatter",
            mode: "markers",
            x: selectedZonePasses
                .filter((pass) => pass.outcome === 1)
                .map((pass) => pass.end_x * 1.05),
            y: selectedZonePasses
                .filter((pass) => pass.outcome === 1)
                .map((pass) => pass.end_y * 0.68),
            marker: {
                size: 7,
                color: "#05E862",
                line: { color: "#CCCCCC", width: 0.6 },
            },
            hoverinfo: "none",
            showlegend: false,
        },

        // Incomplete pass endpoints
        {
            type: "scatter",
            mode: "markers",
            x: selectedZonePasses
                .filter((pass) => pass.outcome === 0)
                .map((pass) => pass.end_x * 1.05),
            y: selectedZonePasses
                .filter((pass) => pass.outcome === 0)
                .map((pass) => pass.end_y * 0.68),
            marker: {
                size: 7,
                color: "#E8863A",
                line: { color: "#CCCCCC", width: 0.6 },
            },
            hoverinfo: "none",
            showlegend: false,
        },

        // Left penalty arc
        {
            type: "scatter",
            mode: "lines",
            x: leftArcX,
            y: leftArcY,
            line: { color: "#CCCCCC", width: 1.2 },
            hoverinfo: "skip",
            showlegend: false,
        },

        // Right penalty arc
        {
            type: "scatter",
            mode: "lines",
            x: rightArcX,
            y: rightArcY,
            line: { color: "#CCCCCC", width: 1.2 },
            hoverinfo: "skip",
            showlegend: false,
        },
    ];


    const layout: any = {
        autosize: true,
        height: 460,
        margin: {
            l: 5,
            r: isMobile ? 5 : 45,
            t: isMobile ? 50 : 10,
            b: 10,
        },
        paper_bgcolor: "#25292C",
        plot_bgcolor: "#404040",
        showlegend: false,
        shapes,
        xaxis: {
            range: [0, 105],
            visible: false,
            fixedrange: true,
            constrain: "domain",
            showspikes: false,
            showline: false,
        },
        yaxis: {
            range: [0, 68],
            visible: false,
            fixedrange: true,
            scaleanchor: "x",
            scaleratio: 1,
            showspikes: false,
            showline: false,
        },
    };

    if (plotRef.current) {
        const config = {
            responsive: true,
            displayModeBar: false,
            scrollZoom: false,
        };

        if (!plotInitialized.current) {
            const graphDiv = await Plotly.newPlot(
                plotRef.current,
                data,
                layout,
                config
            );

            plotInitialized.current = true;

            // Click on a heatmap zone
            (graphDiv as any).on("plotly_click", (eventData: any) => {
                const point = eventData.points?.[0];

                if (!point || point.curveNumber !== 0) return;

                const zoneX = Math.round((point.x - 8.75) / 17.5);
                const zoneY = Math.round((point.y - 6.8) / 13.6);

                const clickedZone = playerZonesRef.current.find(
                    (zone) =>
                        zone.zone_x === zoneX &&
                        zone.zone_y === zoneY
                );

                if (!clickedZone || clickedZone.passes_attempted < minPasses) {
                    return;
                }

                setHoveredPass(null);
                setSelectedZone({ zone_x: zoneX, zone_y: zoneY });
            });

            // Hover over individual pass endpoints
            (graphDiv as any).on("plotly_hover", (eventData: any) => {
                const point = eventData.points?.[0];

                console.log("HOVER EVENT:", point?.curveNumber, point?.pointNumber);

                if (!point) return;
                if (point.curveNumber !== 3 && point.curveNumber !== 4) return;

                const isCompleted = point.curveNumber === 3;

                const matchingPasses = selectedZonePassesRef.current.filter(
                    (pass) => pass.outcome === (isCompleted ? 1 : 0)
                );

                const hoveredPass = matchingPasses[point.pointNumber];

                if (hoveredPass) {
                    setHoveredPass(hoveredPass);
                }
            });
    
        } else {
            await Plotly.react(
                plotRef.current,
                data,
                layout,
                config
            );
        }
    }
  }

    renderPlot();
}, [playerZones, selectedZonePasses, isMobile]);

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

    function choosePlayer(player: Player) {
        setSelectedPlayer(player);
        setSelectedZone(null);
        setHoveredPass(null);
        setSearch("");
        setError("");
    }       

    return (
        
        
        <section className="w-full">

            {/* Player search */}
            <div className="relative mb-6 w-full max-w-xl">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={loading ? "Loading players..." : "Search player or team..."}
                    disabled={loading}
                    className="w-full rounded-lg border border-[var(--border)] bg-surface px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent/60 md:text-base"
                />

                {filteredPlayers.length > 0 && (
                    <div className="absolute z-20 mt-1 max-h-72 w-full overflow-y-auto rounded-lg border border-[var(--border)] bg-surface shadow-xl">
                        {filteredPlayers.map((player) => (
                            <button
                                key={player.player_id}
                                onClick={() => choosePlayer(player)}
                                className="block w-full border-b border-[var(--border)] px-4 py-3 text-left transition hover:bg-background"
                            >
                                <span className="block text-sm font-medium text-foreground md:text-base">
                                    {player.player}
                                </span>
                                <span className="text-xs text-muted md:text-sm">
                                    {player.team}
                                </span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {error && (
                <p className="mb-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-300">
                    {error}
                </p>
            )}

            {selectedPlayer && (
                <>
                    {/* Selected player */}
                    <div className="mb-5">
                        <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                            {selectedPlayer.player}
                        </h3>
                        <p className="text-xs text-accent md:text-sm">
                            {selectedPlayer.team} | {selectedPlayer.appearances} appearances
                        </p>
                    </div>

                    {/* Headline statistics */}
                    <div className="mb-6 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
                        {[
                            {
                                label: "Passes Attempted",
                                value: selectedPlayer.passes_attempted.toLocaleString(),
                            },
                            {
                                label: "Average xPass",
                                value: selectedPlayer.avg_xpass.toFixed(3),
                            },
                            {
                                label: "PAx per 100 Passes",
                                value: (
                                    (selectedPlayer.total_PAx /
                                        selectedPlayer.passes_attempted) * 100
                                ).toFixed(2),
                            },
                            {
                                label: "Passing Accuracy",
                                value: `${(selectedPlayer.completion_rate * 100).toFixed(1)}%`,
                            },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-lg border border-[var(--border)] bg-surface p-3 sm:p-4"
                            >
                                <p className="text-[10px] text-muted sm:text-xs">
                                    {stat.label}
                                </p>
                                <p className="mt-1 text-lg font-semibold text-foreground sm:text-xl">
                                    {stat.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Selected zone */}
                    {selectedZone && selectedZoneStats && (
                        <div className="mb-5 rounded-xl border border-[var(--border)] bg-surface p-3 sm:p-5">

                            <div className="mb-4 flex items-center justify-between gap-2">
                                <h4 className="text-base font-semibold text-foreground sm:text-lg">
                                    Selected Zone
                                </h4>

                                <button
                                    onClick={() => {
                                        setSelectedZone(null);
                                        setHoveredPass(null);
                                    }}
                                    className="shrink-0 rounded-lg border border-[var(--border)] px-2 py-2 text-xs text-muted transition hover:bg-background hover:text-foreground sm:px-3 sm:text-sm"
                                >
                                    Clear selection ×
                                </button>
                            </div>

                            {/* Zone statistics */}
                            <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                <div>
                                    <p className="text-[10px] text-muted sm:text-xs">
                                        Passes attempted
                                    </p>
                                    <p className="mt-1 text-lg font-semibold text-foreground sm:text-xl">
                                        {selectedZoneStats.passes_attempted.toLocaleString()}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] text-muted sm:text-xs">
                                        Average xPass
                                    </p>
                                    <p className="mt-1 text-lg font-semibold text-foreground sm:text-xl">
                                        {selectedZoneStats.avg_xpass.toFixed(3)}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] text-muted sm:text-xs">
                                        PAx per 100
                                    </p>
                                    <p className="mt-1 text-lg font-semibold text-foreground sm:text-xl">
                                        {selectedZoneStats.PAx_per_100.toFixed(2)}
                                    </p>
                                </div>
                            </div>

                            {/* Individual pass information */}
                            <div className="mt-5 border-t border-[var(--border)] pt-4">
                                <h4 className="mb-3 text-sm font-semibold text-foreground">
                                    Selected Pass
                                </h4>

                                {hoveredPass ? (
                                    <>
                                        <div className="mb-3 flex items-center gap-3">
                                            <span className={`rounded-md px-2 py-1 text-xs font-medium ${
                                                hoveredPass.outcome === 1
                                                    ? "bg-[#05E862]/15 text-[#05E862]"
                                                    : "bg-[#E8863A]/15 text-[#E8863A]"
                                            }`}>
                                                {hoveredPass.outcome === 1 ? "Completed" : "Incomplete"}
                                            </span>

                                            <span className="text-sm font-medium text-muted">
                                                {hoveredPass.minute}:{String(hoveredPass.second).padStart(2, "0")}'
                                            </span>
                                        </div>

                                        <p className="mb-4 text-sm font-medium text-foreground">
                                            <span className="mx-2 text-muted">vs</span>
                                            {hoveredPass.opponent}
                                        </p>

                                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                            <div>
                                                <p className="text-xs text-muted">xPass</p>
                                                <p className="mt-1 text-sm font-semibold text-foreground sm:text-base">
                                                    {hoveredPass.xPass.toFixed(3)}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs text-muted">PAx</p>
                                                <p className="mt-1 text-sm font-semibold text-foreground sm:text-base">
                                                    {hoveredPass.PAx > 0 ? "+" : ""}
                                                    {hoveredPass.PAx.toFixed(3)}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs text-muted">Pass length</p>
                                                <p className="mt-1 text-sm font-semibold text-foreground sm:text-base">
                                                    {hoveredPass.pass_length.toFixed(1)} m
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <p className="text-xs text-muted sm:text-sm">
                                        Hover over a pass endpoint to view its information.
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* Pitch */}
            <div className="w-full overflow-hidden rounded-xl border border-[var(--border)] bg-surface p-1.5 sm:p-3 md:p-4">
                <div ref={plotRef} className="w-full" />
            </div>

            {!selectedPlayer && !loading && (
                <p className="mt-3 text-xs text-muted sm:text-sm">
                    Search for a player to begin exploring their passing data.
                </p>
            )}

        </section>


  );
}
