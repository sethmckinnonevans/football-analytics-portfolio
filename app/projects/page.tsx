import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Projects() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#7678A8] via-[#40425C] to-[#272833] text-white px-12 py-2">

      {/* Navigation */}
      <Navbar />

      {/* Title */}
      <section className = "mt-6 max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 md:text-6xl">
          Projects
        </h1>

        <p className="text-md text-white md:text-lg">
          This is a collection of football analytics projects combining data science, statistical modelling and 
          visualisation to explore interesting ideas within the game. Each project uses 
          data to uncover insights beyond the surface and answer new questions.
        </p>
      </section>


      {/* Project Spotlight */}
      <section className = "mt-6 max-w-6xl mx-auto mb-12">

        <h2 className="mb-4 md:mb-8 text-2xl font-bold md:text-4xl">
          Project Spotlight
        </h2>

         <div className = "mb-8 space-y-4">
          <Link
            href="/projects/asian-transfers"
            className="group block rounded-2xl border border-white/30 p-4 md:p-8 transition duration-200 hover:border-white hover:scale-105 hover:bg-white/10"
            >

            <h3 className="mb-1 text-xl font-bold md:text-2xl">
              The Premier League's East Asian Recruitment Gap
            </h3>

            <p className = "mb-4 text-xs tracking-wider text-gray-500 md:text-sm">
              DATA ANALYSIS · PLAYER RECRUITMENT
            </p>

            <div className = "max-w-lg mx-auto md:max-w-4xl mb-4">
                <img
                    src="/plots/projects/asian-transfers/logo.png"
                    alt="United v Spurs cumulative xG"
                    className="rounded-xl"
                />
            </div>

            <p className="mb-4 text-sm text-gray-400 md:text-lg">
              An analysis of the Premier League during the 2025/26 season, exploring how effectively players use
              their share of the ball within teams and across positional groups. Inspired by
              usage rates in basketball, I adapted this concept for football to investigate its potential
              applications for identifying effective creators, analysing team structures and understanding transfer decisions.
            </p>

          </Link>

        </div>

      </section>


      {/* More Projects */}
      <section className = "mt-6 max-w-6xl mx-auto mb-12">

        <h2 className="mb-4 md:mb-8 text-2xl font-bold md:text-4xl">
          More Projects
        </h2> 

        <div className = "grid gap-6 md:gap-12 md:grid-cols-2">

          <Link
            href="/projects/premier-league-usage"
            className="group rounded-2xl border border-white/30 p-4 md:p-8 transition duration-200 hover:scale-105 hover:border-white hover:bg-white/10"
            >
            <h3 className="mb-1 text-lg font-bold md:text-2xl">
              Premier League Usage Rates
            </h3>

            <p className="mb-3 text-xs tracking-wide text-gray-500 md:text-sm">
              DATA ANALYSIS · FOOTBALL ANALYSIS
            </p>

            <p className="text-sm text-gray-400 md:text-base">
              Adapting the concept of usage rates from basketball into the context of football, to understand
              its potential utilities in analysing the game.
            </p>

          </Link>
  
          <Link
            href="/projects/midfielder-archetypes"
            className="group rounded-2xl border border-white/30 p-4 md:p-8 transition duration-200 hover:scale-105 hover:border-white hover:bg-white/10"
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
            className="group rounded-2xl border border-white/30 p-4 md:p-8 transition duration-200 hover:scale-105 hover:border-white hover:bg-white/10"
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

      {/* Footer*/}
      <Footer />
    </main>
  );
}