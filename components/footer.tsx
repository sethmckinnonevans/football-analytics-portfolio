export default function Footer() {
  return (
    <footer className="px-6 py-4 md:py-8 backdrop-blur-xl">

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-6 md:gap-8 md:flex-row">

        {/* Name */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold md:text-base">
            Seth McKinnon Evans
          </p>

          <p className="mt-1 text-xs text-accent md:text-sm">
            Football Analytics | Data Science | Machine Learning
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted md:gap-6 md:text-sm">
          <a
            href="https://github.com/sethmckinnonevans"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-accent"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sethmckinnonevans/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-accent"
          >
            LinkedIn
          </a>

          <a
            href="mailto:sethmckinnonevans02@gmail.com"
            className="transition-colors duration-200 hover:text-accent"
          >
            Email
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="mx-auto mt-4 max-w-6xl border-t border-[var(--border)] pt-4 text-center text-[10px] text-muted md:mt-6 md:text-xs">
        © 2026 Seth McKinnon Evans
      </div>

    </footer>
  );
}