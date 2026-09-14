import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#7678A8] via-[#40425C] to-[#272833] text-white px-12 py-2">


      {/* Navigation */}
      <nav className="flex items-center justify-between py-6 border-b border-white/50">
        <h2 className="text-md font-bold md:text-xl">
          Seth McKinnon-Evans
        </h2>

        <div className="flex gap-4 text-xs text-white md:text-sm md:gap-8">
          <Link 
          href="/about" 
          className="transition duration-200 hover:scale-110 hover:text-gray-300"
          >
            About
          </Link>

          <Link 
          href="/projects" 
          className="transition duration-200 hover:scale-110 hover:text-gray-300"
          >
            Projects
          </Link>

          <Link 
          href="/match-reports" 
          className="transition duration-200 hover:scale-110 hover:text-gray-300"
          >
            Match Reports
          </Link>

          <Link 
          href="/contact" 
          className="transition duration-200 hover:scale-110 hover:text-gray-300"
          >
            Contact
          </Link>
        </div>
      </nav>


      {/* Hero */}
      <section className="flex min-h-[25vh] md:min-h-[50vh] flex-col justify-center items-center mx-auto">

        <h1 className="mb-2 max-w-4xl text-5xl font-bold tracking-tight md:text-8xl">
          EXPECTED xG
        </h1>

        <p className="mb-8 text-[10px] font-medium tracking-[0.3em] text-gray-400 md:text-sm">
          DATA SCIENCE · ANALYTICS · MACHINE LEARNING
        </p>

        <p className="max-w-xl text-center text-md leading-normal tracking-normal text-gray-400 md:text-xl">
          Exploring the questions behind football through data, statistical analysis, machine learning and tactical insight.
        </p>

      </section>


      {/* Projects */}
      <section id="projects" className="px-12">


        <h2 className="mb-8 text-2xl font-bold md:text-4xl">
          Featured Projects
        </h2>

        <div className = "grid gap-6 md:gap-12 md:grid-cols-2">

          <Link
            href="/projects/world-cup-predictor"
            className="group rounded-xl border border-white/30 p-8 transition duration-200 hover:scale-105 hover:border-white hover:bg-white/10"
          >
          
            <h3 className="mb-1 text-lg font-bold md:text-2xl">
              2026 World Cup Predictor
            </h3>  
            
            <p className="mb-3 text-xs tracking-wide text-gray-500 md:text-sm">
              MACHINE LEARNING
            </p>

            <p className ="text-sm text-gray-400 md:text-base">
              An evaluation of various machine learning models to find which is most accurate at predicitng
              football match results and using the chosen model to simulate the 2026 World Cup. 
            </p>

          </Link>

          <Link
            href="/projects/premier-league-usage"
            className="group rounded-xl border border-white/30 p-8 transition duration-200 hover:scale-105 hover:border-white hover:bg-white/10"
          >
            <h3 className="mb-1 text-lg font-bold md:text-2xl">
              Premier League Player Usage Rates
            </h3>

            <p className="mb-3 text-xs tracking-wide text-gray-500 md:text-sm">
              DATA ANALYSIS
            </p>

            <p className="text-sm text-gray-400 md:text-base">
              An analysis of the Premier League during the 2025/26 season to assess how effective
              players are given the share of the ball they recieve and their roles within their teams.
            </p>

          </Link>
  
          <Link
            href="/projects/midfielder-archetypes"
            className="group rounded-2xl border border-white/30 p-8 transition duration-200 hover:scale-105 hover:border-white hover:bg-white/10"
          >
            <h3 className="mb-1 text-lg font-bold md:text-2xl">
              Midfielder Archetypes
            </h3>

            <p className="mb-3 text-xs tracking-wide text-gray-500 md:text-sm">
              UNSUPERVISED LEARNING · PLAYER PROFILING
            </p>

            <p className="text-sm text-gray-400 md:text-base">
              An unsupervised learning project that uses performance metrics and clustering techniques to identify modern midfield player archetypes beyond traditional positional labels.
            </p>

          </Link>

          <Link
            href="/projects/match-report-generator"
            className="group rounded-2xl border border-white/30 p-8 transition duration-200 hover:scale-105 hover:border-white hover:bg-white/10"
          >
            <h3 className="mb-1 text-lg font-bold md:text-2xl">
              Match Report Generator
            </h3>

            <p className="mb-3 text-xs tracking-wide text-gray-500 md:text-sm">
              DATA ANALYSIS
            </p>

            <p className="text-sm text-gray-400 md:text-base">
              A reusable engine which generates graphics to summarise any match using 
              Sofascore data.
            </p>

          </Link>
        </div>

      </section>
      
      {/* Match Reports */}
      <section id="match-reports" className="px-12 py-10">

        <h2 className="mb-8 text-2xl font-bold md:text-4xl">
          Latest Match Report 
        </h2>

        <div className = "space-y-4">
          <Link
            href="/match-reports/tottenham-everton"
            className="group block rounded-2xl border border-white/30 p-8 transition duration-200 hover:border-white hover:scale-105 hover:bg-white/10"
            >

            <h3 className="mb-1 text-lg font-bold md:text-2xl">
              Tottenham Hotspur 0-0 Everton
            </h3>

            <p className = "mb-3 text-xs tracking-wider text-gray-500 md:text-sm">
              PREMIER LEAGUE | GW4 | 12.09.2026
            </p>

            <p className="text-sm text-gray-400 md:text-base">
              Spurs fail to score a goal in the opening four games of a season for the first time in history.

            </p>

          </Link>
           
        </div>

      </section>

    </main>
  );
}