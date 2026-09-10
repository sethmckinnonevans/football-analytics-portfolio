import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-[#404040] tracking-wide leading-tight text-white px-12 py-2">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 mb-10 flex items-center justify-between bg-[#303030] py-6 border-b border-white/30">
        <Link 
          href="/" 
          className="transition duration-200 text-xl font-bold hover:scale-110 hover:text-white"
          >
          Home
        </Link>

          <div className="flex gap-8 text-sm text-gray-400">
            <Link 
              href="/about" 
              className="transition duration-200 hover:scale-110 hover:text-white"
              >
                About
            </Link>

            <Link 
              href="/projects" 
              className="transition duration-200 hover:scale-110 hover:text-white"
              >
                Projects
            </Link>

            <Link 
              href="/match-reports" 
              className="transition duration-200 hover:scale-110 hover:text-white"
            >
              Match Reports
            </Link>

            <Link 
              href="/contact" 
              className="transition duration-200 hover:scale-110 hover:text-white"
            >
              Contact
            </Link>
          </div>
      </nav>

      {/* Title*/}
      <section className="mb-12 mx-auto max-w-6xl">
        <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-6xl">
          Nottingham Forest 0-0 Tottenham Hotspur
        </h1>

        <p className="mb-4 text-md font-medium tracking-[0.25em] text-gray-500">
          PREMIER LEAGUE | GW3 | 05.09.2026
        </p>

      </section>

      {/* Average Positions*/}
      <section className="mb-8 mx-auto max-w-6xl">

         <div className="grid gap-8 md:grid-cols-2">
            <div>
              <img
                src="/plots/match-reports/forest-spurs/Nottingham Forest_average_positions.png"
                alt="Nottingham Forest average player positions"
                className="w-full rounded-xl"
              />
            </div>

            <div>
              <img
              src="/plots/match-reports/forest-spurs/Tottenham Hotspur_average_positions.png"
              alt="Nottingham Forest average player positions"
              className="w-full rounded-xl justify-end"
            />

            </div>

         </div>
      </section>

      {/* Momentum and xG*/}
      <section className="mb-8 mx-auto max-w-6xl">

        <div className="grid gap-8 md:grid-cols-1">

          <div>
            <img
              src="/plots/match-reports/forest-spurs/momentum_graph.png"
              alt="Match momentum graph"
              className="w-full rounded-xl]"
            />
          </div>

          <div>
            <img
              src="/plots/match-reports/forest-spurs/xg.png"
              alt="Expected goals graph"
              className="w-full rounded-xl"
            />
          </div>

        </div>

      </section>

      {/* Shot Maps*/}
      <section className="mb-8 mx-auto max-w-6xl">  
        
        <div className="grid gap-8 md:grid-cols-1">
          <img
            src="/plots/match-reports/forest-spurs/shot_map.png"
            alt="Tottenham shot map"
            className="w-full rounded-xl"
          />
        </div>

      </section>

      {/* Overview */}
      <section className="mb-12 mx-auto max-w-6xl">
        <h2 className="mb-6 text-3xl font-bold">
          Overview
        </h2>
        
        <p className="mb-4 text-lg">
          Spurs gained their first point of the season in a rather uneventful game at the City Ground. It was a well
          structured, disciplined defensive performance, limiting Forest to just 0.75 open play xG and registering 
          a first clean sheet of the season. However, the attacking woes continued, relying heavily on set-pieces
          to generate chances since Forest's defensive approach forced Spurs into wide areas where poor quality and
          decision became a common theme. As a result Spurs have now failed to score in their opening three games for the
          first time since the 1974/75 season. 
        </p>


      </section>

      {/* Out of Possession*/}
      <section className="mb-12 mx-auto max-w-6xl">
        <h2 className="mb-6 text-3xl font-bold">
          Out of Possession
        </h2>
        
        <div className="grid gap-6 md:grid-cols-1">
          <div>
              <img
                  src="/plots/match-reports/forest-spurs/press-1.JPG"
                  alt="Pressing Sequence 1"
                  className="w-full rounded-xl"
                />

            <p className="mt-2 text-sm text-gray-400">
              Image 1: Spurs Pressing Sequence - 4-2-4 mid block.
            </p>
          </div>

          <div>
              <img
                src="/plots/match-reports/forest-spurs/press-2.JPG"
                alt="Pressing Sequence 2"
                className="w-full rounded-xl"
              />

            <p className="mt-2 text-sm text-gray-400">
              Image 2: Spurs Pressing Sequence - initiated when the ball goes to the wide centre-backs.
            </p>

          </div>
        </div>

        <p className="mb-8 mt-6 text-lg">
          The general approach out of possession was a well structured 4-2-4 mid block which stifled Forest's 
          build-up and limited them to few good chances. As seen in Image 1, Conor Gallagher pushes up to create
          a front four when the Forest centre-backs began their build-up. When the central centre-back, Milenkovic, 
          had possession the front four cut the passing lanes into the Forest double pivot while the second line of 
          Tonali and Bentancur would follow the Forest 10s of Gibbs-White and Ndoye. When the ball went to either 
          wide centre-back, Tel or Savio would initiate the press, with the fullbacks of Udogie and Porro jumping to
          close down the Forest wing-backs as seen in Image 2. This approach was largely effective, especially in the first
          half, since it forced the Forest centre-backs to play long balls into Delap where Van de Ven and Van Hecke were 
          able to deal with him competently, recovering the ball.
        </p>

        <div className="grid gap-6 md:grid-cols-1">
          <div>
              <img
                  src="/plots/match-reports/forest-spurs/goal-1.JPG"
                  alt="Pressing Sequence 1"
                  className="w-full rounded-xl"
                />

            <p className="mt-2 text-sm text-gray-400">
              Image 3: Goal Sequence - Spurs 4-2-4 mid block with Delap dropping deep
            </p>
          </div>

          <div>
              <img
                src="/plots/match-reports/forest-spurs/goal-2.JPG"
                alt="Pressing Sequence 2"
                className="w-full rounded-xl"
              />

            <p className="mt-2 text-sm text-gray-400">
              Image 4: Goal Sequence - McAtee recieves the ball between the lines and find Gibbs-White
            </p>

          </div>
        </div>

        <p className="mb-8 mt-6 text-lg">
          The one instance where Forest were able to break down the Spurs block actually resulted with them 
          putting the ball in the back of the net. Again in Image 3, we see Spurs set up in a 4-2-4 mid-block,
          allowing Milenkovic time on the ball. Liam Delap then drops deep between Bentancur and Tonali to recieve
          the ball and due to the lack of pressure on the ball, Milenkovic is able to break the lines and find
          the pass. Once recieving the ball, Delap drops it to McAtee causing Tonali and Bentancur to press while Van 
          de Ven gets caught in two minds, allowing Gibbs-White to run in behind. A well-timed ball and a goal mouth 
          scramble later and the ball was in the Spurs net, only to be ruled out for a Neco Williams hand ball, a let off.
        </p>

        <p className="mb-8 mt-6 text-lg">
          Since this remained the only instance where Forest played straight through the Spurs block, with the majority
          of the Forest chances coming in transition but only accumalating 0.75 open play xG, I think it was an encouraging
          defensive performance from Spurs.
        </p>


      </section>

      {/* In Possession*/}
      <section className="mb-12 mx-auto max-w-6xl">
        <h2 className="mb-6 text-3xl font-bold">
          In Possession
        </h2>

        <div className="grid gap-6 md:grid-cols-1">
            <div>
              <img
                src="/plots/match-reports/forest-spurs/build-up.JPG"
                alt="Pressing Sequence 1"
                className="w-full rounded-xl"
              />

              <p className="mt-2 text-sm text-gray-400">
                Image 5: Spurs Build-Up - 4-1-2-3 with Forest in a 5-4-1 block.
              </p>
          </div>
        </div>

        <p className="mb-6 mt-6 text-lg">
          In possession Spurs set up in a 4-1-2-3 shape with the aim of getting the two number 10s on the ball in the left and right half spaces. 
          But Forest's compact 5-4-1 block limited the opportunities for Spurs to get players on the ball in these dangerous areas. Spurs' 
          front five was very wide, looking to strecth the Forest back five, who went man-for-man with the wingbacks marking Tel and Savio, 
          while the wide centre-backs picked up Tonali and Gallagher in the half spaces and Milenkovic following Marmoush. The Forest midfield 
          four was very compact, shutting off any passing lanes into the Spurs front 5 and instead forcing Spurs around the block into wide areas. 
          Bentancur was unable to create an overload when the Spurs centrebacks had possession, due to Delap cutting the passing lanes, 
          which again forced the ball into the fullbacks. At times Spurs did attempt to bypass the Forest block with Kinsky playing long balls into Tel,
          running between the RCB and RWB with the aim of winning the second balls, an approach which had mixed success. 
          On the few ocasions when the centrebacks were able to find passes into the feet of Omar Marmoush, the tracking forest centrebacks 
          were easily able to knock him off the ball, demonstrating his inaptitude to play as a solo striker in this system. 
        </p>

        <div className="grid gap-6 md:grid-cols-1">
            <div>
              <img
                src="/plots/match-reports/forest-spurs/rotations.JPG"
                alt="Pressing Sequence 1"
                className="w-full rounded-xl"
              />

              <p className="mt-2 text-sm text-gray-400">
                Image 6: Spurs Rotations - Pedro Porro taking up the right half space while Conor Gallagher covers at right back.
              </p>
          </div>
        </div>

        <p className="mb-6 mt-6 text-lg">
          The rotations in wide areas were interesting to watch and clearly something De Zerbi has worked on but were ultimately ineffective.
          he Tel-Tonali-Udogie and Savio-Gallagher-Porro wide rotations were an attempt to get players on the ball in the half spaces. In Image 6
          we see Pedro Porro moving forwards to occupy the right half space while Conor Gallagher drops in to right back to offer a passing option.
          The idea to get a player of Porro's technical ability on the ball in a dangerous area was good but due to Forest's man-for-man back five
          and compact midfield four, there were very few opportunites where Spurs players were able to recieve the ball in these half spaces. The same rotations
          were observed on the left hand side, with Tonali dropping into left back to recieve the ball, while Udogie would occupy the left half space. 
          On the limited ocasions Spurs were able to work the ball into wide areas, or create transitions, the overall quality and decision making was extremeley poor.
           Without any real adjustments from De Zerbi it meant that the limited Spurs chance mostly came from set-pieces. 
        </p>

      </section>
      
      {/* Analysis*/}
      <section className="mb-12 mx-auto max-w-6xl">
        <h2 className="mb-6 text-3xl font-bold">
          Analysis
        </h2>

      <p className="mb-4 text-lg">
        The first noteable thing from watching the game was that Spurs struggled to progress the ball through central areas
        and the Spurs average positions figure highlights this with just a 19.1% usage of the central attacking zone.  This 
        is largely credit to Forest's out of possession system, forcing Spurs into wide areas, but also a limitation of playing 
        Omar Marmoush as a solo striker. From his heatmap we can see he naturally floats to the left hand side and the ocasions 
        when he recieved the ball centrally he struggled to link the play, soon being bullied off by the Forest centre backs. He looked 
        at his most dangerous when he could run at and in behind the forest back line, most notably his chance in the 33 minute which 
        eventually got called as a foul against him. During his time at Manchester City he was arguably at his best when playing off Earling Haaland, 
        so I think playing him with the likes of Dominic Solanke will greatly improve Spurs' ability to play into the central attacking zone while 
        also getting more out of Marmoush.
      </p>

      <div className="mx-auto max-w-4xl"> 
        <img
          src="/plots/match-reports/forest-spurs/marmoush_heatmap.png"
          alt="Pressing Sequence 1"
          className="w-full rounded-xl"
        />
      </div>

      <p className="mb-4 mt-6 text-lg">
        Another observation from the average positions figure is the focus of paly down each wing but with only 0.35xG generate from open play. 
        Again credit has to be given to Forest's back five for their competence in defending wide areas, with the 10s of Gibbs-White and Ndoye 
        working hard off the ball to double up on the Spurs wingers when they recieved the ball out wide. However, the overall lack of quality 
        from Spurs in wide areas was astonishing. While Savio found some joy, completing 3 of 5 dribbles in the final third, he was often forced 
        into the congested centre of the pitch where he was not able to create. While Tel had a torrid day completing just 2 of 6 dribbles and 
        honestly looked uncomfortable when required to beat his man. Mudryk did not get into any promising positions in his short cameo while 
        Kudus was largely ineffective just 1 out of 2 dribbles completed.
      </p>

      <p className="mb-6 text-lg">
        Once again if we look at the crossing statistics from the Spurs it paints a picture of a poor performance or maybe system. 
        The spurs wide players accounted for 21 of the teams 24 cross completing just 6 of them, a success rate of 29%.
        Now the finger can be pointed at a lack of quality from the players, most notably Kudus' dismal cross in the dying minutes, 
        but I think its once again a demonstration that Marmoush cannot play as the number 9. Besides the centrebacks, this Spurs 
        team is not blessed with height, so crossing into the likes of Marmoush is not going to be an effective tactic. 
        Yet there didn't seem to be any other creativity demonstrated on the pitch, no attempt tp work the ball to the biline to cut back into the box, 
        nor to work the ball for shots on the edge of the area, just slow build-up, forcing the ball into wide areas and launching crosses into the box, 
        reminicent of the time under Thomas Frank. 
      </p>

      <div className="mx-auto max-w-4xl"> 
        <img
          src="/plots/match-reports/forest-spurs/wide_areas.png"
          alt="Pressing Sequence 1"
          className="w-full rounded-xl"
        />
      </div>



      </section>

      {/* Final Thoughts*/}
      <section className="mb-12 mx-auto max-w-6xl">
         <h2 className="mb-6 text-3xl font-bold">
          Final Thoughts
        </h2>

        <p className="bm-6 text-lg">
          While Spurs do walk away from the match with their first point of the season, a growing sense of frustration within the fans will remain, having
          yet to score a goal after three league games and in all honesty not coming close to doing so. The out of possession sytem was impressive, 
          limiting forest to minimal chances and giving Spurs their first clean sheet of the season. But the stodgy performance in possession will leave fans demanding more. 
          The best chances came from set pieces and the poor play in wide areas makes the return of the likes of Kulusevski ever more neccessary. 
          The match also demonstrated that Marmoush is not a natural nine and it would be a blunder of De Zerbi to continue playing him there going forwards without the likes of Solanke to support him.
        </p>
      </section>

       <div className="mb-12 border-t border-white/20"></div>

      <div className="mb-12 flex gap-6 justify-center">
            <Link
                href="/match-reports"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 px-6 py-3 transition duration-200 hover:border-white hover:bg-white/10 hover:scale-110"
            >
                Read More Match Reports
            </Link>
        </div>    
    </main>
  );
}