
"use client";

import { useEffect, useState } from "react";

interface BracketMatch {
  match_id: string;
  team_a: string;
  team_b: string;
  team_a_progression: number;
  team_b_progression: number;
  predicted_winner: string;
}

interface BracketData {
  tournament: string;
  simulation_count_per_match: number;
  rounds: {
    round_of_32: BracketMatch[];
    round_of_16: BracketMatch[];
    quarter_finals: BracketMatch[];
    semi_finals: BracketMatch[];
    final: BracketMatch[];
  };
  champion: string;
}

type RoundKey = keyof BracketData["rounds"];

function MatchCard({ match }: { match: BracketMatch }) {
  const teams = [
    {
      name: match.team_a,
      probability: match.team_a_progression,
    },
    {
      name: match.team_b,
      probability: match.team_b_progression,
    },
  ];

  return (
    <div className="flex h-full min-h-[76px] flex-col justify-center rounded-lg border border-white/10 bg-[#25292C] px-3 py-2 transition-colors hover:border-[#C5F36B]/40">
      <p className="mb-1.5 text-[9px] font-medium uppercase tracking-wider text-[#A0A4A5]">
        {match.match_id}
      </p>

      {teams.map((team) => {
        const winner = match.predicted_winner === team.name;

        return (
          <div
            key={team.name}
            className="flex items-center justify-between gap-2 py-0.5"
          >
            <span
              className={`truncate text-xs ${
                winner
                  ? "font-semibold text-[#C5F36B]"
                  : "text-[#F0F0E9]"
              }`}
            >
              {team.name}
            </span>

            <span
              className={`shrink-0 text-xs tabular-nums ${
                winner ? "text-[#C5F36B]" : "text-[#A0A4A5]"
              }`}
            >
              {(team.probability * 100).toFixed(1)}%
            </span>
          </div>
        );
      })}
    </div>
  );
}



function Connector({
  childSpan,
  side,
}: {
  childSpan: number;
  side: "left" | "right";
}) {
  const first = childSpan / 2;
  const second = childSpan * 1.5;
  const middle = childSpan;

  const path =
    side === "left"
      ? `
        M 0 ${first} H 50
        M 0 ${second} H 50
        M 50 ${first} V ${second}
        M 50 ${middle} H 100
      `
      : `
        M 100 ${first} H 50
        M 100 ${second} H 50
        M 50 ${first} V ${second}
        M 50 ${middle} H 0
      `;

  return (
    <svg
      viewBox={`0 0 100 ${childSpan * 2}`}
      preserveAspectRatio="none"
      className="h-full w-full overflow-visible"
    >
      <path
        d={path}
        fill="none"
        stroke="rgba(240,240,233,0.35)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}




function BracketHalf({
  rounds,
  side,
}: {
  rounds: BracketData["rounds"];
  side: "left" | "right";
}) {
  const isLeft = side === "left";

  const roundData = [
    {
      label: "Round of 32",
      matches: isLeft
        ? rounds.round_of_32.slice(0, 8)
        : rounds.round_of_32.slice(8, 16),
      span: 2,
      column: isLeft ? 1 : 7,
    },
    {
      label: "Round of 16",
      matches: isLeft
        ? rounds.round_of_16.slice(0, 4)
        : rounds.round_of_16.slice(4, 8),
      span: 4,
      column: isLeft ? 3 : 5,
    },
    {
      label: "Quarter-finals",
      matches: isLeft
        ? rounds.quarter_finals.slice(0, 2)
        : rounds.quarter_finals.slice(2, 4),
      span: 8,
      column: isLeft ? 5 : 3,
    },
    {
      label: "Semi-finals",
      matches: isLeft
        ? rounds.semi_finals.slice(0, 1)
        : rounds.semi_finals.slice(1, 2),
      span: 16,
      column: isLeft ? 7 : 1,
    },
  ];

  const gridColumns =
    "minmax(125px, 1fr) 22px minmax(125px, 1fr) 22px minmax(125px, 1fr) 22px minmax(125px, 1fr)";

  return (
    <div className="min-w-[610px] flex-1">
      {/* Round headings */}
        <div
            className="mb-4 grid items-end"
            style={{ gridTemplateColumns: gridColumns }}
        >
            {roundData.map((round) => (
                <div
                    key={round.label}
                    style={{
                    gridColumn: round.column,
                    gridRow: 1,
                    }}
                    className="min-w-0 px-1"
                >
                    <p className="border-b border-white/10 pb-2 text-[10px] font-semibold uppercase tracking-wider text-[#A0A4A5] whitespace-nowrap">
                    {round.label}
                    </p>
                </div>
            ))}
        </div>

      {/* Bracket matches and connectors */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: gridColumns,
          gridTemplateRows: "repeat(16, minmax(42px, 1fr))",
        }}
      >
        {/* Match cards */}
        {roundData.map((round) =>
          round.matches.map((match, index) => (
            <div
              key={match.match_id}
              style={{
                gridColumn: round.column,
                gridRow: `${index * round.span + 1} / span ${round.span}`,
                alignSelf: "center",
                zIndex: 1,
              }}
              className="px-1"
            >
              <MatchCard match={match} />
            </div>
          ))
        )}

        {/* Connecting paths */}
        {roundData.slice(0, 3).map((round, roundIndex) => {
          const nextSpan = round.span * 2;

          // Connectors go between the two rounds.
          // On the right, they must sit to the LEFT of their match cards.
          const connectorColumn = isLeft
            ? round.column + 1
            : round.column - 1;

          return Array.from(
            { length: round.matches.length / 2 },
            (_, index) => (
              <div
                key={`connector-${roundIndex}-${index}`}
                style={{
                  gridColumn: connectorColumn,
                  gridRow: `${index * nextSpan + 1} / span ${nextSpan}`,
                  alignSelf: "stretch",
                  zIndex: 0,
                }}
              >
                <Connector childSpan={round.span} side={side} />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}


export default function WorldCupBracket() {
    const [data, setData] = useState<BracketData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/wc-simulation/world_cup_bracket.json")
        .then((response) => {
            if (!response.ok) {
            throw new Error("Unable to load bracket data");
            }
            return response.json();
        })
        .then((result: BracketData) => setData(result))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
        <p className="text-sm text-[#A0A4A5]">
            Loading tournament bracket...
        </p>
        );
  }

  if (!data) {
    return (
      <p className="text-sm text-[#A0A4A5]">
        Unable to load World Cup bracket.
      </p>
    );
  }

  const final = data.rounds.final[0];

  return (
    <section className="space-y-6">

      <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#151719] p-4 md:p-6">
        <div className="flex min-w-[1320px] items-stretch gap-2">
          <BracketHalf rounds={data.rounds} side="left" />

          
            <div className="relative flex w-[150px] shrink-0 flex-col items-center justify-center gap-4">
                <p className="absolute top-0 w-full border-b border-white/10 pb-2 text-center text-[10px] font-semibold uppercase tracking-wider text-[#A0A4A5] whitespace-nowrap">
                    Final
                </p>

            {final && (
              <div className="w-full rounded-xl border border-[#C5F36B]/40 bg-[#25292C] p-3">
                <p className="mb-3 text-[9px] uppercase tracking-wider text-[#A0A4A5]">
                  {final.match_id}
                </p>

                {[final.team_a, final.team_b].map((team) => {
                  const winner = final.predicted_winner === team;
                  const probability =
                    team === final.team_a
                      ? final.team_a_progression
                      : final.team_b_progression;

                  return (
                    <div
                      key={team}
                      className="mb-2 flex items-center justify-between gap-2"
                    >
                      <span
                        className={`text-xs ${
                          winner
                            ? "font-semibold text-[#C5F36B]"
                            : "text-[#F0F0E9]"
                        }`}
                      >
                        {team}
                      </span>
                      <span className="text-xs tabular-nums text-[#A0A4A5]">
                        {(probability * 100).toFixed(1)}%
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="w-full rounded-xl border border-[#C5F36B]/50 bg-[#C5F36B]/10 p-3 text-center">
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-[#C5F36B]">
                Predicted champion
              </p>
              <p className="text-lg font-semibold text-[#F0F0E9]">
                {data.champion}
              </p>
            </div>
          </div>

          <BracketHalf rounds={data.rounds} side="right" />
        </div>
      </div>
    </section>
  );
}
