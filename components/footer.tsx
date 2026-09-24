export default function Footer() {
  return (
    <footer className="border-t border-white/20 px-6 py-4 md:py-8 backdrop-blur-xl">
      
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:gap-8 md:flex-row">

        {/* Name */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold md:text-base">
            Seth McKinnon Evans
          </p>

          <p className="mt-1 text-xs text-gray-400 md:text-sm">
            Football Analytics • Data Science • Machine Learning
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-400">
          <a
            href="https://github.com/sethmckinnonevans"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:text-white hover:scale-105"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sethmckinnonevans/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:text-white hover:scale-105"
          >
            LinkedIn
          </a>

          <a
            href="mailto:sethmckinnonevans02@gmail.com"
            className="transition duration-200 hover:text-white hover:scale-105"
          >
            sethmckinnonevans02@gmail.com
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="mx-auto mt-4 md:mt-6 max-w-6xl border-t border-white/20 pt-4 text-center text-[6pt] md:text-sx text-gray-500">
        © 2026 Seth McKinnon Evans
      </div>

    </footer>
  );
}