
import Link from "next/link";
import MatchReportArchive from "@/components/match-report-archive";

export default function MatchReports() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground px-5 sm:px-8 lg:px-12 py-2">
      
      
      {/* Title */}
      <section className="mt-4 mb-16 mx-auto max-w-6xl">

        <h1 className="mb-2 text-4xl font-bold md:text-6xl">
          Match Reports
        </h1>

        <p className="mb-3 text-xs font-medium tracking-[0.25em] text-accent">
          TACTICAL ANALYSIS
        </p>

        <p className="text-sm leading-relaxed text-muted md:text-lg">
          Combining my custom match report generator with further statistical and tactical analysis 
          to explore how selected football matches are played. As a Spurs fan the majority of these
          reports will focus on Tottenham - what they are doing wrong, and on the rare ocasion, what
          they are doing right.
        </p>

      </section>


      {/* Latest Report */}
      <section className="mx-auto mb-16 mt-8 max-w-6xl">

        <div className="mb-6 md:mb-10">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            Latest Match Report
          </h2>

          <p className="mb-2 text-xs font-medium tracking-[0.25em] text-accent">
            RECENT ANALYSIS
          </p>
        </div>

        <Link
          href="/match-reports/tottenham-ipswich"
          className="group block rounded-xl border border-[var(--border)] bg-surface/50 p-5 transition-colors duration-300 hover:border-accent/60 md:p-8"
        >

          <div className="mb-5">
            <h3 className="mb-2 text-2xl font-bold md:text-3xl">
              Tottenham Hotspur 2-0 Ipswich Town
            </h3>

            <p className="text-xs font-medium tracking-[0.2em] text-accent md:text-sm">
              PREMIER LEAGUE | GAMEWEEK 11 | 21 November 2026
            </p>
          </div>

          <div className="mb-6 overflow-hidden rounded-lg">
            <img
              src="/plots/match-reports/spurs-ipswich/lwb.jpg"
              alt="Leeds front three"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          <p className="mb-6 text-sm leading-relaxed text-muted md:text-base">
            Luca Williams-Barnett steals the show as Spurs cruise to victory at the Tottenham Hotspur Stadium.
            With a goal and assist on his first senior start, Williams-Barnett becomes Spurs' third youngest Premier League 
            goal scorer and second youngest player in Premier Legaue histroy to both score and assist in a single game.
          </p>

          <div className="border-t border-[var(--border)] pt-5">
            <div className="flex flex-wrap gap-2">
              {["Match Graphics", "Ipswich's Shape", "Exploiting Wide Areas", "Mateus Fernandes' Role"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border)] px-3 py-2 text-xs text-muted md:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </Link>

      </section>


      {/*Interactive Archive */}
      <MatchReportArchive />


    </main>
  );
}

