import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground px-5 sm:px-8 lg:px-12 py-2">
      
      
      {/* Title */}
      <section className="mt-4 mb-16 mx-auto max-w-6xl">

        <h1 className="mb-2 text-4xl font-bold md:text-6xl">
          Projects
        </h1>

        <p className="mb-3 text-xs font-medium tracking-[0.25em] text-accent">
          THE PORTFOLIO
        </p>

        <p className="text-sm leading-relaxed text-muted md:text-lg">
          A collection of football analytics projects combining data science,
          statistical modelling and visualisation to explore interesting
          questions within the game. Each project uses data to uncover insights
          beyond the surface and investigate new ways of understanding football.
        </p>

      </section>


      {/* Project Spotlight */}
      <section className="mx-auto mb-16 mt-8 max-w-6xl">

        <div className="mb-6 md:mb-10">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            Project Spotlight
          </h2>

          <p className="mb-2 text-xs font-medium tracking-[0.25em] text-accent">
            FEATURED RESEARCH
          </p>
        </div>

        <Link
          href="/projects/xpass"
          className="group block rounded-xl border border-[var(--border)] bg-surface/50 p-5 transition-colors duration-300 hover:border-accent/60 md:p-8"
        >

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
              alt="Expected Pass Completion project"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          <p className="text-sm leading-relaxed text-muted md:text-base">
            A machine learning model that estimates the probability of a pass
            being completed based on its characteristics and context. The project
            explores how expected pass completion can reveal passing difficulty,
            evaluate player performance and expose the limitations of conventional
            passing accuracy.
          </p>

        </Link>

      </section>


      {/* More Projects */}
      <section className = "mt-6 max-w-6xl mx-auto mb-12">

        <div className="mb-6 md:mb-10">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            More Projects
          </h2>

          <p className="text-xs font-medium tracking-[0.25em] text-accent">
            EXPLORE THE PORTFOLIO
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">

          {/* Asian Transfers */}
          <Link
            href="/projects/asian-transfers"
            className="group block rounded-xl border border-[var(--border)] bg-surface/50 p-5 transition-colors duration-300 hover:border-accent/60 md:p-7"
          >
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              The Premier League's East Asian Recruitment Gap
            </h3>

            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-accent">
              DATA ANALYSIS | PLAYER RECRUITMENT
            </p>

            <p className="text-sm leading-relaxed text-muted md:text-base">
              An investigation into whether Japanese and South Korean players are
              underrepresented in Premier League recruitment and whether potential
              undervalued talent could present opportunities for clubs.
            </p>
          </Link>

          {/* Usage Rates */}
          <Link
            href="/projects/premier-league-usage"
            className="group block rounded-xl border border-[var(--border)] bg-surface/50 p-5 transition-colors duration-300 hover:border-accent/60 md:p-7"
          >
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              Premier League
              <span className="block">Usage Rates</span>
            </h3>

            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-accent">
              DATA ANALYSIS | PLAYER ANALYSIS
            </p>

            <p className="text-sm leading-relaxed text-muted md:text-base">
              Adapting the concept of usage rates from basketball into football
              to investigate how player involvement can be measured and understood.
            </p>
          </Link>

          {/* Midfielder Archetypes */}
          <Link
            href="/projects/midfielder-archetypes"
            className="group block rounded-xl border border-[var(--border)] bg-surface/50 p-5 transition-colors duration-300 hover:border-accent/60 md:p-7"
          >
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              Midfielder Archetypes
            </h3>

            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-accent">
              UNSUPERVISED LEARNING | PLAYER PROFILING
            </p>

            <p className="text-sm leading-relaxed text-muted md:text-base">
              Using performance metrics and clustering techniques to identify
              modern midfield player archetypes beyond traditional positional labels.
            </p>
          </Link>

          {/* Match Report Generator */}
          <Link
            href="/projects/match-report-generator"
            className="group block rounded-xl border border-[var(--border)] bg-surface/50 p-5 transition-colors duration-300 hover:border-accent/60 md:p-7"
          >
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              Match Report Generator
            </h3>

            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-accent">
              DATA ANALYSIS | AUTOMATION
            </p>

            <p className="text-sm leading-relaxed text-muted md:text-base">
              A reusable engine that generates visualisations to summarise
              football matches using SofaScore data.
            </p>
          </Link>

        </div>

      </section>

    </main>
  );
}