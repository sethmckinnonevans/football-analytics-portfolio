import Link from "next/link";
import GroupProbabilityTable from "@/components/world-cup-simulation/group-probability-table";
import WorldCupBracket from "@/components/world-cup-simulation/bracket";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function WorldCupSimulation() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground px-5 sm:px-8 lg:px-12 py-2">

        {/* Title and Overview */}
        <section className="mt-4 mb-16 mx-auto max-w-6xl">

          <h1 className="mb-2 text-3xl font-bold md:text-5xl lg:text-6xl">
            Predicting the 2026 World Cup
          </h1>

          <p className="mb-6 text-xs md:text-sm font-medium tracking-[0.25em] text-accent">
            STATISTICAL MODELLING | MONTE-CARLO SIMULATIONS
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Ahead of the 2026 World Cup, North America prepares to host the first 48-team edition of the 
            tournament. With uncertainty surrounding how the competition might unfold, attention turns 
            to the favourites, Spain and France, underdog debutants Curaçao and Cape Verde, and the 
            high expectations surrounding one of England's most exciting squads in recent years. But 
            is it possible to predict how the tournament might unfold?
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            This project aims to develop a statistical model to predict individual match outcomes 
            using historical international football results, before applying it to simulate 
            the 2026 World Cup. Through Monte Carlo simulations, the project examines the 
            favourites to lift the trophy, potential dark horses, teams that could underperform 
            expectations, and how the model's predictions compare with those of the betting markets.
          </p>

        </section>

        
        {/* Methodology */}
        <section className="mt-4 mb-16 mx-auto max-w-6xl">

          <h2 className="mb-2 text-2xl font-bold md:text-4xl">
            Methodology
          </h2>
          <p className="mb-6 text-xs font-medium tracking-[0.25em] text-accent">
            DATA | MODEL DEVELOPMENT | SIMULATION
          </p>

          <h3 className="mb-4 mt-8 text-lg font-bold md:text-2xl">
            Data Collection
          </h3>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The historical match data used to develop the models were obtained from this {" "}
            <a
              href="https://www.kaggle.com/datasets/patateriedata/all-international-football-results/data"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent/60 underline-offset-4 transition-colors hover:text-accent"
            >
              Kaggle dataset
            </a>{" "},
            covering international fixtures involving FIFA-recognised national teams 
            from 2000 onwards. This cutoff provided a sufficiently large sample while limiting the 
            influence of results from periods less representative of modern international football.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            World Football Elo ratings as of 31 December 1999 were also collected to establish initial 
            team-strength estimates. These ratings were subsequently updated after each match using 
            the Elo rating system, providing a measure of team strength throughout the dataset. 
            World Football Elo was selected over the FIFA World Ranking because of its availability 
            across the period studied, as FIFA only introduced an Elo-based ranking methodology in 2018.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Finally, pre-tournament betting odds for the outright winner and group winners were collected on 
            2 June 2026 from {" "}
            <a
              href="https://www.si.com/betting/every-teams-championship-group-odds-for-the-2026-world-cup-spain-and-france-top-odds-list-01kt4yygesqb"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent/60 underline-offset-4 transition-colors hover:text-accent"
            >
              Sports Illustrated
            </a>{" "},
            using FanDuel Sportsbook prices. These provided a market-based benchmark against which 
            to compare the model's predictions.
          </p>

          <h3 className="mb-4 mt-8 text-lg font-bold md:text-2xl">
            Model Development
          </h3>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The project initially explored several machine-learning approaches, including Logistic 
            Regression, Random Forest and Gradient Boosting. These models used features derived from 
            the dataset, including Elo difference, recent home and away form, and goals scored and 
            conceded, to estimate match outcome probabilities. Logistic Regression produced the 
            strongest results of the three approaches, with further details available on {" "}
            <a
              href="https://github.com/sethmckinnonevans?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent/60 underline-offset-4 transition-colors hover:text-accent"
            >
              Github
            </a>.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            However, predicting match outcomes alone did not provide the scoreline distributions required 
            for the tournament simulation. A statistical approach was therefore adopted to estimate the 
            number of goals scored by each team, from which scoreline and match outcome probabilities 
            could be derived.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            A Poisson distribution provides a way to model the probability of a team scoring an exact 
            number of goals in a match. Its probability mass function is:
          </p>

          <div className="mx-auto my-6 max-w-2xl overflow-x-auto rounded-xl border border-[var(--border)] bg-surface/40 px-4 py-5 text-base md:text-xl">
              <BlockMath math={String.raw`P(X = k) = \frac{e^{-\lambda}\lambda^k}{k!}`} />
          </div>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Where:
          </p>

          <ul className="mb-4 list-disc space-y-2 pl-6 text-sm leading-relaxed md:text-lg">
            <li><InlineMath math="X" /> is the number of goals scored</li>
            <li><InlineMath math="k" /> is a particular number of goals (e.g. 0, 1, 2, 3)</li>
            <li><InlineMath math={String.raw`\lambda`} /> is the expected number of goals</li>
          </ul>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Applying this distribution to both teams allows the probability of different scorelines to 
            be estimated. However, the expected goals for each team were unknown and therefore needed 
            to be estimated. A Poisson regression model was fitted using team and opponent effects, 
            alongside home advantage, to calculate <InlineMath math={String.raw`\lambda`} />. This relationship can be expressed as:
          </p>

          <div className="mx-auto my-6 max-w-4xl overflow-x-auto rounded-xl border border-[var(--border)] bg-surface/40 px-4 py-5 text-base md:text-xl">
            <BlockMath math={String.raw`\log(\lambda_i) = \beta_0 + \alpha_i + \delta_j + \beta_1 H_1 + \beta_2 H_2 + \beta_3 F_{ij} + \beta_4 GF_{i,5} + \beta_5 GA_{j,5}`} />
          </div>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Where:
          </p>

          <ul className="mb-4 list-disc space-y-2 pl-6 text-sm leading-relaxed md:text-lg">
            <li><InlineMath math={String.raw`\lambda_i`} /> is the expected goals for team <InlineMath math="i" /></li>
            <li><InlineMath math={String.raw`\beta_0`} /> is a baseline scoring rate</li>
            <li><InlineMath math={String.raw`\alpha_i`} /> is team <InlineMath math="i" />'s categorical effect</li>
            <li><InlineMath math={String.raw`\delta_j`} /> is opponent <InlineMath math="j" />'s categorical effect</li>
            <li><InlineMath math={String.raw`H_i`} /> is the home advantage indicator</li>
            <li><InlineMath math={String.raw`E_{ij}`} /> is the Elo rating difference</li>
            <li><InlineMath math={String.raw`F_{ij}`} /> os the recent form difference</li>
            <li><InlineMath math={String.raw`GF_{i,5}`} /> is the team's average goals scored over its previous five matches</li>
            <li><InlineMath math={String.raw`GA_{j,5}`} /> is the opponent's average goals conceded over its previous five matches</li>
          </ul>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Importantly, the model estimates the <InlineMath math={String.raw`\beta_1 ... \beta_5`} /> coefficients from historical results, which are then used to calculate the expected goals for each team.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Once expected goals had been calculated for both teams, their respective Poisson distributions 
            were combined to generate a scoreline probability matrix, covering scores from 0–0 to 10–10. 
            Summing the probabilities of the relevant scorelines then provided the overall probabilities 
            of a home win, draw or away win.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            One limitation of the standard Poisson model is its assumption that the number of goals scored 
            by each team is independent. In football, however, this assumption does not fully reflect the 
            relationship between the two teams' scoring, particularly for low-scoring outcomes.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The Dixon–Coles adjustment addresses this by introducing a correction factor, <InlineMath math={String.raw`\rho`} />, 
            which modifies the probabilities of four specific scorelines: 
          </p>
          
          <div className="mx-auto my-6 max-w-lg">
            <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-surface/40">
              <table className="w-full text-center text-sm">
                <thead className="border-b border-[var(--border)] bg-[var(--surface)]">
                    <tr>
                        <th className="px-5 py-2.5 font-semibold">Scoreline</th>
                        <th className="px-5 py-2.5 font-semibold">Adjustment factor</th>
                    </tr>
                </thead>
                <tbody className="divide-y text-center divide-[var(--border)]">
                    <tr>
                        <td className="px-5 py-2">0–0</td>
                        <td className="px-5 py-2"><InlineMath math={String.raw`1-\lambda_i\lambda_j\rho`} /></td>
                    </tr>
                    <tr>
                        <td className="px-5 py-2">0–1</td>
                        <td className="px-5 py-2"><InlineMath math={String.raw`1+\lambda_i\rho`} /></td>
                    </tr>
                    <tr>
                        <td className="px-5 py-2">1–0</td>
                        <td className="px-5 py-2"><InlineMath math={String.raw`1+\lambda_j\rho`} /></td>
                    </tr>
                    <tr>
                        <td className="px-5 py-2">1–1</td>
                        <td className="px-5 py-2"><InlineMath math={String.raw`1-\rho`} /></td>
                    </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] md:text-sm">
              Table 1. Dixon-Cole adjustments factors for low-scoring outcomes.
            </p>
          </div>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The correction factor, <InlineMath math={String.raw`\rho`} />, was estimated from the historical results, and was found 
            to be -0.228. The negative value reflects the low-score dependence captured by the model.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Another consideration was the relevance of historical fixtures. A match played in 2002 is 
            less representative of a team's current strength than a more recent result. 
            To account for this, an exponential time-decay weighting was introduced:
          </p>

          <div className="mx-auto my-6 max-w-2xl overflow-x-auto rounded-xl border border-[var(--border)] bg-surface/40 px-4 py-5 text-base md:text-xl">
              <BlockMath math={String.raw`w_t = 2^{\frac{-\Delta t}{h}}`} />
          </div>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Where:
          </p>

          <ul className="mb-4 list-disc space-y-2 pl-6 text-sm leading-relaxed md:text-lg">
            <li><InlineMath math={String.raw`\Delta t`} /> is the age of the match in years</li>
            <li><InlineMath math={String.raw`h`} /> is the half-life</li> 
          </ul>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Half-lives between three and seven years were evaluated using the validation set, 
            with mean deviance and outcome log loss used to assess predictive performance. 
            The selected half-life was then applied when fitting the final model.
          </p>

          <h3 className="mb-4 mt-8 text-lg font-bold md:text-2xl">
            Model Evaluation
          </h3>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            All models were evaluated using the same chronological data splits. Initial models were 
            trained on fixtures between 2000 and 2019 and validated on fixtures from 2019 to 2023. 
            The final models were then retrained using the combined training and validation data 
            before being tested on fixtures from 2023 up to the final pre-World Cup fixtures in 
            2026. Test-set performance is summarised in Table 2.
          </p>

          <div className="mx-auto my-6 max-w-4xl">
            <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-surface/40">
                <table className="w-full whitespace-nowrap text-xs md:text-sm text-center">
                  <thead className="border-b border-[var(--border)] bg-[var(--surface)]">
                      <tr>
                          <th className="px-3 py-3 text-left font-semibold">Model</th>
                          <th className="px-3 py-3 font-semibold">Accuracy</th>
                          <th className="px-3 py-3 font-semibold">Log Loss</th>
                          <th className="px-3 py-3 font-semibold">Brier Score</th>
                          <th className="px-3 py-3 font-semibold">Macro F1</th>
                          <th className="px-3 py-3 font-semibold">Home F1</th>
                          <th className="px-3 py-3 font-semibold">Away F1</th>
                          <th className="px-3 py-3 font-semibold">Draw F1</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border)]">
                      <tr>
                          <td className="px-3 py-3 text-left font-medium">Logistic Regression</td>
                          <td className="px-3 py-3">0.6039</td>
                          <td className="px-3 py-3">0.8545</td>
                          <td className="px-3 py-3">0.5027</td>
                          <td className="px-3 py-3">0.4481</td>
                          <td className="px-3 py-3">0.7274</td>
                          <td className="px-3 py-3">0.6068</td>
                          <td className="px-3 py-3">0.0101</td>
                      </tr>
                      <tr>
                          <td className="px-3 py-3 text-left font-medium">Weighted Poisson</td>
                          <td className="px-3 py-3">0.6057</td>
                          <td className="px-3 py-3">0.8515</td>
                          <td className="px-3 py-3">0.5005</td>
                          <td className="px-3 py-3">0.4520</td>
                          <td className="px-3 py-3">0.7303</td>
                          <td className="px-3 py-3">0.6131</td>
                          <td className="px-3 py-3">0.0126</td>
                      </tr>
                      <tr>
                          <td className="px-3 py-3 text-left font-semibold">Weighted Dixon-Coles</td>
                          <td className="px-3 py-3">0.6054</td>
                          <td className="px-3 py-3">0.8510</td>
                          <td className="px-3 py-3">0.5003</td>
                          <td className="px-3 py-3 font-semibold">0.4534</td>
                          <td className="px-3 py-3">0.7305</td>
                          <td className="px-3 py-3">0.6121</td>
                          <td className="px-3 py-3">0.0175</td>
                      </tr>
                  </tbody>
                </table>
            </div>

            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] md:text-sm">
              Table 2. Comparison of model performance on the test dataset.
            </p>
          </div>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The three models produced broadly similar results across all evaluation metrics. 
            The Weighted Poisson model achieved marginally the highest accuracy (60.57%), while the 
            Weighted Dixon–Coles model performed best across the probabilistic metrics, achieving 
            the lowest log loss (0.8510) and Brier score (0.5003), alongside the highest macro F1 
            score (0.4534). Although these improvements were minimal, they suggest that the Dixon–Coles 
            adjustment provides a slight improvement in the quality of the predicted probabilities.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Performance varied considerably between outcome classes. Home wins were predicted most 
            reliably (F1: 0.7305), followed by away wins (0.6121), while draws were considerably 
            more difficult to identify (0.0175). This indicates that the model rarely identifies 
            draws correctly when assigning a single predicted outcome. However, this does not
            necessarily mean that it assigns poor probabilities to draws, as the simulation uses the 
            full scoreline probability distributions rather than simply selecting the most likely outcome.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Calibration analysis shows that the Weighted Poisson and Weighted Dixon–Coles models produce 
            broadly similar probability distributions. Both estimate average home-win, draw and away-win 
            probabilities of approximately 47%, 31% and 22–23%, respectively.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The models demonstrate relatively good calibration for home wins across most probability bands, 
            although they slightly underestimate actual frequencies in some higher-probability ranges. 
            Draw probabilities tend to be overestimated across the lower and middle probability bands, 
            while away-win predictions show some inconsistency, particularly between 10% and 30%.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Overall, the calibration results suggest that the predicted probabilities provide a 
            reasonable representation of observed match outcomes, although systematic differences 
            remain, particularly for draws and away wins.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The Weighted Dixon–Coles model was ultimately selected for the tournament simulation. 
            Although it did not improve accuracy over the Weighted Poisson model, its marginally 
            better probabilistic performance and explicit adjustment of low-scoring outcomes made 
            it the preferred choice for generating match scoreline probabilities.
          </p>

          <h3 className="mb-4 mt-8 text-lg font-bold md:text-2xl">
            Simulation Methodology
          </h3>
          
          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Once the final Weighted Dixon–Coles model had been selected, it was used to estimate the 
            expected goals, <InlineMath math={String.raw`\lambda`} />, for each team in every 
            fixture. These estimates were then used to simulate the tournament using the official 
            groups and knockout-stage bracket within a Monte Carlo framework.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            For each individual match, the model generates a scoreline probability matrix using the 
            expected goals for both teams. An example is shown in Table 2. During each simulation, 
            a scoreline is randomly sampled from this matrix according to its associated probability. 
            This process is repeated for every group-stage fixture, allowing the final group standings 
            to be calculated.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Following the official tournament format, the top two teams in each group automatically 
            qualified for the Round of 32. The 12 third-placed teams were then ranked according to 
            points, goal difference and goals scored, with the eight highest-ranked teams also 
            progressing. FIFA uses disciplinary records and then FIFA world rankings to separate 
            teams if these criteria are tied. As these factors were not included in the simulation, 
            a random number generator was used to determine progression in the event of an otherwise 
            unresolved tie.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The knockout-stage fixtures followed the official bracket structure. The eight qualifying 
            third-placed teams were allocated to the appropriate bracket positions using a backtracking 
            algorithm that accounted for the eligible group combinations specified by the tournament 
            format. This ensured that the resulting fixtures were consistent with the bracket's 
            allocation requirements.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Knockout matches were simulated using the same scoreline probability approach. If a match was 
            level after 90 minutes, extra time was simulated using one-third of each team's original 
            expected goals <InlineMath math={String.raw`\frac{1}{3}\lambda`} />, reflecting the additional 30 minutes of play. This assumes 
            scoring rate remains constant throughout the match which is a limitation of the model but a 
            reasonable simplifying assumption. If the scores remained level after extra time, a penalty 
            shootout was simulated, with each penalty assigned a 75% probability of being scored. Five 
            penalties were taken, followed by sudden death if the score was still tied. This provided a 
            method of determining a winner for every knockout fixture.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The simulation recorded each team's final group position and progression through the knockout 
            stages, including the eventual tournament winner. However, a single tournament simulation is 
            subject to considerable random variation. To reduce the influence of any individual run, the 
            entire tournament was simulated 10,000 times. The resulting proportions of simulations in 
            which each outcome occurred were then used as estimates of the corresponding tournament 
            probabilities.
          </p>
        </section>


        {/* Results*/}
        <section className="mb-16 mx-auto max-w-6xl">
          <h2 className="mb-2 text-2xl font-bold md:text-4xl">
            Results
          </h2>
          <p className="mb-6 text-xs font-medium tracking-[0.25em] text-accent">
            PREDICTIONS | ANALYSIS
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            After 10,000 simulations of the 2026 World Cup using the Weighted Dixon–Coles model, the following results were predicted.
          </p>

          <h3 className="mb-4 mt-8 text-lg font-bold md:text-2xl">
            Group Stage Predictions
          </h3>

          <GroupProbabilityTable />

          <p className="mb-4 mt-8 text-sm leading-relaxed md:text-lg">
            Unsurprisingly, the model predicted several of the major nations to win their groups 
            convincingly, with Argentina (77.4%), Brazil (76.6%) and Spain (70.8%) emerging as 
            the strongest favourites. Portugal, meanwhile, are expected to face a more difficult 
            challenge from Colombia in Group K, with probabilities of 52.1% and 41.9%, respectively. 
            At the other end of the predictions, tournament debutants Curaçao had the lowest probability 
            of automatic qualification from the group stage, at just 0.9%.
          </p>
          
          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The uncertainty surrounding each group's predicted finishing positions can be measured 
            using normalised Shannon entropy. This calculates the uncertainty in each team's 
            finishing-position probabilities, with the results averaged across all four teams 
            and normalised between 0 and 1. A value closer to 1 indicates greater uncertainty 
            about the final group standings, while a value closer to 0 indicates more predictable 
            outcomes. This provides an indication of how competitive or unpredictable the model 
            expects each group to be. 
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            According to this metric, the so-called 'Group of Death' is Group D (0.99),
            where all four teams have a realistic chance of qualifying, although Türkiye are the 
            favourites to finish top. Group A (0.94) and Group F (0.90) are the next most competitive 
            groups, with Mexico and the Netherlands respectively predicted to win them.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            At the other end of the scale, Groups E (0.63) and C (0.65) were predicted to be the least 
            competitive, with Germany and Brazil emerging as group winners in 58.5% and 76.6% of
            simulations, respectively. This is partly driven by the predicted struggles of Curaçao and 
            Haiti, who had a 92.9% and 79.7% probability of finishing bottom of their groups.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Another interesting comparison is how the model's predicted group-winner probabilities compare
            with the betting markets. Table 3 shows the five largest positive and negative differences 
            between the model's predictions and the market-implied probabilities.
          </p>

          <div className="mx-auto my-6 max-w-2xl">
            <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-surface/40">
              <table className="w-full md:text-basetext-xs">
                <thead className="bg-surface text-muted">
                  <tr className="border-b border-[var(--border)]">
                    <th className="px-4 py-3 text-left font-medium">Team</th>
                    <th className="px-4 py-3 text-left font-medium">Group</th>
                    <th className="px-4 py-3 text-center font-medium">Difference (pp)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Colombia", "K", "+11.6"],
                    ["Australia", "D", "+10.7"],
                    ["Iran", "G", "+10.0"],
                    ["Argentina", "J", "+9.5"],
                    ["Ecuador", "E", "+7.9"],
                    ["Germany", "E", "−8.2"],
                    ["Mexico", "A", "−8.20"],
                    ["Canada", "B", "−9.2"],
                    ["Portugal", "K", "−10.4"],
                    ["United States", "D", "−17.9"],
                  ].map(([team, group, difference], index) => (
                    <tr
                      key={team}
                      className={`border-b border-[var(--border)] last:border-0 ${
                        index === 5 ? "border-t-2 border-t-[var(--border)]" : ""
                      }`}
                    >
                      <td className="px-4 py-3 font-medium">{team}</td>
                      <td className="px-4 py-3 text-left">{group}</td>
                      <td className={`px-4 py-3 text-center font-medium tabular-nums ${
                        index < 5 ? "text-accent" : "text-[#E8863A]"
                      }`}>
                        {difference}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] md:text-sm">
              Table 3. Largest differences between modelled and market-implied group-winning probabilities.
            </p>
          </div>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The model gives Colombia an 11.6 percentage-point higher probability of winning Group K 
            than the betting markets. Conversely, its estimate for Portugal is 10.4 percentage 
            points lower than the market-implied probability. This is an interesting result given 
            Portugal's reputation as potential dark horses, with a midfield featuring Bruno 
            Fernandes, Vitinha and João Neves. However, Colombia also enter the tournament in 
            strong form, having finished third in qualifying and boasting Luis Díaz as a key 
            attacking threat. It will therefore be interesting to see how Group K unfolds.            
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Another notable difference appears in Group D. Australia have a 10.7 percentage-point 
            higher probability of topping the group than suggested by the betting markets, while 
            the model gives the United States a 17.9 percentage-point lower probability. This 
            reinforces the model's assessment of Group D as the most competitive group, with 
            four relatively evenly matched teams and considerable uncertainty over how it will 
            unfold. It also raises the question of whether the United States can use their home 
            advantage to outperform the model's expectations.
          </p>

          <h3 className="mb-4 mt-8 text-lg font-bold md:text-2xl">
            Knockout Predictions
          </h3>

          <WorldCupBracket />
          <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] md:text-sm">
            Figure 1: The most likely knockout bracket based on the model's predicted group standings. The estimated probability of each match is the 
            result of 10,000 simulations.
          </p>

          <p className="mb-4 mt-8 text-sm leading-relaxed md:text-lg">
            Having considered the predicted group-stage outcomes, attention turns to the teams most 
            likely to win the tournament. Brazil emerged as the model's favourites, with a 17.4% 
            probability of lifting the trophy. Spain and Argentina were their closest competitors, 
            with probabilities of 15.2% and 13.8%, respectively. England and France followed, with 
            chances of 9.0% and 7.5%. Figure 1 shows the representative predicted knockout bracket, 
            alongside the probabilities of each team winning their respective matches.
          </p>

          <figure className="mx-auto my-8 max-w-4xl">
            <img
                src="/plots/projects/wc-simulation/model_v_markets.jpg"
                alt="Model v market odds"
                className="w-full rounded-xl border border-[var(--border)]"
            />
            <figcaption className="mt-3 text-xs leading-relaxed text-[var(--muted)] md:text-sm">
                Figure 2: A scatter plot of market implied probabilities against the model's predicted 
                probabilities of each team winnin the 2026 World Cup.
            </figcaption>
          </figure>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            But how do these predictions compare with the betting markets? Figure 2 shows the 
            difference between the market-implied and model-predicted probabilities of each 
            team winning the tournament. The model is considerably more confident in Brazil's 
            chances than the markets, which rank them as the fourth favourites. It is also more 
            optimistic about reigning world champions Argentina retaining their title. The model's 
            prediction for tournament favourites Spain is broadly in line with the markets, although 
            it is less confident in the chances of France and England.
          </p>

          <h3 className="mb-4 mt-8 text-lg font-bold md:text-2xl">
            Dark Horses
          </h3>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The World Cup often provides opportunities for unexpected teams to make deep runs into the 
            tournament. Recent examples include Morocco's run to the semi-finals in 2022 and Croatia 
            reaching the final in 2018. These teams are often labelled as the tournament's 'dark horses', 
            but which nations does the model identify as potential candidates in 2026?
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Outside the traditional major nations, Switzerland have one of the highest probabilities of 
            reaching the semi-finals (9.1%), alongside a 23.2% chance of reaching at least the 
            quarter-finals. The 19th-ranked side are favourites to win their group, potentially 
            setting up a route through Egypt and Portugal before a possible semi-final against 
            Argentina. Combining experienced players such as Akanji and Embolo with exciting 
            emerging talents such as Manzambi, a semi-final appearance would represent Switzerland's 
            best-ever World Cup finish, although it remains an ambitious target.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Another team to watch are Ecuador. While their impressive qualifying campaign, in which 
            they finished second and defeated Argentina, has already attracted attention, the model 
            also suggests that the 23rd-ranked side could make a deep run. They have a 23.1% 
            probability of reaching the quarter-finals, although much depends on their group-stage 
            position. Germany are expected to win Group E, but Ecuador have a 42.1% chance of finishing 
            second, compared with 28.9% for Ivory Coast. A second-place finish would likely set up a 
            Round of 32 meeting with Norway, while finishing third could lead to an equally challenging 
            fixture against Portugal. Nevertheless, arriving in strong form and spearheaded by 
            36-year-old Enner Valencia, Ecuador could provide an upset.
          </p>

          <h3 className="mb-4 mt-8 text-lg font-bold md:text-2xl">
            Underdogs
          </h3>
          
          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The expanded 48-team format introduces four debutants to the World Cup: Curaçao, 
            Cape Verde, Jordan and Uzbekistan. Of these newcomers, Uzbekistan and, perhaps 
            surprisingly, 67th-ranked Cape Verde have the strongest chances of progressing 
            from their groups, at 37.0% and 33.9%, respectively. In fact, both nations managed 
            to win the entire tournament in one of the 10,000 simulations.            
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Jordan have a 19.7% probability of progressing from their group, while Curaçao managed this 
            in just 3.2% of simulations. Regardless of the predictions, qualification alone represents a 
            memorable achievement for each nation, although it remains possible that one of them could 
            provide a surprise along the way.      
          </p>

          <h3 className="mb-4 mt-8 text-lg font-bold md:text-2xl">
            Potential Underperformers
          </h3>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The model can also highlight nations that may struggle to meet expectations. 
            One example is Japan, the 18th-ranked side, who have never progressed beyond the Round of 
            16 at a World Cup. Unfortunately, the model offers little indication that this record will 
            change, giving them just a 28.6% probability of reaching the Round of 16. This is lower 
            than Paraguay's probability of 30.3%, despite their considerably lower ranking of 41st. 
            This may be partly explained by the competitiveness of Group F, where Japan face the 
            Netherlands and Sweden. A predicted second-place finish could also set up a Round of 
            32 meeting with tournament favourites Brazil, potentially bringing their campaign to an 
            early end.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Norway enter the tournament as popular dark horses following a flawless qualifying 
            campaign, winning all eight matches, with star striker Erling Haaland scoring 16 goals. 
            However, the model gives them just a 13.9% probability of reaching the quarter-finals. 
            While this would still represent an impressive achievement for a nation making its first 
            World Cup appearance since 1998, expectations surrounding Norway are considerably higher.
          </p>

          <h3 className="mb-1 mt-8 text-lg font-bold md:text-2xl">
            Retrospective Analysis
          </h3>
          <p className="mb-6 text-xs font-medium tracking-[0.25em] text-accent">
            POST TOURNAMENT ANALYSIS
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Now that the tournament has concluded I thought I would add this section retrospectively 
            to assess how the model’s predictions compared to reality. Figure 3 shows the model’s 
            predicted finishes vs teams actual finishes. Unsurprisingly there are a lot of 
            discrepancies as international football is very difficult to predict.
          </p>

          <figure className="mx-auto my-8 max-w-4xl">
            <img
                src="/plots/projects/wc-simulation/predicted_v_actual_finish.jpg"
                alt="Predicted v actual finishes"
                className="w-full rounded-xl border border-[var(--border)]"
            />
            <figcaption className="mt-3 text-xs leading-relaxed text-[var(--muted)] md:text-sm">
                Figure 3: Model predicted outcome comapred to the actual outcome for every team at the 2026 World Cup. The 
                predicted outcome is the expected finishing position of each team, precicted by the model over 10,000 simulations.
            </figcaption>
          </figure>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The model correctly predicted three of the four semi-finalists: Spain, England and Argentina. 
            Spain ultimately went one step further than the model's predictions, winning the tournament. 
            Brazil, meanwhile, had been the model's favourites but suffered a disappointing Round of 16 
            exit against Norway.           
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Alongside Brazil, Germany and Uruguay were arguably the two biggest underperformers relative 
            to the model's expectations. Germany suffered a shock penalty shootout defeat to Paraguay 
            in the Round of 32, while Uruguay failed to progress beyond the group stage after not 
            winning a single match.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Cape Verde, identified as potential underdogs before the tournament, enjoyed a remarkable 
            campaign. Draws against Spain, Uruguay and Saudi Arabia were enough to secure second 
            place in Group H, exceeding the model's predicted third-place finish. This set up a 
            Round of 32 meeting with reigning world champions Argentina, in what was arguably 
            the match of the tournament. Cape Verde narrowly lost after extra time.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Norway also defied the model's relatively modest expectations, defeating Brazil in the 
            Round of 16 before narrowly losing to England in the quarter-finals. Switzerland, however, 
            justified their inclusion among the potential dark horses, reaching the quarter-finals 
            before eventually losing to Argentina after extra time.       
          </p>
        </section>



        {/* Limitations */}
        <section className="mt-4 mb-16 mx-auto max-w-6xl">
          <h2 className="mb-2 text-2xl font-bold md:text-4xl">
            Model Limitations
          </h2>
          <p className="mb-6 text-xs font-medium tracking-[0.25em] text-accent">
            DATA | ASSUMPTIONS
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Although the model provides a statistical estimate of how the 2026 World Cup could 
            unfold, several limitations may affect its predictive performance.          
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Firstly, the model relies on historical international match results. International 
            teams play relatively few fixtures compared with club sides, meaning the available 
            data can be limited. Furthermore, national-team squads, managers and tactical 
            approaches can change considerably between tournaments, meaning historical 
            results may not always accurately represent a team's current strength. 
            The time-decay weighting helps address this by placing greater importance 
            on recent fixtures, although it cannot fully account for these changes.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The final model estimates a team's expected goals using features like elo rating difference, recent form and home advantage. 
            While these features capture several important aspects of team performance, the model does 
            not account for a number of potentially influential factors. Player-specific variables, 
            including injuries, availability, individual quality and current form, are not considered. 
            Similarly, managerial tactics, tactical match-ups, recovery time between fixtures and 
            environmental factors such as climate are not explicitly modelled. These can all influence 
            match outcomes but are not captured by the model's current features.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            There are also limitations within the tournament simulation itself. The features used to 
            estimate expected goals are fixed using information available before the tournament. 
            Consequently, if a team performs particularly well during the group stage, this 
            improved form is not reflected in its expected goals for subsequent knockout matches.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            The knockout simulation also relies on several simplifying assumptions. Extra-time 
            scoring rates are assumed to be proportional to match duration, with expected 
            goals reduced to one-third of their full-time values. In reality, scoring 
            rates may differ due to fatigue, tactical changes and the increased 
            importance of the result. Finally, penalty shootouts are simulated using 
            a constant 75% conversion rate, which does not account for differences in 
            individual penalty-taking ability or goalkeeper performance.
          </p>
        </section>

        {/* Conclusion */}
        <section className="mt-4 mb-16 mx-auto max-w-6xl">
          <h2 className="mb-2 text-2xl font-bold md:text-4xl">
            Conclusion
          </h2>
          <p className="mb-6 text-xs font-medium tracking-[0.25em] text-accent">
            MODELLING THE UNCERTAINTY OF TOURNAMENT FOOTBALL
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Overall, this project demonstrated how a Weighted Dixon–Coles model combined with Monte 
            Carlo simulations can be used to explore possible outcomes of the 2026 World Cup. 
            Despite the limitations of the model, the objective was to investigate what insights 
            a relatively simple statistical approach could provide, and how its predictions 
            compared with those of the betting markets.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            While Brazil, the model's tournament favourites, ultimately fell short of expectations, 
            the model correctly identified three of the four semi-finalists. It also correctly 
            identified Switzerland’s potential as dark horses as well as Cape Verde’s potential 
            to defy expectations.
          </p>

          <p className="mb-4 text-sm leading-relaxed md:text-lg">
            Ultimately, the results demonstrate that even a relatively simple statistical model can 
            provide interesting insights into tournament outcomes, identify potential opportunities 
            and challenge expectations set by the betting markets. However, the discrepancies between 
            the predictions and actual results also highlight the uncertainty inherent in international 
            football and the importance of interpreting model probabilities as estimates rather than 
            certainties.
          </p>

        </section>


        {/* Technical Stack */}
        <section className="mb-16 mx-auto max-w-6xl">

          <h2 className="mb-2 text-2xl font-bold md:text-4xl">
            Technical Stack
          </h2>
          <p className="mb-6 text-xs font-medium tracking-[0.25em] text-accent">
            TOOLS AND TECHNOLOGIES
          </p>

          <div className="mx-auto max-w-4xl overflow-x-auto rounded-xl border border-[var(--border)] bg-surface/40">
            <table className="w-full min-w-[420px] text-left text-sm md:text-base">
              <thead className="border-b border-[var(--border)] bg-surface">
                <tr>
                  <th className="px-4 py-3 font-semibold">Area</th>
                  <th className="px-4 py-3 font-semibold">Tools</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[var(--border)]">
                  {[
                      ["Programming Language", "Python"],
                      ["Data Processing", "Pandas, NumPy"],
                      ["Machine Learning", "Scikit-learn"],
                      ["Statistical Modelling", "Statsmodels, SciPy"],
                      ["Model Evaluation", "Scikit-learn"],
                      ["Data Visualisation", "Matplotlib"],
                      ["Development Environment", "Jupyter Notebook, VS Code"],
                      ["Version Control", "GitHub"],
                  ].map(([area, tools]) => (
                      <tr key={area}>
                          <td className="px-4 py-3 text-muted">{area}</td>
                          <td className="px-4 py-3">{tools}</td>
                      </tr>
                  ))}
              </tbody>
            </table>
          </div>

        </section>


        {/* GitHub */}
        <div className="mb-16 flex justify-center">
            <a
                href="https://github.com/sethmckinnonevans/world-cup-2026-predictor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-surface/30 px-7 py-3 text-sm font-medium transition-colors duration-200 hover:border-accent/60 hover:bg-surface/70 hover:text-accent md:text-base"
            >
                View on GitHub
            </a>
        </div>

        <div className="mx-auto mb-12 max-w-6xl border-t border-[var(--border)]" />


        {/* Other Projects */}
        <section className="mx-auto mb-12 max-w-6xl">

          <div className="grid gap-8 md:grid-cols-3">

            <div className="md:col-span-2">

              <h3 className="mb-4 text-2xl font-bold md:text-4xl">
                Featured Projects
              </h3>

              <div className="grid gap-5 md:grid-cols-2">

                <Link
                  href="/projects/xpass"
                  className="group rounded-2xl border border-[var(--border)] bg-surface/30 p-5 transition-colors duration-200 hover:border-accent/60 hover:bg-surface/70 md:p-6"
                >
                  <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-accent md:text-2xl">
                    Expected Pass Completion
                  </h3>
                  <p className="text-xs font-medium tracking-[0.2em] text-accent md:text-sm">
                    MACHINE LEARNING
                  </p>
                </Link>

                <Link
                  href="/projects/asian-transfers"
                  className="group rounded-2xl border border-[var(--border)] bg-surface/30 p-5 transition-colors duration-200 hover:border-accent/60 hover:bg-surface/70 md:p-6"
                >
                  <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-accent md:text-2xl">
                    Asian Transfers
                  </h3>
                  <p className="text-xs font-medium tracking-[0.2em] text-accent md:text-sm">
                    PLAYER RECRUITMENT
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