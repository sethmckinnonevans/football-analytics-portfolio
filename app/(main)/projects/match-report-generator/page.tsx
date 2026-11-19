
import Link from "next/link";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function MatchReportGenerator() {
  return (
    <main className="min-h-screen overflow-hidden bg-background px-5 py-2 text-foreground sm:px-8 lg:px-12">

      {/* Title and Overview */}
      <section className="mx-auto mb-12 mt-4 max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-5xl">
          Match Report Generator
        </h1>

        <p className="mb-6 text-xs md:text-sm font-medium tracking-[0.25em] text-accent">
          DATA ANALYSIS · DATA VISUALISATION
        </p>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          As a keen football fan, I have always found visual summaries of matches particularly useful, especially
          when I have not had the opportunity to watch the game. However, I often find myself searching across several
          different apps and websites to find momentum graphs, passing networks and shot maps just to get an idea
          of what happened during a match.
        </p>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          To solve this, I created my own match report generator, bringing all the visualisations I find most useful
          together in one place. The generator is built as a reusable Python engine, which extracts Sofascore match
          data and automatically produces a range of visualisations, including team average positions overlaid with player
          heatmaps, match momentum, cumulative xG, and team shot maps.
        </p>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          The generator works for any match, given the data is available on Sofascore, producing both static and
          interactive figures. This not only gives me a consistent way of reviewing matches, but also provides
          the foundations for the more detailed statistical and tactical breakdowns featured in the
          <Link
            href="/match-reports"
            className="font-bold text-accent transition-colors hover:text-foreground"
          >
            {" "}Match Reports
          </Link>
          {" "}section of this website.
        </p>
      </section>

      {/* Figures */}
      <section className="mx-auto mb-16 max-w-6xl">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold md:text-4xl">
            Figures
          </h2>
          <p className="text-xs font-medium tracking-[0.25em] text-accent">
            DATA VISUALISATION
          </p>
        </div>

        <p className="mb-8 text-sm leading-relaxed md:text-lg">
          The objective of the generator was to produce enough visuals to provide a summary of any given match.
          Using the data available from Sofascore the generator produces team average positions, overlaid with
          individual player heatmaps, match momentum, cumulative xG and team shot maps. The combination of these
          figures provides a detailed overview of the match and can be used for more detailed analysis.
        </p>

        {/* Average Positions */}
        <h3 className="mb-4 text-xl font-bold md:text-2xl">
          Team Average Positions
        </h3>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          The first visual plots each team's average positions using Sofascore's average position data. This data is the
          average coordinates of each player's touches, designating this as their "average position". The figure only
          visualises players in a team's starting XI since substitutes' average positions can appear unusual, due to a smaller
          sample size of touches, giving an inaccurate representation of a team's overall shape.
        </p>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          To enhance the figure, the non-interactive version also shows a team's tendency to use each attacking zone. This is once
          again calculated using Sofascore's heatmap data, identifying touches in the attacking third and splitting these
          into the left, central and right zones based on the pitch coordinates. While the figure is biased towards showing a team's
          shape while in possession, the figure also shows a team's OPPDA (Opposition Passes Per Defensive Action). This metric is a
          rough estimate of how aggressive a team are in winning the ball back when out of possession. A lower number
          indicates a team gives their opposition less time on the ball pressing aggressively, while a higher number identifies a team that is content to
          sit deep and concede possession to their opposition. Using this metric it is possible to classify a team's out of possession approach
          as either a low-block, mid-block or high press.
        </p>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          The function to create the team's average player positions also provides the option to make the figure interactive. On top of the
          information provided by the static visuals, the interactive version provides the ability to hover over a player to display
          their heatmap as well as a selection of statistics to summarise their game including: minutes played, touches, top speed and total
          distance covered. As well as the ability to toggle the attacking zones on and off to make the figure more interpretable, the
          interactive version provides a higher level of detail than the static version, making it a more suitable version for in-depth
          analysis.
        </p>

        <p className="mb-6 text-sm leading-relaxed md:text-lg">
          Below is an example of both the static and interactive average player positions for a Championship match between
          Middlesbrough and Norwich City.
        </p>

        <div className="mb-10 grid gap-5 md:grid-cols-2">
          <div>
            <img
              src="/plots/projects/match-report-generator/Middlesbrough_average_positions.png"
              alt="Middlesbrough average positions"
              className="w-full rounded-xl"
            />
          </div>

          <div>
            <iframe
              src="/plots/projects/match-report-generator/Norwich City_average_positions.html"
              title="Norwich average player positions"
              className="h-[380px] w-full rounded-xl border-0"
            />
          </div>
        </div>

        {/* Match Momentum */}
        <h3 className="mb-4 text-xl font-bold md:text-2xl">
          Match Momentum
        </h3>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          Match momentum is an intuitive way to visualise how a match unfolded by showing which team was dominating play at any given
          minute in the match. It does this by calculating the possession value for each action on the pitch. As Opta explains, the possession value
          measures the impact of an action on the pitch, changing the probability of a team scoring in the next ten seconds. Then for any given minute,
          match momentum takes each team's most threatening situation, measured by possession value, and calculates the difference between these values
          to establish which team was more dominant. Thankfully, Sofascore provides match momentum data so that the engine just visualises the values.
        </p>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          Match momentum is a really useful metric to understand the narrative of a game while being very easily interpretable. Positive values show home team dominance
          while negative values show away team dominance and the taller the area, the more likely the team was to score in that moment. They can be used to understand
          how events like substitutions, tactical changes or breaks in play due to an injury can cause a shift in which team is dominating the match.
        </p>

        <p className="mb-6 text-sm leading-relaxed md:text-lg">
          Below is an example of a match momentum figure for a Championship match between
          Middlesbrough and Norwich City.
        </p>

        <figure className="mb-10">
          <img
            src="/plots/projects/match-report-generator/momentum_graph.png"
            alt="Match momentum graph"
            className="w-full rounded-xl"
          />
        </figure>

        {/* Cumulative xG */}
        <h3 className="mb-4 text-xl font-bold md:text-2xl">
          Cumulative xG
        </h3>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          A cumulative xG graph is a way to demonstrate how frequently a team created chances over the match and what the quality of these chances was.
          Plotting the match time on the x-axis against total xG accumulated on the y-axis for each shot taken creates a stepped line. The more steps,
          the more shots a team had, while the higher an individual step is, the better quality chance it was. Rather than just stating a team's xG created
          over the match, the cumulative xG graph provides a more detailed overview of the rate and quality of chances. Paired with the match momentum, it
          provides an excellent explanation of a team's dominance in certain periods of a match.
        </p>

        <p className="mb-6 text-sm leading-relaxed md:text-lg">
          Below is an example of a cumulative xG figure for a Championship match between
          Middlesbrough and Norwich City.
        </p>

        <figure className="mb-10">
          <img
            src="/plots/projects/match-report-generator/xg.png"
            alt="Cumulative xG graph"
            className="w-full rounded-xl"
          />
        </figure>

        {/* Shot Maps */}
        <h3 className="mb-4 text-xl font-bold md:text-2xl">
          Shot Maps
        </h3>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          Shot maps are another way to explain what happened during a match by showing where chances came from and how good the chances were.
          The shot map function takes the coordinates of every shot in a match from Sofascore's shot data and plots it to visualise shot location.
          The quality of the chance is represented by the size of the point, scaled for xG, so the larger the point the better quality chance the shot
          was. As well as this, the shot points are colour-coded based on the outcome of the shot. To provide a little more detail about a team's overall
          chance creation, open play and set-piece xG are annotated on the figure, as well as xG / Shot to measure average chance quality and xGOT - xG to
          provide a metric of finishing quality.
        </p>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          The shot map also has the option to be drawn interactively. It displays all the same metrics as the static figure but upon
          hovering over a specific shot, it provides details of the player who took the shot, the minute, the xG, the xGOT, shot outcome,
          shot situation and the body part which took the shot. This provides extra detail to analyse a team's shooting tendencies.
        </p>

        <p className="mb-6 text-sm leading-relaxed md:text-lg">
          Below is an example of a static and interactive shot map for Middlesbrough and Norwich City respectively, during a recent
          Championship match.
        </p>

        <div className="mb-6 grid gap-5 md:grid-cols-2">
          <div>
            <img
              src="/plots/projects/match-report-generator/Middlesbrough_shot_map.png"
              alt="Middlesbrough shot map"
              className="w-full rounded-xl"
            />
          </div>

          <div>
            <iframe
              src="/plots/projects/match-report-generator/Norwich City_shot_map.html"
              title="Norwich shot map"
              className="h-[380px] w-full rounded-xl border-0"
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="mx-auto mb-16 max-w-6xl">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold md:text-4xl">
            How It Works
          </h2>
          <p className="text-xs font-medium tracking-[0.25em] text-accent">
            DATA PIPELINE
          </p>
        </div>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          The basis of the generator relies upon the ScraperFC package to obtain data from Sofascore. Given a match id, found in the Sofascore URL,
          the engine extracts the data required to generate the report, saving it locally for further processing.
        </p>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          The data is automatically packaged into separate files. Team and player match stats, shot data, momentum data and average position
          coordinates are stored as CSV files, while heatmap data and player IDs are stored as pickle files due to their dictionary format. This creates
          a complete set of raw data that can then be accessed by the individual visualisation functions.
        </p>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          Each plotting function processes the raw data it requires independently using Pandas, cleaning and transforming it
          into a format suitable for visualisation. Some functions also calculate additional metrics, such as OPPDA and xG per Shot, while
          others perform transformations required for plotting, such as converting player coordinates between raw and display coordinate systems.
        </p>

        <p className="mb-6 text-sm leading-relaxed md:text-lg">
          The generator is divided into five main functions, responsible for obtaining the data, producing average positions,
          match momentum, cumulative xG and shot maps. This modular structure means that individual figures can be generated independently
          rather than requiring the entire report to be produced each time. The functions are structured as follows:
        </p>

        <div className="mx-auto mb-6 w-full max-w-4xl overflow-hidden rounded-xl border border-[var(--border)] bg-surface">
          <div className="border-b border-[var(--border)] px-4 py-3">
            <span className="text-xs font-medium tracking-wide text-muted md:text-sm">
              match_report_utils.py
            </span>
          </div>

          <div className="space-y-4 p-5 text-xs text-foreground/80 md:text-sm">
            <pre className="whitespace-pre-wrap break-words">
              <code>{`scrape_data(match_id)`}</code>
            </pre>

            <pre className="whitespace-pre-wrap break-words">
              <code>{`plot_average_positions(team, team_colour, home_team, interactive = False)`}</code>
            </pre>

            <pre className="whitespace-pre-wrap break-words">
              <code>{`plot_momentum(home_colour, away_colour)`}</code>
            </pre>

            <pre className="whitespace-pre-wrap break-words">
              <code>{`plot_xg(home_team, home_colour, away_team, away_colour)`}</code>
            </pre>

            <pre className="whitespace-pre-wrap break-words">
              <code>{`plot_shot_maps(team, home_team = True, interactive = False)`}</code>
            </pre>
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          For the average positions and shot map functions, the engine supports both static and interactive outputs.
          Matplotlib and mplsoccer are used to produce static PNG figures, while Plotly is used for interactive HTML figures, allowing
          additional information to be displayed through hover interactions. Both types of figures are automatically saved to separate
          folders within the main file directory.
        </p>
      </section>

      {/* Technical Stack */}
      <section className="mx-auto mb-16 max-w-6xl">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold md:text-4xl">
            Technical Stack
          </h2>
          <p className="text-xs font-medium tracking-[0.25em] text-accent">
            TOOLS & TECHNOLOGIES
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-left">
            <thead className="border-b border-[var(--border)] bg-surface text-sm md:text-base">
              <tr>
                <th className="px-4 py-3 font-semibold text-foreground">
                  Area
                </th>
                <th className="px-4 py-3 font-semibold text-foreground">
                  Tools
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border)] text-xs md:text-sm">
              <tr>
                <td className="px-4 py-3 text-muted">Programming Language</td>
                <td className="px-4 py-3 text-foreground">Python</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-muted">Data scraping</td>
                <td className="px-4 py-3 text-foreground">ScraperFC</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-muted">Data processing</td>
                <td className="px-4 py-3 text-foreground">Pandas, NumPy</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-muted">Static visualisation</td>
                <td className="px-4 py-3 text-foreground">Matplotlib, mplsoccer</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-muted">Interactive visualisation</td>
                <td className="px-4 py-3 text-foreground">Plotly</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-muted">Data source</td>
                <td className="px-4 py-3 text-foreground">Sofascore</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-muted">Development</td>
                <td className="px-4 py-3 text-foreground">Jupyter</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-muted">Version control</td>
                <td className="px-4 py-3 text-foreground">GitHub</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Challenges */}
      <section className="mx-auto mb-16 max-w-6xl">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold md:text-4xl">
            Challenges
          </h2>
          <p className="text-xs font-medium tracking-[0.25em] text-accent">
            TECHNICAL CHALLENGES
          </p>
        </div>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          In the initial versions of this project, there was only the option for static PNG figures. This was a fairly straightforward process, taking the
          data from Sofascore, cleaning with Pandas and plotting with Matplotlib. The main challenge at this stage was the coordinate system compatibility
          when plotting the shot map. The shot data from Sofascore used a 0-100 coordinate system, where the x-axis ran from a team's own goal to the opposing team's
          goal and the y-axis ran from the right flank to the left flank. However, for the shot map I wanted to plot a vertical, half pitch which did not align with
          the coordinates from the shot data. After investigating the coordinate system that mplsoccer's pitch was using, the raw coordinates required a transformation
          before plotting:
        </p>

        <div className="mx-auto mb-6 w-full text-sm md:text-lg max-w-3xl rounded-xl border border-[var(--border)] bg-surface p-3 sm:p-4 overflow-x-auto">
          <BlockMath math={String.raw`
            \begin{pmatrix}
              x_{\mathrm{plot}} \\
              y_{\mathrm{plot}}
            \end{pmatrix}
            =
            \begin{pmatrix}
              100-y_{\mathrm{SofaScore}} \\
              100-x_{\mathrm{SofaScore}}
            \end{pmatrix}
          `} />
        </div>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          The main challenges arose in later versions of this project as I introduced interactive versions of the average positions and shot map figures.
          These figures were created using Plotly, which does not provide the same football pitch plotting functionality as mplsoccer. I therefore had to create a blank Plotly figure and write a helper
          function to manually draw each of the standard football pitch markings onto the figure. This had to be implemented twice, once for the full pitch used
          by the average positions figure and once for the vertically orientated half-pitch used for the shot map.
        </p>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          These manually constructed pitches also introduced a new challenge with the coordinate system. As previously mentioned, the raw data used a 0-100 coordinate system, meaning
          that both axes had the same numerical range. Directly plotting these coordinates would not correspond to the proportions of a standard football pitch.
          I therefore defined the pitch using the standard dimensions for a football pitch, 105x68, and transformed the coordinates accordingly.
        </p>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          For the average positions, this required a simple rescaling:
        </p>

        <div className="mx-auto mb-6 w-full text-sm md:text-lg max-w-3xl rounded-xl border border-[var(--border)] bg-surface p-3 sm:p-4 overflow-x-auto">
          <BlockMath math={String.raw`
            \begin{pmatrix}
              x_{\mathrm{plot}} \\
              y_{\mathrm{plot}}
            \end{pmatrix}
            =
            \begin{pmatrix}
              1.05x_{\mathrm{raw}} \\
              0.68y_{\mathrm{raw}}
            \end{pmatrix}
          `} />
        </div>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          Whereas, for the shot map, which was plotted on the vertically orientated pitch, the raw coordinates needed to be
          reoriented by swapping the axes and reversing the vertical coordinates:
        </p>

        <div className="mx-auto mb-6 w-full text-sm md:text-lg max-w-3xl rounded-xl border border-[var(--border)] bg-surface p-3 sm:p-4 overflow-x-auto">
          <BlockMath math={String.raw`
            \begin{pmatrix}
              x_{\mathrm{plot}} \\
              y_{\mathrm{plot}}
            \end{pmatrix}
            =
            \begin{pmatrix}
              y_{\mathrm{raw}} \\
              100-x_{\mathrm{raw}}
            \end{pmatrix}
          `} />
        </div>
      </section>

      {/* Future Improvements */}
      <section className="mx-auto mb-16 max-w-6xl">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold md:text-4xl">
            Future Improvements
          </h2>
          <p className="text-xs font-medium tracking-[0.25em] text-accent">
            NEXT STEPS
          </p>
        </div>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          Overall I am happy with what I have been able to achieve with this project. I have built a reusable match report generator that helps
          to interpret and analyse football matches. The figures generated by the engine are easy to interpret and provide a detailed overview of a match,
          particularly through the additional information provided by the interactive figures. However, there are still improvements I would like
          to make to this project.
        </p>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          The team average position figures are useful for understanding the areas of the pitch in which players operate and can reveal underlying tactical structures
          that may not be apparent when a formation is labelled on paper. However, they provide limited information about a team's tendencies in possession.
          To address this I would like to overlay passing networks on top of the average positions. This would provide greater insight into how teams build up in possession, demonstrate
          which players are central to their team's tactics and highlight the relationships between different players. To achieve this I would need access to match event-level data, containing detailed
          information on individual passes, which is unfortunately not freely available through current data sources.
        </p>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          Another improvement I would like to make is to the match momentum figure. The current visualisation does a fantastic job at providing an intuitive representation
          of which team controlled different periods of a match. However, by annotating specific events on the timeline, such as substitutions, tactical changes, yellow cards and red cards,
          it would provide a better explanation for swings in momentum. While this data is publicly available, ScraperFC does not provide access to these events on Sofascore. One solution would be to
          manually add these events to a CSV file and annotate them on the momentum graph. However, this would ruin the reusability of the engine since it would need to be repeated manually for every match.
          A longer-term solution would be to identify a data source that provides information about match events and integrate it into the existing pipeline.
        </p>
      </section>

      {/* Outro */}
      <section className="mx-auto mb-10 max-w-6xl">
        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          This project is still a work in progress as I seek to find additional data to enhance the figures but has been extremely useful
          for my understanding and analysis of football matches. If you would like to generate match reports for yourself, you can find the
          source code on GitHub.
        </p>
      </section>

      {/* GitHub */}
      <div className="mx-auto mb-12 flex max-w-6xl justify-center border-b border-[var(--border)] pb-12">
        <a
          href="https://github.com/sethmckinnonevans/match-report-generator"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-[var(--border)] bg-surface/50 px-6 py-4 text-sm transition-colors duration-200 hover:border-accent/60 hover:text-accent md:text-base"
        >
          View on GitHub
        </a>
      </div>

      {/* Other Projects */}
      <section className="mx-auto mb-12 max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">

          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold md:text-4xl">
              Featured Projects
            </h3>

            <div className="grid gap-5 md:grid-cols-2">

              <Link
                href="/projects/midfielder-archetypes"
                className="group rounded-2xl border border-[var(--border)] bg-surface/30 p-5 transition-colors duration-200 hover:border-accent/60 hover:bg-surface/70 md:p-6"
              >
                <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-accent md:text-2xl">
                  Midfielder Archetypes
                </h3>

                <p className="text-xs font-medium tracking-[0.2em] text-accent md:text-sm">
                  MACHINE LEARNING
                </p>
              </Link>

              <Link
                href="/projects/premier-league-usage"
                className="group rounded-2xl border border-[var(--border)] bg-surface/30 p-5 transition-colors duration-200 hover:border-accent/60 hover:bg-surface/70 md:p-6"
              >
                <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-accent md:text-2xl">
                  Premier League Usage Rates
                </h3>

                <p className="text-xs font-medium tracking-[0.2em] text-accent md:text-sm">
                  DATA ANALYSIS
                </p>
              </Link>

            </div>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-bold md:text-4xl">
              All Projects
            </h3>

            <Link
              href="/projects"
              className="group block rounded-2xl border border-[var(--border)] bg-surface/30 p-5 transition-colors duration-200 hover:border-accent/60 hover:bg-surface/70 md:p-6"
            >
              <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-accent md:text-2xl">
                Explore All Projects
              </h3>

              <p className="text-xs font-medium tracking-[0.2em] text-accent md:text-sm">
                FULL COLLECTION
              </p>
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
