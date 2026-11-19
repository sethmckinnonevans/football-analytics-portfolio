import XpassExplorer from "@/components/interactive/xPassmap";

export default function XpassPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground px-5 sm:px-8 lg:px-12 py-2">

      <section className="mt-4 mb-16 mx-auto max-w-6xl">

        <h1 className="mb-2 text-4xl font-bold md:text-6xl">
          Zonal xPass Map
        </h1>

        <p className="mb-3 text-xs font-medium tracking-[0.25em] text-accent">
          INTERACTIVE FIGURE
        </p>

        <p className="mb-4 text-sm leading-relaxed text-muted md:text-lg">
          Explore passing performance across Europe's top five leagues using my custom xPass model. The model estimates the probability of each pass being completed, incorporating factors such as pass location, distance, direction and match context.
        </p>

        <p className="mb-4 text-sm leading-relaxed text-muted md:text-lg">
          PAx (Passes Completed Above Expected) measures the difference between actual and expected completions, highlighting players who consistently outperform expectations given the difficulty of their passes.
        </p>

        <p className="mb-4 text-sm leading-relaxed text-muted md:text-lg">
          Select a player to explore their passing profile, then click individual pitch zones to investigate their passing tendencies and performance across different areas of the pitch. Only zones containing at least 15 attempted passes are displayed.
        </p>

        <p className="mb-8 text-sm leading-relaxed text-muted md:text-lg">
          The data covers the 2026/27 season across the Premier League, La Liga, Bundesliga, Serie A and Ligue 1.
        </p>

        <XpassExplorer />

      </section>

    </main>
  );
}