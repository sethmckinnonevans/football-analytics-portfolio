import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 mb-4 px-6 backdrop-blur-xl">

      <div className="mx-auto flex max-w-6xl items-center justify-between border-b border-[var(--border)] py-4 md:py-6">

        {/* Logo */}
        <Link
          href="/"
          className="transition-transform duration-200 hover:scale-105"
        >
          <img
            src="/logo/exxg-green.png"
            alt="ExpectedxG home"
            className="h-auto w-12 md:w-16"
          />
        </Link>

        {/* Links */}
        <div className="flex flex-wrap justify-end gap-x-3 gap-y-2 text-xs text-muted md:gap-x-8 md:text-sm">

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
  );
}