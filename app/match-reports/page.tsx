
import Link from "next/link";

export default function MatchReports() {
  return (
    <main className="bg-gradient-to-b from-[#7678A8] via-[#40425C] to-[#272833] min-h-screen tracking-wide leading-tight px-12 py-2">

      {/* Navigation */}
      <nav className="flex items-center py-6 justify-between border-b border-white/50">
        <Link 
          href="/" 
          className="transition duration-200 text-lg md:text-xl font-bold hover:scale-110 hover:text-gray-300"
          >
          Home
        </Link>

        <div className="flex gap-8 text-xs text-white md:text-sm">
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

      {/* Title */}
      <section className = "mt-6 max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 md:text-6xl">
          Match Reports
        </h1>

        <p className="text-md text-white md:text-lg">
          Combining my custom match report generator with further statistical and tactical analysis 
          to explore how selected football matches are played. As a Spurs fan the majority of these
          reports will focus on Tottenham - what they are doing wrong, and on the rare ocasion, what
          they are doing right.  
          
        </p>
      </section>

      {/* Match Reports*/}
      <section className = "max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Tottenham vs Everton */}
          <Link
            href="/match-reports/tottenham-everton"
            className="group rounded-xl border border-gray-500 bg-[#3C3D5C] p-6 transition duration-200 hover:border-white hover:scale-105"
          >
            <h2 className="mb-2 text-xl font-semibold text-white md:text-2xl">
              Tottenham Hotspur 0-0 Everton
            </h2>
            <p className = "mb-4 text-sm text-gray-500 tracking-wider md:text-md">
            PREMIER LEAGUE | GW4 | 12.09.2026
            </p>

            <p className="text-white text-md">
              Spurs fail to score a goal in the opening four games of a season for the first time in history.
            </p>
          </Link>

          {/* Forest vs Spurs */}
          <Link
            href="/match-reports/forest-tottenham"
            className="group rounded-xl border border-gray-500 bg-[#3C3D5C] p-6 transition duration-200 hover:border-white hover:scale-105"
          >
            <h2 className="mb-2 text-xl font-semibold text-white md:text-2xl">
              Nottingham Forest 0-0 Tottenham Hotspur
            </h2>
            <p className = "mb-4 text-sm text-gray-500 tracking-wider md:text-md">
            PREMIER LEAGUE | GW3 | 05.09.2026
            </p>

            <p className="text-white text-md">
              Spurs gain their first point of the season in a lackluster offensive performance. 
            </p>
          </Link>

        </div>
      </section>


    </main>
  );
}

