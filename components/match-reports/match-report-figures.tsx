
type MatchReportFiguresProps = {
  slug: string;
  homeTeam: string;
  awayTeam: string;
};

export default function MatchReportFigures({
  slug,
  homeTeam,
  awayTeam,
}: MatchReportFiguresProps) {
  const basePath = `/plots/match-reports/${slug}`;

  return (
    <>
      {/* Average Positions */}
      <section className="mb-12 mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-medium tracking-[0.25em] text-accent">
          TEAM STRUCTURE
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <iframe
              src={`${basePath}/${homeTeam}_average_positions.html`}
              title={`${homeTeam} average positions`}
              className="h-[380px] w-full rounded-lg border border-[var(--border)]"
            />
          </div>

          <div>
            <iframe
              src={`${basePath}/${awayTeam}_average_positions.html`}
              title={`${awayTeam} average positions`}
              className="h-[380px] w-full rounded-lg border border-[var(--border)]"
            />
          </div>
        </div>
      </section>

      {/* Momentum and xG */}
      <section className="mb-12 mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-medium tracking-[0.25em] text-accent">
          MATCH STORY
        </p>

        <div className="grid gap-8 md:grid-cols-1">
          <div>
            <img
              src={`${basePath}/momentum_graph.png`}
              alt="Match momentum graph"
              className="w-full rounded-xl"
            />
          </div>

          <div>
            <img
              src={`${basePath}/xg.png`}
              alt="Expected goals graph"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Shot Maps */}
      <section className="mb-12 mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-medium tracking-[0.25em] text-accent">
          SHOT ANALYSIS
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <iframe
              src={`${basePath}/${homeTeam}_shot_map.html`}
              title={`${homeTeam} shot map`}
              className="h-[380px] w-full rounded-lg border border-[var(--border)]"
            />
          </div>

          <div>
            <iframe
              src={`${basePath}/${awayTeam}_shot_map.html`}
              title={`${awayTeam} shot map`}
              className="h-[380px] w-full rounded-lg border border-[var(--border)]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
