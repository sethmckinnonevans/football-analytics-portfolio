import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function SpursEverton() {
    return (

        <main className="bg-gradient-to-b from-[#7678A8] via-[#40425C] to-[#272833] min-h-screen tracking-wide leading-tight px-12 py-2">
        

        {/* Navigation */}
        <Navbar />

        {/* Title*/}
        <section className="mb-12 mx-auto max-w-6xl">
            
            <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-6xl">
                Tottenham Hotspur 3-1 Coventry City
            </h1>

            <p className="mb-4 text-sm font-medium tracking-[0.25em] text-gray-400 md:text-md">
                PREMIER LEAGUE | GW7 | 19.10.2026
            </p>

        </section>


        {/* Average Positions */}
        <section className="mb-8 mx-auto max-w-6xl">
            <div className="grid gap-4 md:grid-cols-2">

                <div>
                    <iframe
                    src="/plots/match-reports/spurs-coventry/Tottenham Hotspur_average_positions.html"
                    title="Spurs average positions"
                    className="h-[380px] w-full rounded-xl border-0"
                    />
                </div>

                <div>
                    <iframe
                    src="/plots/match-reports/spurs-coventry/Coventry City_average_positions.html"
                    title="Everton average player positions"
                    className="h-[380px] w-full rounded-xl border-0"
                    />
                </div>

            </div>
        </section>


        {/* Momentum and xG*/}
        <section className="mb-8 mx-auto max-w-6xl">

            <div className="grid gap-8 md:grid-cols-1">

                <div>
                    <img
                    src="/plots/match-reports/spurs-coventry/momentum_graph.png"
                    alt="Match momentum graph"
                    className="w-full rounded-xl"
                    />
                </div>

                <div>
                    <img
                    src="/plots/match-reports/spurs-coventry/xg.png"
                    alt="Expected goals graph"
                    className="w-full rounded-xl"
                    />
                </div>

            </div>

        </section>


        {/* Shot Maps*/}
        <section className="mb-8 mx-auto max-w-6xl">
            <div className="grid gap-4 md:grid-cols-2">

                <div>
                    <iframe
                    src="/plots/match-reports/spurs-coventry/Tottenham Hotspur_shot_map.html"
                    title="Spurs shot map"
                    className="h-[380px] w-full"
                    />
                </div>

                <div>
                    <iframe
                    src="/plots/match-reports/spurs-coventry/Coventry City_shot_map.html"
                    title="Coventry shot map"
                    className="h-[380px] w-full"
                    />
                </div>

            </div>
        </section>


         {/* Overview */}
        <section className="mb-12 mx-auto max-w-6xl">
            <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                Overview
            </h2>
            
            <p className="mb-4 text-sm md:text-lg">
                Spurs climbed out of the relegation zone after recording their first win of the 
                season in a low-key affair against Coventry City. De Zerbi implemented an unusual 
                3-4-3 shape featuring a midfield diamond, which allowed Spurs to enjoy comfortable 
                spells of possession without creating much attacking threat, finishing with just 
                0.86 xG. While far from their most convincing performance of the season, the return 
                of James Maddison to the starting XI provided a welcome boost. His stunning 
                strike in the 14th minute showcased exactly the kind of quality that has been 
                missing from this Spurs side in recent weeks.
            </p>

            <p className = "mb-4 text-sm md:text-lg">
                Maddison's return, alongside Kudus, demonstrated what Spurs have been lacking in 
                the opening weeks of the campaign. Despite scoring three goals, Spurs generated an 
                average of just 0.05 xG per shot, overperforming their expected goals by 2.14. 
                All three goals came from outside the box, highlighting the individual quality that 
                ultimately made the difference. While this was a welcome change after weeks of poor finishing hindering results, 
                relying on such a return from relatively low quality chances is unlikely to 
                be a sustainable solution to Spurs' attacking problems.
            </p>

            <p className = "mb-4 text-sm md:text-lg">
                Beyond the result itself, the return of key attacking players could prove just as important. 
                Maddison's presence visibly lifted the atmosphere, while Dejan Kulusevski's brief cameo 
                after 526 days generated the biggest cheers of the night. Combined with a vital three points, these 
                moments could change the mood around the club and give Spurs a platform to 
                finally get their season going.
            </p>

        </section>


        {/* 3-4-3 Shape */}
        <section className="mb-12 mx-auto max-w-6xl">
            <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                Spurs' Change in Shape
            </h2>

            <div className = "w-full mx-auto md:max-w-4xl">
                <img
                    src="/plots/match-reports/spurs-coventry/shape.jpg"
                    alt="Spurs 3-4-3 shape"
                    className="rounded-xl"
                />

                <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                    Image 1: Spurs' 3-4-3 shape in possession with a diamond in midfield. 
                </p>
            </div>

            <p className = "mb-4 text-sm md:text-lg">
               The most interesting aspect of Monday night's match was De Zerbi's tactical change to 
               Spurs' in-possession structure. Having become accustomed to seeing Spurs operate 
               in a 3-2-5 so far this season, against Coventry they adopted a 3-4-3 shape with a 
               diamond in midfield, as shown in Image 1. Van de Ven, Tosin and van Hecke formed 
               a narrow back three, while Robertson and Kudus provided width. Maddison, Gray, 
               Marmoush and Tonali occupied the central areas, forming the midfield diamond.
            </p>

            < p className = "mb-4 text-sm md:text-lg">
                This appeared well suited to facing a Coventry side expected to defend in a compact 4-4-2 low block, 
                reflected in their OPPDA of 13.2. The diamond offered Spurs the potential to overload 
                Coventry centrally, but the visitors' narrow defensive shape often forced them towards 
                the flanks, where they struggled to create meaningful attacking threat.
            </p>

            <p className = "mb-4 tetxt-sm md:text-lg">
                With so much of Coventry's defensive structure concentrated centrally, Spurs had 
                opportunities to exploit the space in wide areas. While the left flank was shut down well by
                Coventry, the right flank presented opportunities to expliot, which Spurs did not consistently take advantage of.
                On the left, Robertson held the width, but Coventry 
                appeared comfortable allowing Sakamoto to defend him one-on-one, with van Ewijk able to 
                remain tucked into the defensive line. This restricted the space available for 
                Marmoush to exploit the left half-space.
            </p>

            
            <p className = "mb-4 text-sm md:text-lg">
                However, the right flank presented a different problem for Coventry. Kudus posed a greater 
                individual threat, forcing DaSilva to track him closely. Thomas-Asante's tendency to 
                double up on Kudus alongside DaSilva, rather than consistently tracking runners into 
                defensive areas, often left a gap in Coventry's back line for Archie Gray to exploit, 
                as shown in Image 2.
            </p>

            <div className = "w-full mx-auto md:max-w-4xl">
                <img
                    src="/plots/match-reports/spurs-coventry/Gray.jpg"
                    alt="Space for Gray"
                    className="rounded-xl"
                />

                <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                    Image 2: DaSilva and Thomas-Asante double-up on Kudus to limit his threat, creating space for Archie Gray.
                </p>
            </div>

            <p className = "mb-4 text-sm md:text-lg">
                This created a dilemma for Grimes. If he followed Gray's runs, space opened up 
                for Maddison to receive the ball centrally. If he remained in position, 
                van Hecke could use his passing ability to find Gray running in behind the 
                defence. This was arguably Spurs' clearest route to creating dangerous 
                situations during the match. Although 41.3% of their play came down the 
                right, they struggled to translate this into consistent attacking threat.
            </p>

        </section>


        {/* Sandro Tonali */}
        <section className="mb-12 mx-auto max-w-6xl">
            <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                Tonali's Role in Progression
            </h2>

            <p className = "mb-4 text:sm md:text-lg">
                The success of this 3-4-3 system depended on technical players such as Maddison and 
                Marmoush receiving the ball in central areas, where they could manipulate Coventry's 
                defensive block. However, before these players could influence the game, 
                Spurs first needed to find them. As the deepest midfielder in the diamond, 
                Sandro Tonali carried significant responsibility for progressing possession 
                into these areas. Yet of his 68 pass attempts, just 25 were played forwards (37%).
            </p>

            <p className = "mb-4 text:sm md:text-lg">
                I don't want to be overly critical of Tonali, who is undoubtedly a talented player, 
                but his tendency to recycle possession rather than attempt more ambitious 
                forward passes is frustrating to wathc. In a system that relies on progressing the 
                ball into congested central areas, this can become a significant limitation.
            </p>

            <div className = "w-full max-w-4xl mx-auto mb-4">
                <iframe
                    src="/plots/match-reports/spurs-coventry/tonali-xt.html"
                    title="Tonali xT"
                    className="w-full max-w-4xl h-[570px] mx-auto"          
                />

                <p className="mt-2 text-[10px] text-gray-500 md:text-sm">
                    Figure 1: Sandro Tonali's expected threat (xT) from passing against Coventry City.
                </p>
            </div>

            <p className = "mb-4 text:sm md:text-lg">
                Figure 1 shows Tonali's expected threat (xT) from passing during the match. 
                The predominantly sideways nature of his distribution is immediately apparent, 
                with relatively little attacking threat generated from his passing overall. 
                He finished the match with a total passing xT of -0.003. For context, 
                the mean total passing xT among midfielders across Europe's top five leagues 
                last season was 0.056, using a minimum threshold of 25 attempted passes. 
                This highlights just how little attacking threat Tonali generated through his passing.
            </p>

            <p className = "mb-4 text-sm md:text-lg">
                Of course, players should not attempt a forward pass every time they receive the ball. 
                Recycling possession has its place, particularly against a compact defensive block. 
                However, when the team's attacking structure depends on finding players between the 
                lines, a lack of progression from the deepest midfielder can undermine the entire system. 
                Tonali's standout contribution was a superb pass to Solanke in the 38th minute, worth 
                0.0513 xT, which led to a shot. This demonstrated that he possesses the technical 
                ability to make the passes Spurs needed. The question is why he so rarely 
                attempted them elsewhere.
            </p>

            <p className = "mb-4 text-sm md:text-lg">
                To further illustrate my point, I have picked out a few examples of situations where 
                Tonali seemingly had the option to play forwards and create dangerous situations but 
                instead chose not to do so.
            </p>

            <div className = "w-full mx-auto md:max-w-4xl">
                <img
                    src="/plots/match-reports/spurs-coventry/Tonali pass 1.jpg"
                    alt="Tonali pass 1"
                    className="rounded-xl"
                />

                <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                    Image 3: Sandro Tonali has the opportunity to find Andy Robertson's run in-bheind the Coventry defense. 
                </p>
            </div>

            <p className = "mb-4 text-sm md:text-lg">
                In Image 3, Tonali receives the ball in space as Robertson makes a darting run in 
                behind Coventry's defence. The passing lane appears available, and finding Robertson could 
                have created a dangerous crossing opportunity with Coventry's defenders retreating towards 
                their own goal. Instead, Tonali plays a simple pass across to van Hecke, allowing Coventry 
                to maintain their defensive shape.
            </p>

            <div className = "w-full mx-auto md:max-w-4xl">
                <img
                    src="/plots/match-reports/spurs-coventry/Tonali pass 2.jpg"
                    alt="Tonali pass 2"
                    className="rounded-xl"
                />

                <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                    Image 4: Sandro Tonali with the opportunity to pass to Maddison who find space in the pocket.
                </p>
            </div>

            <p className = "mb-4 text-sm md:text-lg">
                Image 4 illustrates the type of situation De Zerbi's system was designed to create. 
                Tonali receives possession centrally, with Maddison occupying a pocket of space between 
                Coventry's defensive and midfield lines and showing for the ball. The opportunity to 
                find Maddison appears relatively straightforward, yet Tonali takes additional 
                touches before eventually passing backwards to van de Ven. The move loses momentum, 
                and Spurs miss an opportunity to get one of their most creative players on the ball in 
                a dangrous area.
            </p>

            <div className = "w-full mx-auto md:max-w-4xl">
                <img
                    src="/plots/match-reports/spurs-coventry/Tonali pass 3.jpg"
                    alt="Tonali pass 2"
                    className="rounded-xl"
                />

                <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                    Image 5: Sandro Tonali carrying the ball in transition, with the opportunity to play Solanke in on goal.
                </p>
            </div>

            <p className = "mb-4 text-sm md:text-lg">
                The final example comes during a transition, shown in Image 5. With the game stretched 
                in the latter stages, Tonali carries the ball forward in a 5v6 situation. 
                Solanke runs between the centre-backs, offering Tonali the opportunity to attempt a 
                through ball that could create a chance to put the game to bed. It would not have been 
                an easy pass, but it was an opportunity worth considering. Instead, Tonali takes further 
                touches, moves inside and eventually plays sideways to Gray, allowing Coventry time 
                to recover and get players back behind the ball.
            </p>

            <p className = "mb-4 text-sm md:text-lg">
              None of these examples make Tonali a bad player. However, if De Zerbi intends to persist 
              with this structure, Spurs need their deepest midfielder to contribute more consistently 
              to forward progression. Tonali has demonstrated the technical ability to break lines,
              but against Coventry, he too often prioritised retaining possession over exploiting 
              the spaces the system was designed to create. Becoming more willing to take 
              calculated risks could be crucial to unlocking the attacking potential of this Spurs side.  
            </p>

        </section>


        {/* Final Thoughts */}
        <section className="mb-12 mx-auto max-w-6xl">
            <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                Final Thoughts
            </h2>

            <p className = "mb-4 text-sm md:text-lg">
                Credit must go to De Zerbi for his tactical approach to this game, despite its limited 
                effectiveness. Known for his emphasis on baiting the press, De Zerbi has so far struggled 
                to implement this philosophy consistently at Spurs, with many opponents opting to sit 
                deep rather than commit players forward. Spurs' usual structure this season has consequently 
                struggled to break down low blocks, often being forced into wide areas where the 
                quality has been lacking.
            </p>

            <p className ="mb-4 text-sm md:text-lg">
                According to Opta, Coventry ranked bottom of the league for pressing sequences (57) and opposition passes per 
                defensive action (OPPDA, 20.7), and De Zerbi recognised that this could limit his Spurs side.
                Thus, he introduced a 3-4-3 with a diamond midfield to overload central areas and disrupt their defensive structure. 
                While the approach had limited success, it offered an alternative to Spurs' usual 
                attacking patterns and exposed some potentially exploitable spaces, particularly in the 
                right channel. With all three goals coming from outside the area, however, Spurs still 
                struggled to consistently translate their attacking possession into dangerous opportunities. 
                The diamond is nevertheless an interesting tactical option to have available against 
                similarly compact opponents in the future. 
            </p>

            <p className = "mb-4 text-sm md:text-lg">
                Ultimately, it was a crucial three points for Spurs, providing a welcome boost to confidence. 
                The return of James Maddison to the starting XI and Dejan Kulusevski's late cameo should 
                also offer encouragement, with both players potentially adding further creativity 
                and attacking quality as the season progresses.
            </p>
        </section>


        <div className="mb-8 border-t border-white/40"></div>

            <div className="mb-8 flex gap-6 justify-center">
                <Link
                    href="/match-reports"
                    className="rounded-xl bg-[#3C3D5C] md:text-lg text-sm border border-gray-500 p-4 md:p-6 transition duration-200 hover:border-white hover:scale-110"
                >
                    Read More Match Reports
                </Link>
            </div>  


        {/* Footer */}
        <Footer />

        </main>
    );
}