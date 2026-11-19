
"use client";

import Link from "next/link";
import { useState } from "react";

const reports = [
  {
    title: "Tottenham Hotspur 2-0 Crystal Palace",
    href: "/match-reports/tottenham-crystal-palace",
    metadata: "PREMIER LEAGUE | GW9 | 31.10.2026",
    description:
      "Spurs beat 10-man Crystal Palace in a dominant display which saw a Premier League debut for Luca Williams-Barnett.",
  },
  {
    title: "Chelsea 0-2 Tottenham Hotspur",
    href: "/match-reports/chelsea-tottenham",
    metadata: "PREMIER LEAGUE | GW8 | 24.10.2026",
    description:
      "Spurs win at Stamford Bridge for just the second time in the Premier League era.",
  },
  {
    title: "Tottenham Hotspur 3-1 Coventry",
    href: "/match-reports/tottenham-coventry",
    metadata: "PREMIER LEAGUE | GW7 | 19.10.2026",
    description:
      "James Maddison's wonder strike sends Spurs on their way to their first win of the season.",
  },
  {
    title: "Manchester United 1-1 Tottenham Hotspur",
    href: "/match-reports/manutd-tottenham",
    metadata: "PREMIER LEAGUE | GW6 | 10.10.2026",
    description:
      "Spurs manage to rescue a point at Old Trafford, despite going down to ten men after Bentancur's headbutt.",
  },
  {
    title: "Tottenham Hotspur 2-3 Aston Villa",
    href: "/match-reports/tottenham-villa",
    metadata: "PREMIER LEAGUE | GW5 | 19.09.2026",
    description:
      "Spurs head into the international break bottom of the Premier League despite ending their seven hour league goal drought.",
  },
  {
    title: "Tottenham Hotspur 0-0 Everton",
    href: "/match-reports/tottenham-everton",
    metadata: "PREMIER LEAGUE | GW4 | 12.09.2026",
    description:
      "Spurs fail to score a goal in the opening four games of a season for the first time in history.",
  },
  {
    title: "Nottingham Forest 0-0 Tottenham Hotspur",
    href: "/match-reports/forest-tottenham",
    metadata: "PREMIER LEAGUE | GW3 | 05.09.2026",
    description:
      "Spurs gain their first point of the season in a lacklustre offensive performance.",
  },
];

export default function MatchReportArchive() {
  const [search, setSearch] = useState("");

  const filteredReports = reports.filter((report) =>
    `${report.title} ${report.metadata} ${report.description}`
      .toLowerCase()
      .includes(search.toLowerCase().trim())
  );

  return (
    <section className="mx-auto mb-16 max-w-6xl">

      {/* Section heading */}
      <div className="mb-6 md:mb-10">
        <h2 className="mb-2 text-3xl font-bold md:text-4xl">
          Archive
        </h2>

        <p className="text-xs font-medium tracking-[0.25em] text-accent">
          PREVIOUS REPORTS
        </p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-surface/50 px-4 py-3 transition-colors duration-200 focus-within:border-accent/60">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 text-muted"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search match reports..."
            aria-label="Search match reports"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted md:text-base"
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="shrink-0 text-xs text-muted transition-colors hover:text-accent"
              aria-label="Clear search"
            >
              Clear
            </button>
          )}
        </div>

        <p className="mt-3 text-xs text-muted">
          Showing {filteredReports.length} of {reports.length} reports
        </p>
      </div>

      {/* Report grid */}
      {filteredReports.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">

          {filteredReports.map((report) => (
            <Link
              key={report.href}
              href={report.href}
              className="group rounded-xl border border-[var(--border)] bg-surface/50 p-5 transition-colors duration-300 hover:border-accent/60 md:p-6"
            >
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                {report.title}
              </h3>

              <p className="mb-3 text-xs font-medium tracking-[0.15em] text-accent md:text-sm">
                {report.metadata}
              </p>

              <p className="text-sm leading-relaxed text-muted md:text-base">
                {report.description}
              </p>
            </Link>
          ))}

        </div>
      ) : (
        <div className="rounded-xl border border-[var(--border)] bg-surface/50 px-6 py-12 text-center">
          <h3 className="mb-2 text-lg font-semibold">
            No reports found
          </h3>
          <p className="text-sm text-muted">
            Try searching for a different team, match or keyword.
          </p>
        </div>
      )}

    </section>
  );
}
