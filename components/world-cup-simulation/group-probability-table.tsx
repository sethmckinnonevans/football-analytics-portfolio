
"use client";

import { useEffect, useState } from "react";

type GroupProbability = {
  group: string;
  team: string;
  "1st": number;
  "2nd": number;
  "3rd": number;
  "4th": number;
};

const groups = "ABCDEFGHIJKL".split("");

const columns = [
  { key: "1st", label: "1ST" },
  { key: "2nd", label: "2ND" },
  { key: "3rd", label: "3RD" },
  { key: "4th", label: "4TH" },
] as const;

export default function GroupProbabilityTable() {
  const [data, setData] = useState<GroupProbability[]>([]);
  const [selectedGroup, setSelectedGroup] = useState("A");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/data/wc-simulation/group_stage_probabilities.json")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load probabilities");
        return response.json();
      })
      .then((json: GroupProbability[]) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const groupData = data
    .filter((row) => row.group === selectedGroup)
    .sort((a, b) => b["1st"] - a["1st"]);

  if (loading) {
    return <p className="text-muted">Loading group probabilities...</p>;
  }

  if (error) {
    return <p className="text-red-400">Unable to load group probabilities.</p>;
  }

  return (
    <section className="w-full space-y-6">

      {/* Group selector */}
      <div className="flex flex-nowrap gap-2 overflow-x-auto pb-1">
        {groups.map((group) => (
          <button
            key={group}
            onClick={() => setSelectedGroup(group)}
            aria-pressed={selectedGroup === group}
            className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs transition-colors sm:px-4 sm:py-2 sm:text-xs ${
              selectedGroup === group
                ? "bg-accent text-background border-accent font-semibold"
                : "bg-surface text-muted border-[var(--border)] hover:border-accent hover:text-foreground"
            }`}
          >
            {group}
          </button>
        ))}
      </div>

      {/* Table heading */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground md:text-xl">
          Group {selectedGroup}
        </h3>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-[var(--border)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] text-xs sm:min-w-[550px] sm:text-sm">

            <thead>
              <tr className="border-b border-[var(--border)] bg-surface text-muted">
                <th className="px-2 py-3 text-left font-medium sm:px-4 sm:py-4">TEAM</th>

                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-2 py-3 text-center font-medium sm:px-4 sm:py-4"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
      
            <tbody>
            {groupData.map((row) => (
                <tr
                key={row.team}
                className="border-b border-[var(--border)] last:border-b-0 text-foreground"
                >
                <td className="whitespace-nowrap px-2 py-3 text-left tabular-nums sm:px-3 sm:py-4">
                    {row.team}
                </td>

                {columns.map((column) => {
                    const value = Number(row[column.key]);

                    // Map probability from 0–100% onto a grey-to-accent colour scale
                    const rawProbability = Math.max(0, Math.min(value, 100)) / 100;
                    const probability = Math.pow(rawProbability, 0.6);

                    const low = [216, 222, 206];    // #CBE09F
                    const high = [157, 245, 0];   // #C5F36B

                    const backgroundColor = `rgb(${low
                    .map((colour, i) =>
                        Math.round(colour + (high[i] - colour) * probability)
                    )
                    .join(", ")})`;

                    return (
                    <td
                        key={column.key}
                        className="py-3 px-3 text-center tabular-nums"
                    >
                        <span
                          className="inline-block min-w-[48px] rounded-md px-1.5 py-1 sm:min-w-[58px] sm:px-2"
                          style={{
                            backgroundColor,
                            color: "#151719",
                          }}
                        >
                          {value.toFixed(1)}%
                        </span>
                    </td>
                    );
                })}
                </tr>
            ))}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
}
