import Link from "next/link";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground px-5 sm:px-8 lg:px-12 py-2">
      
      
      {/* Navigation */}
      <nav className="mb-10 px-5 sm:px-8 lg:px-12">

        <div className="mx-auto flex max-w-6xl flex-col gap-4 border-b border-[var(--border)] py-6 md:flex-row md:items-center md:justify-between">

          <h2 className="text-sm font-bold md:text-xl whitespace-nowrap">
            Seth McKinnon-Evans
          </h2>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted md:gap-8 md:text-sm">
            <Link href="/about" className="transition-colors duration-200 hover:text-accent">
              About
            </Link>
            <Link href="/projects" className="transition-colors duration-200 hover:text-accent">
              Projects
            </Link>
            <Link href="/match-reports" className="transition-colors duration-200 hover:text-accent">
              Match Reports
            </Link>
            <Link href="/interactive" className="transition-colors duration-200 hover:text-accent">
              Interactive
            </Link>
            <Link href="/contact" className="transition-colors duration-200 hover:text-accent">
              Contact
            </Link>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-[35vh] md:min-h-[55vh] flex-col justify-center items-center mx-auto py-8 md:py-16 text-center">
        <img
          src="/logo/exxg-full-nobg.png"
          alt="ExpectedxG logo"
          className="w-full max-w-2xl h-auto mb-6"
        />

        <p className="mb-6 text-[10px] font-medium tracking-[0.3em] text-accent md:text-xs">
          FOOTBALL ANALYTICS | DATA SCIENCE | MACHINE LEARNING
        </p>

        <p className="max-w-2xl text-base leading-relaxed text-muted md:text-xl">
          Exploring the questions behind football through data, statistical analysis, machine learning and tactical insight.
        </p>

      </section>


      {/* Projects */}
      <section className="mb-8 max-w-6xl mx-auto mb-12">

        <div className="mb-6 md:mb-10">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>

          <p className="mb-2 text-xs font-medium tracking-[0.25em] text-accent">
            SELECTED WORK
          </p>
        </div>

        <div className = "mb-8 space-y-4">
          <Link
            href="/projects/xpass"
            className="group block rounded-xl border border-[var(--border)] bg-surface/50 p-5 md:p-8 transition-colors duration-300 hover:border-accent/60"            >

            <div className="mb-5">
              <h3 className="mb-2 text-2xl font-bold md:text-3xl">
                Expected Pass Completion
                <span className="text-muted"> (xPass)</span>
              </h3>

              <p className="mb-2 text-xs md:text-sm font-medium tracking-[0.2em] text-accent">
                MACHINE LEARNING | FOOTBALL ANALYTICS
              </p>
            </div>

            <div className="mb-6 overflow-hidden rounded-lg">                
              <img
                src="/plots/projects/xpass/xpass-cover.png"
                alt="xPass cover"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <p className="text-sm leading-relaxed text-muted md:text-base">
              How can expected pass completion (xPass) transform the way we analyse passing in football? This project 
              uses machine learning to predict the probability of a pass being completed using historical data. It explores
              the added detail xPass provides compared to standard pass completion metrics, and how it can be used to 
              evaluate player performance and passing ability. 
            </p>

          </Link>

        </div>

        <div className = "grid gap-6 md:gap-12 md:grid-cols-2">

          <Link
            href="/projects/asian-transfers"
            className="group flex flex-col rounded-xl border border-[var(--border)] bg-surface/50 p-5 md:p-7 transition-colors duration-300 hover:border-accent/60"
          >
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              The Premier League's East Asian Recruitment Gap
            </h3>

            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-accent">
              DATA ANALYSIS | PLAYER RECRUITMENT
            </p>

            <p className="text-sm leading-relaxed text-muted md:text-base">
              Investigating the representation of Japanese and South Korean players in Premier League recruitment, and whether overlooked talent could present opportunities for clubs.
            </p>
          </Link>

          <Link
            href="/projects/premier-league-usage"
            className="group flex flex-col rounded-xl border border-[var(--border)] bg-surface/50 p-5 md:p-7 transition-colors duration-300 hover:border-accent/60"
          >
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              Premier League
              <span className="block">Usage Rates</span>
            </h3>

            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-accent">
              DATA ANALYSIS | PLAYER ANALYSIS
            </p>

            <p className="text-sm leading-relaxed text-muted md:text-base">
              Adapting the concept of usage rates from basketball into football to investigate how player involvement can be measured and understood.
            </p>
          </Link>
        </div>
      </section>
      
      {/* Latest Report */}
      <section className="mt-16 max-w-6xl mx-auto mb-16">

        <div className="mb-6 md:mb-10">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            Latest Match Report
          </h2>

          <p className="mb-2 text-xs font-medium tracking-[0.25em] text-accent">
            FROM THE TOUCHLINE
          </p>
        </div>

        <div className = "space-y-4">
          <Link
            href="/match-reports/leeds-tottenham"
            className="group block rounded-xl border border-[var(--border)] bg-surface/50 p-5 md:p-8 transition-colors duration-300 hover:border-accent/60"            >

            <div className="mb-5">
              <h3 className="mb-2 text-2xl font-bold md:text-3xl">
                Leeds United 1-0 Tottenham Hotspur
              </h3>

              <p className="mt-2 text-xs tracking-[0.2em] text-accent md:text-sm">
                PREMIER LEAGUE | GAMEWEEK 10 | 7 NOVEMBER 2026
              </p>
            </div>

            <div className="mb-6 overflow-hidden rounded-lg">
                <img
                    src="/plots/match-reports/leeds-spurs/front-three.jpg"
                    alt="Leeds' press"
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
            </div>

            <p className="mb-6 max-w-4xl text-sm leading-relaxed text-muted md:text-base">
              Spurs' winning streak came to an abrupt end at Elland Road, where an aggressive 
              Leeds press disrupted De Zerbi's side throughout. Despite dominating possession, 
              Tottenham struggled to create meaningful chances, finishing with just 0.72 xG.
            </p>

            <div className="border-t border-[var(--border)] pt-5">
              <div className="flex flex-wrap gap-2">
                {["Match Graphics", "Leeds' Press", "Spurs' Build-up"].map((tag) => (
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

        </div>

      </section>
      
      {/* Match Reports */}
      <Footer />

    </main>
  );
}