import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#404040] text-white px-12 py-2">


      {/* Navigation */}
      <nav className="flex items-center justify-between py-6 border-b border-white/30">
        <h2 className="text-xl font-bold">
          Seth McKinnon-Evans
        </h2>

        <div className="flex gap-8 text-sm text-gray-400">
          <Link 
          href="/about" 
          className="transition duration-200 hover:scale-110 hover:text-white"
          >
            About
          </Link>

          <Link 
          href="/projects" 
          className="transition duration-200 hover:scale-110 hover:text-white"
          >
            Projects
          </Link>

          <Link 
          href="/match-reports" 
          className="transition duration-200 hover:scale-110 hover:text-white"
          >
            Match Reports
          </Link>

          <Link 
          href="/contact" 
          className="transition duration-200 hover:scale-110 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </nav>


      {/* Hero */}
      <section className="flex min-h-[50vh] flex-col justify-center items-center px-12">

        <h1 className="mb-2 max-w-4xl text-6xl font-bold tracking-tight md:text-8xl">
          -WEBSITE NAME?-
        </h1>

        <p className="mb-8 text-sm font-medium tracking-[0.3em] text-gray-500">
          DATA SCIENCE · ANALYTICS · MACHINE LEARNING
        </p>

        <p className="max-w-lg text-lg leading-normal tracking-normal text-gray-400">
          SOME SMALL DESCRIPTION: I use data, statistical modelling and machine learning
          to solve analytical problems.
        </p>

      </section>


      {/* Projects */}
      <section id="projects" className="px-12 py-10">


        <h2 className="mb-8 text-4xl font-bold">
          Featured Projects
        </h2>

        <div className = "grid gap-12 md:grid-cols-2">

          <Link
            href="/projects/world-cup-predictor"
            className="group rounded-2xl border border-white/30 p-8 transition-200 hover:scale-105 hover:border-white hover:bg-white/10"
          >
          
            <h3 className="mb-1 text-2xl font-bold">
              2026 World Cup Predictor
            </h3>  
            
            <p className="mb-3 text-sm tracking-wide text-gray-500">
              MACHINE LEARNING
            </p>

            <p className ="text-gray-400">
              Description...
            </p>

          </Link>

          <Link
            href="/projects/premier-league-usage"
            className="group rounded-2xl border border-white/30 p-8 transition-200 hover:scale-105 hover:border-white hover:bg-white/10"
          >
            <h3 className="mb-1 text-2xl font-bold">
              Premier League Player Usage
            </h3>

            <p className="mb-3 text-sm tracking-wide text-gray-500">
              DATA ANALYSIS
            </p>

            <p className="text-gray-400">
              Description...
            </p>

          </Link>
  
          <Link
            href="/projects/midfielder-archetypes"
            className="group rounded-2xl border border-white/30 p-8 transition-200 hover:scale-105 hover:border-white hover:bg-white/10"
          >
            <h3 className="mb-1 text-2xl font-bold">
              Midfielder Archetypes
            </h3>

            <p className="mb-3 text-sm tracking-wide text-gray-500">
              UNSUPERVISED LEARNING · PLAYER PROFILING
            </p>

            <p className="leading-tight tracking-wide text-gray-400">
              An unsupervised learning project that uses performance metrics and clustering techniques to identify modern midfield player archetypes beyond traditional positional labels.
            </p>

          </Link>

          <Link
            href="/projects/match-report-generator"
            className="group rounded-2xl border border-white/30 p-8 transition-200 hover:scale-105 hover:border-white hover:bg-white/10"
          >
            <h3 className="mb-1 text-2xl font-bold">
              Match Report Generator
            </h3>

            <p className="mb-3 text-sm tracking-wide text-gray-500">
              DATA ANALYSIS
            </p>

            <p className="text-gray-400">
              Description...
            </p>

          </Link>
        </div>

      </section>
      
      {/* Match Reports */}
      <section id="match-reports" className="px-12 py-10">

        <h2 className="mb-8 text-4xl font-bold">
          Latest Match Report 
        </h2>

        <div className = "space-y-4">
          <Link
            href="/match-reports/forest-tottenham"
            className="group block rounded-2xl border border-white/30 p-8 transition-200 hover:border-white hover:scale-105 hover:bg-white/10"
            >

            <h3 className="mb-1 text-2xl font-bold">
              Nottingham Forest 0-0 Tottenham Hotspur
            </h3>

            <p className = "mb-3 text-sm text-gray-500">
              PREMIER LEAGUE | GW3 | 05.09.2026
            </p>

            <p className="text-gray-400">
              Overview...
            </p>

          </Link>
           
        </div>

      </section>

    </main>
  );
}