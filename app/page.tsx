import Link from "next/link";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#7678A8] via-[#40425C] to-[#272833] text-white px-12 py-2">


      {/* Navigation */}
      <nav className="flex items-center mb-10 py-6 justify-between border-b border-white/50">
        <h2 className="text-[8px] font-bold md:text-xl whitespace-nowrap">
          Seth McKinnon-Evans
        </h2>

        <div className="flex gap-2 md:gap-8 text-[10px] text-white md:text-sm">
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

        <img
          src="/logo/exxg-full-nobg.png"
          alt="logo"
          className="w-max h-auto mb-2 md:mb-4"
        />

        <p className="mb-4 md:mb-8 text-[10px] text-center font-medium tracking-[0.3em] text-gray-400 md:text-sm">
          DATA SCIENCE · ANALYTICS · MACHINE LEARNING
        </p>

        <p className="max-w-xl text-center text-sm leading-normal tracking-normal text-white md:text-xl">
          Exploring the questions behind football through data, statistical analysis, machine learning and tactical insight.
        </p>

      </section>

      {/* Projects */}
      <section className="mb-8 max-w-6xl mx-auto mb-12">


        <h2 className="mb-4 md:mb-8 text-2xl font-bold md:text-4xl">
          Featured Projects
        </h2>

         <div className = "mb-8 space-y-4">
          <Link
            href="/projects/premier-league-usage"
            className="group block rounded-2xl border border-white/30 p-4 md:p-8 transition duration-200 hover:border-white hover:scale-105 hover:bg-white/10"
            >

            <h3 className="mb-1 text-xl font-bold md:text-2xl">
              Premier League Usage Rates
            </h3>

            <p className = "mb-4 text-xs tracking-wider text-gray-500 md:text-sm">
              DATA ANALYSIS · FOOTBALL ANALYTICS
            </p>

            <div className = "max-w-lg mx-auto md:max-w-4xl mb-4">
                <img
                    src="/plots/projects/premier-league-usage-rates/Liverpool FC-usage-rates.png"
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

        <div className = "grid gap-6 md:gap-12 md:grid-cols-2">
  
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
      
      {/* Latest Report */}
      <section className = "mt-6 max-w-6xl mx-auto mb-12">

        <h2 className="mb-4 md:mb-8 text-2xl font-bold md:text-4xl">
          Latest Match Report 
        </h2>

        <div className = "space-y-4">
          <Link
            href="/match-reports/tottenham-coventry"
            className="group block rounded-2xl border border-white/30 p-4 md:p-8 transition duration-200 hover:border-white hover:scale-105 hover:bg-white/10"
            >

            <h3 className="mb-1 text-xl font-bold md:text-2xl">
              Tottenham Hotspur 3-1 Coventry City
            </h3>

            <p className = "mb-4 text-xs tracking-wider text-gray-400 md:text-sm">
              PREMIER LEAGUE | GW7 | 19.10.2026
            </p>

            <div className = "max-w-lg mx-auto md:max-w-4xl mb-4">
                <img
                    src="/plots/match-reports/spurs-coventry/tonali-xt.png"
                    alt="Tonali xT"
                    className="rounded-xl"
                />
            </div>

            <p className="mb-4 text-sm text-gray-400 md:text-lg">
              Spurs jump out of the relegation zone after a 3-1 win against Coventry City. While it was not the most 
               scintillating performance of the season, James Maddison strike in the 14th minute reminded Spurs of the quality
               they have been missing so far this season. 
            </p>

            <div className="mb-4 border-t border-white/30"></div>

    

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/30 p-2 text-xs md:text-sm text-gray-300">
                Match Graphics
              </span>

              <span className="rounded-full border border-white/30 p-2 text-xs md:text-sm text-gray-300">
                3-4-3 Diamond
              </span>

              <span className="rounded-full border border-white/30 p-2 text-xs md:text-sm text-gray-300">
                Sandro Tonali
              </span>

              <span className="rounded-full border border-white/30 p-2 text-xs md:text-sm text-gray-300">
                xT
              </span>
            </div>

          </Link>

        </div>

      </section>
      
      {/* Match Reports */}
      <Footer />

    </main>
  );
}