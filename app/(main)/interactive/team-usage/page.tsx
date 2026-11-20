import TeamUsage from "@/components/interactive/team-usage";
import Link from "next/link";

export default function teamUsagePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground px-5 sm:px-8 lg:px-12 py-2">

      <section className="mt-4 mb-16 mx-auto max-w-6xl">

        <h1 className="mb-2 text-4xl font-bold md:text-6xl">
          Team Usage Rates
        </h1>

        <p className="mb-3 text-xs font-medium tracking-[0.25em] text-accent">
          INTERACTIVE FIGURE
        </p>

        <p className="mb-4 text-sm leading-relaxed text-muted md:text-lg">
            Explore how reliant teams are on individual players to create chances. 
            Inspired by usage rates in basketball, this metric measures the proportion of a team's possessions 
            that are accounted for by each player. Comparing this with their attacking involvement, their share of the 
            team's Shot-Creating Actions (SCA), helps us understand how players contribute to their team's chance creation
            and identify different attacking roles and structures.
            {" "}You can read more about the methodology and findings in my{" "}
            <Link
                href="/projects/premier-league-usage"
                className="text-accent underline underline-offset-4 transition hover:opacity-80"
            >
                full project
            </Link>.
        </p>

        <p className="mb-4 text-sm leading-relaxed text-muted md:text-lg">
            One particularly interesting application of usage rates is identifying how potential 
            transfers might fit into an existing squad. Comparing a player's usage and attacking 
            involvement with those of their prospective teammates can offer an initial indication of 
            how they might fit into a team's attacking structure. There are limitations to this approach, 
            as discussed in the project, but it can provide a useful starting point for recruitment analysis.
        </p>

        <p className="mb-4 text-sm leading-relaxed text-muted md:text-lg">
            This interactive figure visualises player usage rates across the Premier League, Bundesliga, 
            Serie A, La Liga, Ligue 1, Eredivisie, Pro League and Championship, using data up to 19 
            November 2026. Only players with at least 360 league minutes are included. Select a team 
            to explore its players, then click on any player to reveal their statistics. You can 
            also search for and add players from other teams to compare how they might fit into a 
            potential new squad.
        </p>


        <TeamUsage />

      </section>

    </main>
  );
}