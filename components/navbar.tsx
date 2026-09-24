import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl flex items-center mb-10 py-6 justify-between border-b border-white/50">

      <Link
        href="/"
        className="transition duration-200 hover:scale-110"
      >
        <img
          src="/logo/exxg-initial-nobg.png"
          alt="ExpectedxG home"
          className="w-12 md:w-16 h-auto"
        />
      </Link>

      <div className="flex gap-2 md:gap-8 text-xs text-white md:text-sm">

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
  );
}