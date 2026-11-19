
import Link from "next/link";
import MatchReportFigures from "@/components/match-reports/match-report-figures";

export default function ForestSpurs() {
  return (
    <main className="min-h-screen overflow-hidden bg-background px-5 py-2 text-foreground sm:px-8 lg:px-12">

      {/* Title */}
      <section className="mx-auto mb-12 mt-4 max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-5xl">
          Nottingham Forest 0-0 Tottenham Hotspur
        </h1>

        <p className="text-xs md:text-sm font-medium tracking-[0.25em] text-accent">
          PREMIER LEAGUE | GW3 | 05.09.2026
        </p>
      </section>

      <MatchReportFigures
        slug="forest-spurs"
        homeTeam="Nottingham Forest"
        awayTeam="Tottenham Hotspur"
      />

      {/* Overview */}
      <section className="mx-auto mb-16 max-w-6xl">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold md:text-4xl">
            Overview
          </h2>
          <p className="text-xs font-medium tracking-[0.25em] text-accent">
            MATCH SUMMARY
          </p>
        </div>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          Spurs gained their first point of the season in a rather uneventful game at the City Ground. It was a well-structured, disciplined defensive performance, limiting Forest to just 0.75 open-play xG and registering a first clean sheet of the season. However, the attacking woes continued, relying heavily on set-pieces to generate chances since Forest's defensive approach forced Spurs into wide areas where poor quality and decision-making became a common theme. As a result, Spurs have now failed to score in their opening three games for the first time since the 1974/75 season.
        </p>
      </section>

      {/* Out of Possession */}
      <section className="mx-auto mb-16 max-w-6xl">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold md:text-4xl">
            Out of Possession
          </h2>
          <p className="text-xs font-medium tracking-[0.25em] text-accent">
            DEFENSIVE ANALYSIS
          </p>
        </div>

        <div className="mx-auto mb-6 grid w-full gap-6 md:max-w-4xl md:grid-cols-1">
          <div>
            <img
              src="/plots/match-reports/forest-spurs/press-1.JPG"
              alt="Pressing Sequence 1"
              className="w-full rounded-xl"
            />

            <p className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
              Image 1: Spurs Pressing Sequence - 4-2-4 mid block.
            </p>
          </div>

          <div>
            <img
              src="/plots/match-reports/forest-spurs/press-2.JPG"
              alt="Pressing Sequence 2"
              className="w-full rounded-xl"
            />

            <p className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
              Image 2: Spurs Pressing Sequence - initiated when the ball goes to the wide centre-backs.
            </p>
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          The general approach out of possession was a well-structured 4-2-4 mid block which stifled Forest's build-up and limited them to few good chances. As seen in Image 1, Conor Gallagher pushes up to create a front four when the Forest centre-backs began their build-up. When the central centre-back, Milenkovic, had possession, the front four cut the passing lanes into the Forest double pivot while the second line of Tonali and Bentancur would follow the Forest 10s of Gibbs-White and Ndoye. When the ball went to either wide centre-back, Tel or Savio would initiate the press, with the fullbacks of Udogie and Porro jumping to close down the Forest wing-backs as seen in Image 2. This approach was largely effective, especially in the first half, since it forced the Forest centre-backs to play long balls into Delap where Van de Ven and Van Hecke were able to deal with him competently, recovering the ball.
        </p>

        <div className="mx-auto mb-6 grid w-full gap-6 md:max-w-4xl md:grid-cols-1">
          <div>
            <img
              src="/plots/match-reports/forest-spurs/goal-1.JPG"
              alt="Goal Sequence 1"
              className="w-full rounded-xl"
            />

            <p className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
              Image 3: Goal Sequence - Spurs 4-2-4 mid block with Delap dropping deep.
            </p>
          </div>

          <div>
            <img
              src="/plots/match-reports/forest-spurs/goal-2.JPG"
              alt="Goal Sequence 2"
              className="w-full rounded-xl"
            />

            <p className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
              Image 4: Goal Sequence - McAtee receives the ball between the lines and finds Gibbs-White.
            </p>
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          The one instance where Forest were able to break down the Spurs block actually resulted in them putting the ball in the back of the net. Again in Image 3, we see Spurs set up in a 4-2-4 mid-block, allowing Milenkovic time on the ball. Liam Delap then drops deep between Bentancur and Tonali to receive the ball and, due to the lack of pressure on the ball, Milenkovic is able to break the lines and find the pass. Once receiving the ball, Delap drops it to McAtee, causing Tonali and Bentancur to press while Van de Ven gets caught in two minds, allowing Gibbs-White to run in behind. A well-timed ball and a goalmouth scramble later and the ball was in the Spurs net, only to be ruled out for a Neco Williams handball, a let-off.
        </p>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          Since this remained the only instance where Forest played straight through the Spurs block, with the majority of the Forest chances coming in transition but only accumulating 0.75 open-play xG, I think it was an encouraging defensive performance from Spurs.
        </p>
      </section>

      {/* In Possession */}
      <section className="mx-auto mb-16 max-w-6xl">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold md:text-4xl">
            In Possession
          </h2>
          <p className="text-xs font-medium tracking-[0.25em] text-accent">
            ATTACKING ANALYSIS
          </p>
        </div>

        <div className="mx-auto mb-6 grid w-full gap-6 md:max-w-4xl md:grid-cols-1">
          <div>
            <img
              src="/plots/match-reports/forest-spurs/build-up.JPG"
              alt="Spurs Build-Up"
              className="w-full rounded-xl"
            />

            <p className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
              Image 5: Spurs Build-Up - 4-1-2-3 with Forest in a 5-4-1 block.
            </p>
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          In possession Spurs set up in a 4-1-2-3 shape with the aim of getting the two number 10s on the ball in the left and right half spaces. But Forest's compact 5-4-1 block limited the opportunities for Spurs to get players on the ball in these dangerous areas. Spurs' front five was very wide, looking to stretch the Forest back five, who went man-for-man with the wingbacks marking Tel and Savio, while the wide centre-backs picked up Tonali and Gallagher in the half spaces and Milenkovic following Marmoush. The Forest midfield four was very compact, shutting off any passing lanes into the Spurs front five and instead forcing Spurs around the block into wide areas. Bentancur was unable to create an overload when the Spurs centre-backs had possession, due to Delap cutting the passing lanes, which again forced the ball into the fullbacks. At times Spurs did attempt to bypass the Forest block with Kinsky playing long balls into Tel, running between the RCB and RWB with the aim of winning the second balls, an approach which had mixed success. On the few occasions when the centre-backs were able to find passes into the feet of Omar Marmoush, the tracking Forest centre-backs were easily able to knock him off the ball, demonstrating his inaptitude to play as a solo striker in this system.
        </p>

        <div className="mx-auto mb-6 grid w-full gap-6 md:max-w-4xl md:grid-cols-1">
          <div>
            <img
              src="/plots/match-reports/forest-spurs/rotations.JPG"
              alt="Spurs Attacking Rotations"
              className="w-full rounded-xl"
            />

            <p className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
              Image 6: Spurs Rotations - Pedro Porro taking up the right half space while Conor Gallagher covers at right back.
            </p>
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          The rotations in wide areas were interesting to watch and clearly something De Zerbi has worked on but were ultimately ineffective. The Tel-Tonali-Udogie and Savio-Gallagher-Porro wide rotations were an attempt to get players on the ball in the half spaces. In Image 6 we see Pedro Porro moving forwards to occupy the right half space while Conor Gallagher drops in to right back to offer a passing option. The idea to get a player of Porro's technical ability on the ball in a dangerous area was good but due to Forest's man-for-man back five and compact midfield four, there were very few opportunities where Spurs players were able to receive the ball in these half spaces. The same rotations were observed on the left-hand side, with Tonali dropping into left back to receive the ball, while Udogie would occupy the left half space. On the limited occasions Spurs were able to work the ball into wide areas, or create transitions, the overall quality and decision-making was extremely poor. Without any real adjustments from De Zerbi it meant that the limited Spurs chances mostly came from set-pieces.
        </p>
      </section>

      {/* Analysis */}
      <section className="mx-auto mb-16 max-w-6xl">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold md:text-4xl">
            Analysis
          </h2>
          <p className="text-xs font-medium tracking-[0.25em] text-accent">
            PLAYER ANALYSIS
          </p>
        </div>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          The first notable detail from watching the game was that Spurs struggled to progress the ball through central areas and the Spurs average positions figure highlights this with just a 19.1% usage of the central attacking zone. This is largely credit to Forest's out of possession system, forcing Spurs into wide areas, but also a limitation of playing Omar Marmoush as a solo striker. From his heatmap we can see he naturally floats to the left-hand side and the occasions when he received the ball centrally he struggled to link the play, soon being bullied off by the Forest centre-backs. He looked at his most dangerous when he could run at and in behind the Forest back line, most notably his chance in the 33rd minute which eventually got called as a foul against him. During his time at Manchester City he was arguably at his best when playing off Erling Haaland, so I think playing him with the likes of Dominic Solanke will greatly improve Spurs' ability to play into the central attacking zone while also getting more out of Marmoush.
        </p>

        <figure className="mx-auto mb-6 w-full md:max-w-4xl">
          <img
            src="/plots/match-reports/forest-spurs/marmoush_heatmap.png"
            alt="Omar Marmoush heatmap"
            className="w-full rounded-xl"
          />
        </figure>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          Another observation from the average positions figure is the focus of play down each wing but with only 0.35 xG generated from open play. Again credit has to be given to Forest's back five for their competence in defending wide areas, with the 10s of Gibbs-White and Ndoye working hard off the ball to double up on the Spurs wingers when they received the ball out wide. However, the overall lack of quality from Spurs in wide areas was astonishing. While Savio found some joy, completing 3 of 5 dribbles in the final third, he was often forced into the congested centre of the pitch where he was not able to create. While Tel had a torrid day completing just 2 of 6 dribbles and honestly looked uncomfortable when required to beat his man. Mudryk did not get into any promising positions in his short cameo while Kudus was largely ineffective, with just 1 out of 2 dribbles completed.
        </p>

        <p className="mb-4 text-sm leading-relaxed md:text-lg">
          Once again if we look at the crossing statistics from Spurs it paints a picture of a poor performance or maybe system. The Spurs wide players accounted for 21 of the team's 24 crosses, completing just 6 of them, a success rate of 29%. Now the finger can be pointed at a lack of quality from the players, most notably Kudus' dismal cross in the dying minutes, but I think it's once again a demonstration that Marmoush cannot play as the number 9. Besides the centre-backs, this Spurs team is not blessed with height, so crossing into the likes of Marmoush is not going to be an effective tactic. Yet there didn't seem to be any other creativity demonstrated on the pitch, no attempt to work the ball to the byline to cut back into the box, nor to work the ball for shots on the edge of the area, just slow build-up, forcing the ball into wide areas and launching crosses into the box, reminiscent of the time under Thomas Frank.
        </p>

        <figure className="mx-auto w-full md:max-w-4xl">
          <img
            src="/plots/match-reports/forest-spurs/wide_areas.png"
            alt="Spurs attacking play in wide areas"
            className="w-full rounded-xl"
          />
        </figure>
      </section>

      {/* Final Thoughts */}
      <section className="mx-auto mb-16 max-w-6xl">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold md:text-4xl">
            Final Thoughts
          </h2>
          <p className="text-xs font-medium tracking-[0.25em] text-accent">
            CONCLUSION
          </p>
        </div>

        <p className="mb-6 text-sm leading-relaxed md:text-lg">
          While Spurs do walk away from the match with their first point of the season, a growing sense of frustration within the fans will remain, having yet to score a goal after three league games and in all honesty not coming close to doing so. The out of possession system was impressive, limiting Forest to minimal chances and giving Spurs their first clean sheet of the season. But the stodgy performance in possession will leave fans demanding more. The best chances came from set-pieces and the poor play in wide areas makes the return of the likes of Kulusevski ever more necessary. The match also demonstrated that Marmoush is not a natural nine and it would be a blunder of De Zerbi to continue playing him there going forwards without the likes of Solanke to support him.
        </p>
      </section>

      {/* Reports Link */}
      <div className="mx-auto mb-6 mt-6 max-w-6xl">
        <div className="flex justify-center">
          <Link
            href="/match-reports"
            className="rounded-xl border border-[var(--border)] bg-surface/50 px-6 py-4 text-sm transition-colors duration-200 hover:border-accent/60 hover:text-accent md:text-base"
          >
            Read More Match Reports
          </Link>
        </div>
      </div>

    </main>
  );
}
