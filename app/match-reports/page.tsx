
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


export default function MatchReports() {
  return (
    <main className="bg-gradient-to-b from-[#7678A8] via-[#40425C] to-[#272833] min-h-screen px-12 py-2">

      {/* Navigation */}
      <Navbar />

      {/* Title */}
      <section className = "mt-6 max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 md:text-6xl">
          Match Reports
        </h1>

        <p className="text-sm text-white md:text-lg">
          Combining my custom match report generator with further statistical and tactical analysis 
          to explore how selected football matches are played. As a Spurs fan the majority of these
          reports will focus on Tottenham - what they are doing wrong, and on the rare ocasion, what
          they are doing right.  
          
        </p>
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


      {/* Match Reports*/}
      <section className = "max-w-6xl mx-auto mb-12">
        <h2 className="mb-4 md:mb-8 text-2xl font-bold md:text-4xl">
          Archive
        </h2>
        
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">

          {/* Man Utd v Tottenham */}
          <Link
            href="/match-reports/manutd-tottenham"
            className="group rounded-xl border border-gray-500 p-4 md:p-6 transition duration-200 hover:border-white hover:bg-white/10 hover:scale-105"
          >
            <h2 className="mb-2 text-xl font-semibold text-white md:text-2xl">
              Manchester United 1-1 Tottenham Hotspur
            </h2>
            <p className = "mb-4 text-xs text-gray-500 tracking-wider md:text-md">
            PREMIER LEAGUE | GW6 | 10.09.2026
            </p>

            <p className="text-gray-400 text-sm md:text-lg">
              Spurs manage to rescue a point at Old Trafford, despite going down to ten mean after Bentancur's headbut.
            </p>
          </Link>

          {/* Tottenham vs Aston Villa */}
          <Link
            href="/match-reports/tottenham-villa"
            className="group rounded-xl border border-gray-500 p-4 md:p-6 transition duration-200 hover:border-white hover:bg-white/10 hover:scale-105"
          >
            <h2 className="mb-2 text-xl font-semibold text-white md:text-2xl">
              Tottenham Hotspur 2-3 Aston Villa
            </h2>
            <p className = "mb-4 text-xs text-gray-500 tracking-wider md:text-md">
            PREMIER LEAGUE | GW5 | 19.09.2026
            </p>

            <p className="text-gray-400 text-sm md:text-lg">
              Spurs head into the international break bottom of the Premier League despite ending their seven hour league goal drought.
            </p>
          </Link>

          {/* Tottenham vs Everton */}
          <Link
            href="/match-reports/tottenham-everton"
            className="group rounded-xl border border-gray-500 p-4 md:p-6 transition duration-200 hover:border-white hover:bg-white/10 hover:scale-105"
          >
            <h2 className="mb-2 text-xl font-semibold text-white md:text-2xl">
              Tottenham Hotspur 0-0 Everton
            </h2>
            <p className = "mb-4 text-gray-500 text-xs tracking-wider md:text-md">
            PREMIER LEAGUE | GW4 | 12.09.2026
            </p>

            <p className="text-gray-400 text-sm md:text-lg">
              Spurs fail to score a goal in the opening four games of a season for the first time in history.
            </p>
          </Link>

          {/* Forest vs Spurs */}
          <Link
            href="/match-reports/forest-tottenham"
            className="group rounded-xl border border-gray-500 p-4 md:p-6 transition duration-200 hover:border-white hover:bg-white/10 hover:scale-105"
          >
            <h2 className="mb-2 text-xl font-semibold text-white md:text-2xl">
              Nottingham Forest 0-0 Tottenham Hotspur
            </h2>
            <p className = "mb-4 text-xs text-gray-500 tracking-wider md:text-md">
            PREMIER LEAGUE | GW3 | 05.09.2026
            </p>

            <p className="text-gray-400 text-sm md:text-lg">
              Spurs gain their first point of the season in a lackluster offensive performance. 
            </p>
          </Link>

        </div>
      </section>

      {/*Footer*/}
      <Footer />


    </main>
  );
}

