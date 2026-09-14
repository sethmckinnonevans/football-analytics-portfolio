import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#7678A8] via-[#40425C] to-[#272833] text-white px-12 py-2">

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
          Match Report Generator
        </h1>

        <p className="text-md text-white md:text-lg">
      
          
        </p>
      </section>
    
    </main>
  );
}