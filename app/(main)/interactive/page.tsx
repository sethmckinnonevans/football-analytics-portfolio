
import Link from "next/link";
import Image from "next/image";

export default function Interactive() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground px-5 sm:px-8 lg:px-12 py-2">

      {/* Page heading */}
      <section className="mt-4 mb-16 mx-auto max-w-6xl">
        <h1 className="mb-2 text-4xl font-bold md:text-6xl">
          Interactive
        </h1>

        <p className="mb-3 text-xs font-medium tracking-[0.25em] text-accent">
          EXPLORE THE DATA
        </p>

        <p className="text-sm leading-relaxed text-muted md:text-lg">
          A collection of interactive visuals created to allow you anyone to explore some of the concepts
          presented in my projects.
        </p>
      </section>

      {/* Interactive visualisations */}
      <section className="mx-auto mb-20 max-w-5xl space-y-10">

        <Link
          href="/interactive/xpass-map"
          className="group block rounded-xl border border-[var(--border)] bg-surface/50 p-4 transition-colors duration-300 hover:border-accent/60 md:p-6">
          {/* Card information */}
          <div className="mb-5">
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">
              Zonal xPass Map
            </h2>

            <p className="mb-2 text-xs font-medium tracking-[0.2em] text-accent md:text-sm">
              PASSING ANALYTICS | 2026/27
            </p>
          </div>

          {/* Screenshot */}
          <div className="mb-6 overflow-hidden rounded-lg">
            <Image
              src="/plots/interactive/xpass-map-3.png"
              alt="Zonal xPass Map interactive football passing visualisation"
              width={1600}
              height={800}
              className="h-56 w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02] md:h-100"
            />
          </div>

          <p className="text-sm leading-relaxed text-muted md:text-base">
            Explore passing performance across Europe's top five leagues
            using my xPass model. Investigate player passing profiles and
            discover which zones they outperform the model in.
          </p>
        </Link>

        <Link
          href="/interactive/team-usage"
          className="group block rounded-xl border border-[var(--border)] bg-surface/50 p-4 transition-colors duration-300 hover:border-accent/60 md:p-6"
        >          
          {/* Card information */}
          <div className="mb-5">
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">
              Team Usage Rates
            </h2>

            <p className="mb-2 text-xs font-medium tracking-[0.2em] text-accent md:text-sm">
              TEAM ANALYTICS | 2026/27
            </p>
          </div>

          {/* Screenshot */}
          <div className="mb-6 overflow-hidden rounded-lg">
            <Image
              src="/plots/interactive/team-usage-3.png"
              alt="Team Usage Rates interactive football analytics visualisation"
              width={1600}
              height={800}
              className="h-56 w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02] md:h-100"
            />
          </div>

          <p className="text-sm leading-relaxed text-muted md:text-base">
            Explore how teams distribute their attacking involvement across
            individual players. Compare usage rates with attacking involvement,
            identify different attacking roles, and investigate how potential
            transfers might fit into an existing squad.
          </p>
        </Link>

      </section>

    </main>
  );
}
