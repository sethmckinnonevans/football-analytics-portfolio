import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground px-5 sm:px-8 lg:px-12 py-2">

      {/* Title */}
      <section className="mt-4 mb-16 mx-auto max-w-6xl">
        <h1 className="mb-2 text-4xl font-bold md:text-6xl">
          Contact
        </h1>

        <p className="mb-3 text-xs font-medium tracking-[0.25em] text-accent">
          GET IN TOUCH
        </p>

        <p className="text-sm leading-relaxed text-muted md:text-lg">
          Whether you would like to discuss one of my projects, football analytics or potential opportunities, feel free to get in touch.
        </p>
      </section>

      {/* Links */}
      <section className="mx-auto mb-16 max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">

          {/* GitHub */}
          <a
            href="https://github.com/sethmckinnonevans"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-48 flex-col items-center justify-center rounded-xl border border-[var(--border)] bg-surface/50 p-8 text-center transition-colors duration-300 hover:border-accent/60"
          >
            <p className="text-2xl font-bold transition-colors duration-200 group-hover:text-accent md:text-3xl">
              GITHUB
            </p>
            <p className="mt-3 text-sm text-muted">
              Explore my code and projects
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sethmckinnonevans/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-48 flex-col items-center justify-center rounded-xl border border-[var(--border)] bg-surface/50 p-8 text-center transition-colors duration-300 hover:border-accent/60"
          >
            <p className="text-2xl font-bold transition-colors duration-200 group-hover:text-accent md:text-3xl">
              LINKEDIN
            </p>
            <p className="mt-3 text-sm text-muted">
              Connect professionally
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:sethmckinnonevans02@gmail.com"
            className="group flex min-h-48 flex-col items-center justify-center rounded-xl border border-[var(--border)] bg-surface/50 p-8 text-center transition-colors duration-300 hover:border-accent/60"
          >
            <p className="text-2xl font-bold transition-colors duration-200 group-hover:text-accent md:text-3xl">
              EMAIL
            </p>
            <p className="mt-3 text-sm text-muted">
              sethmckinnonevans02@gmail.com
            </p>
          </a>

        </div>
      </section>

    </main>
  );
}