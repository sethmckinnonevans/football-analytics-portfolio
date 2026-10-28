import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function ChelseaSpurs() {
    return (

        <main className="bg-gradient-to-b from-[#7678A8] via-[#40425C] to-[#272833] min-h-screen tracking-wide leading-tight px-12 py-2">
        

        {/* Navigation */}
        <Navbar />


        {/* Title*/}
        <section className="mb-12 mx-auto max-w-6xl">
            
            <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-6xl">
                Chelsea 0-2 Tottenham Hotspur
            </h1>

            <p className="mb-4 text-sm font-medium tracking-[0.25em] text-gray-400 md:text-md">
                PREMIER LEAGUE | GW8 | 24.10.2026
            </p>

        </section>


        {/* Average Positions */}
        <section className="mb-8 mx-auto max-w-6xl">
            <div className="grid gap-4 md:grid-cols-2">

                <div>
                    <iframe
                    src="/plots/match-reports/chelsea-spurs/Chelsea_average_positions.html"
                    title="Chelsea average positions"
                    className="h-[380px] w-full rounded-xl border-0"
                    />
                </div>

                <div>
                    <iframe
                    src="/plots/match-reports/chelsea-spurs/Tottenham Hotspur_average_positions.html"
                    title="Spurs average player positions"
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
                    src="/plots/match-reports/chelsea-spurs/momentum_graph.png"
                    alt="Match momentum graph"
                    className="w-full rounded-xl"
                    />
                </div>

                <div>
                    <img
                    src="/plots/match-reports/chelsea-spurs/xg.png"
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
                    src="/plots/match-reports/chelsea-spurs/Chelsea_shot_map.html"
                    title="Chelsea shot map"
                    className="h-[380px] w-full"
                    />
                </div>

                <div>
                    <iframe
                    src="/plots/match-reports/chelsea-spurs/Tottenham Hotspur_shot_map.html"
                    title="Spurs shot map"
                    className="h-[380px] w-full"
                    />
                </div>

            </div>
        </section>


        {/* Overview */}
        <section className="mb-12 mx-auto max-w-6xl">
            <h3 className="mb-6 text-2xl font-bold md:text-4xl">
                Overview
            </h3>
            
            <p className="mb-4 text-sm md:text-lg">
                Tottenham secured a rare victory at Stamford Bridge, beating Chelsea for only the second time in 
                35 Premier League meetings at the ground. On a blustery night in West London, a mistake from 
                Mike Penders gifted Spurs the lead before Cole Palmer was sent off in the 80th minute. 
                Mathys Tel then capped an impressive performance with a superb solo run and finish from 
                outside the box to seal all three points.
            </p>

            <p className = "mb-4 text-sm md:text-lg">
                Much of the credit must go to Roberto De Zerbi, whose tactical ideas came to fruition against 
                Chelsea's aggressive man-to-man press. While Spurs have struggled at times this season against 
                passive, deep-lying opposition, Chelsea's attempts to press high created opportunities to exploit 
                space in midfield and progress the ball into attacking areas. Spurs enjoyed 69% possession, 
                although their dominance did not translate into a particularly productive attacking performance. 
                They recorded just 0.74 xG, with an average shot quality of only 0.05 xG, highlighting their 
                continued struggles to create high-quality chances in the final third.
            </p>

            <p className = "mb-4 text-sm md:text-lg">
                Spurs have now collected seven points from a possible nine since the international break, 
                a run that has included trips to both Old Trafford and Stamford Bridge. There are encouraging 
                signs that the squad is adapting to De Zerbi's approach, with performances becoming 
                increasingly assured. Mathys Tel is one play I would like to highlight. After a difficult 
                start to the season and a clash with De Zerbi following the Everton game in September, 
                his display against Chelsea showed a player growing in confidence. His goal was the perfect 
                illustration of how a few positive results can transform the mood and belief within a squad.
            </p>

        </section>

        
        {/* Midfield Overload */}
        <section className="mb-12 mx-auto max-w-6xl">
            <h3 className="mb-6 text-2xl font-bold md:text-4xl">
                Midfield Overload
            </h3>

            <div className = "w-full mx-auto md:max-w-4xl">
                <img
                    src="/plots/match-reports/chelsea-spurs/overload.jpg"
                    alt="Spurs' midfield overload"
                    className="rounded-xl"
                />

                <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                    Image 1: Chelsea's man-to-man press with Maddison dropping into midfield to create 
                    a 3v2 overload. Lacroix is forced to drop deep to balance the midfield. 
                </p>
            </div>

            <p className = "mb-4 text-sm md:text-lg">
                A key factor in Spurs' success was their ability to consistently create numerical advantages 
                in midfield. Chelsea defended in a 4-4-2 shape, with Cole Palmer joining Morgan Rogers in the 
                first line of the press. Kinsky, alongside van de Ven and van Hecke, formed a 3v2 against this 
                front line, while Gray and Robertson positioned themselves wide to stretch Chelsea's midfield four.
            </p>

            <p className = "mb-4 text-sm md:text-lg">
                The key detail, particularly in the first half, was the intensity of Chelsea's man-to-man pressing. 
                Caicedo and Henderson stayed tight to Fernandes and Tonali, in an attempt to limit their ability 
                to progress the ball centrally. James Maddison was often the solution, dropping into midfield to 
                create a 3v2 overload, as shown in Image 1. This presented a dilemma for Chelsea's centre-backs: 
                follow Maddison into midfield and risk leaving a 3v3 in the final line, or hold their positions 
                and allow Spurs to progress through the numerical advantage. More often than not, Lacroix or 
                Colwill chose to track Maddison deep. However, quick combinations allowed Spurs to exploit the 
                resulting space and bypass the press, creating dangerous attacking transitions.
            </p>

            <p className = "mb-4 text-sm md:text-lg">
                Credit must also go to Spurs' wide players, whose individual qualities made this approach effective. 
                Kudus' ability to retain possession under pressure was crucial to beating the press, while Tel's 
                width and willingness to attack defenders provided an important outlet throughout the game. 
                Image 1 perfectly illustrates De Zerbi's principle of "baiting the press", in a passage of 
                play in where Spurs manipulated Chelsea's press to create a midfield overload before producing 
                a fantastic chance for Marmoush (0.22 xG), which he should have converted.
            </p>

            <p className = "mb-4 text-sm md:text-lg">
                Chelsea's aggressive pressing was a major factor in Spurs' first-half success, but their 
                approach changed after the interval. Credit must go to Xabi Alonso for the adjustment, 
                with Chelsea appearing more content to defend in their 4-4-2 shape rather than commit 
                as aggressively to the press. The number of Chelsea's defensive actions in the Spurs 
                half fell from 15 in the first half to eight in the second, supporting the observation 
                that their pressing intensity decreased.
            </p>

            <div className = "w-full mx-auto md:max-w-4xl">
                <img
                    src="/plots/match-reports/chelsea-spurs/second-half.jpg"
                    alt="Chelsea's press in the second half"
                    className="rounded-xl"
                />

                <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                    Image 2: Chelsea's less aggressive press in the second half, sitting in a compact
                    4-4-2 shape. 
                </p>
            </div>

            <p className = "mb-4 text-sm md:text-lg">
                Image 2 illustrates this change. Caicedo and Henderson remained tight to Tonali and Gallagher, 
                while Fernandes was allowed to drop deeper to receive possession. With Chelsea's midfield 
                maintaining its positions rather than aggressively following players into deeper areas, their 
                centre-backs were less frequently forced to step forward and address Spurs' overloads. This 
                helped preserve the defensive structure and provided greater protection across the back line.
            </p>

            <p className = "mb-4 text-sm md:text-lg">
                The adjustment appeared to have some success in limiting Spurs' attacking output. 
                Tottenham recorded 0.43 xG in the first half, compared with 0.31 after the break. 
                While other factors like the loss of Maddison to injury in the 51st may have contributed 
                to this, it once again shows how Spurs struggle to break down depper, more compact teams.
            </p>

        </section>

        
        {/* Spurs' Hybrid Press */}
        <section className="mb-12 mx-auto max-w-6xl">
            <h3 className="mb-6 text-2xl font-bold md:text-4xl">
                Spurs' Hybrid Pressing Structure
            </h3>

            <div className = "w-full mx-auto md:max-w-4xl">
                <img
                    src="/plots/match-reports/chelsea-spurs/hybrid-press.png"
                    alt="Spurs' Hybrid Pressing Structure"
                    className="rounded-xl"
                />

                <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                    Image 3: A diagram of Spurs' hybrid pressing structure.
                </p>
            </div>

            <p className = "mb-4 text-sm md:text-lg">
                Whereas Chelsea implemented an aggressive man-to-man press, 
                Spurs adopted a hybrid pressing structure that proved effective in 
                limiting Chelsea's ability to build from the back. Image 3 shows Chelsea's 4-3-3 
                shape during the first phase of build-up, with the fullbacks positioned wide and 
                Cole Palmer dropping into midfield to offer a passing option.
            </p>

            <p className = "mb-4 text-sm md:text-lg">
                The key detail was Mathys Tel's movement into midfield, creating a 4v3 numerical advantage for 
                Spurs in the centre of the pitch. This allowed Fernandes to track Palmer without leaving Spurs 
                vulnerable to an overload in midfield. However, the narrow structure also conceded space to 
                Chelsea's fullbacks, who were often available to receive possession in wider areas. Spurs 
                accounted for this by having Gray and Tel ready to press the fullbacks when the ball was 
                played out to them.
            </p>

            <p className = "mb-4 text-sm md:text-lg">
                Although this aggressive response could leave the Spurs back three defending a 3v3, it was a 
                risk they appeared comfortable taking. Chelsea lacked a recognised striker, reducing their 
                physical presence against the Spurs defenders when possession was played long. As a result, 
                the back three were generally able to deal with these direct balls and help Spurs regain 
                possession, limiting Chelsea's opportunities to bypass the press.
            </p>

            <p className = "mb-4 text-sm md:text-lg">
                Overall, Spurs' approach proved highly effective, restricting Chelsea to just 0.47 xG. 
                This represented Spurs' strongest defensive performance of the season so far and 
                demonstrated how their hybrid pressing structure could disrupt Chelsea's build-up 
                without consistently exposing the defensive line.
            </p>
        
        </section>

        {/* Corners */}
        <section className="mb-12 mx-auto max-w-6xl">
            <h3 className="mb-6 text-2xl font-bold md:text-4xl">
                Chelsea's Defensive Corners
            </h3>

            <div className = "w-full mx-auto md:max-w-4xl">
                <img
                    src="/plots/match-reports/chelsea-spurs/corner.jpg"
                    alt="Chelsea's shape from defensive corners"
                    className="rounded-xl"
                />

                <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                    Image 4: Chelsea leaving four players high during defensive corners. This left a 4v4 in the 
                    box with the possibility for a Spurs 2v1 from short corners.
                </p>
            </div>

            <p className = "mb-4 text-sm md:text-lg">
                Another interesting detail was Chelsea's approach to defending corners, which I think Spurs 
                could have exploited more effectively. As shown in Image 4, Chelsea left four players high 
                rather than committing their entire team to defending inside the penalty area. This approach 
                has been implemented by various Premier Legaue teams within the last few seasons due to the 
                rise in goals from set-pieces. By leaving players forward, the defending team forces the 
                opposition to retain players deeper to protect against counter-attacks. In theory this 
                reduces congestion in the penalty area, giving the goalkeeper more space to move off 
                their line and claim deliveries. This was a slightly unusual system for Chelsea to implemet, 
                given that Spurs has scored just one goal from set-pieces so far this season.
            </p>

            <p className = "mb-4 text-sm md:text-lg">
                However, I think Chelsea's approach actually created an opportunity for Spurs. With four 
                Chelsea players positioned high and an additional defender guarding the front post, 
                Spurs were left with a 4v4 in the main area of the box. Furthermore, bringing a 
                player short created the potential for a 2v1 in a wide area. If executed 
                effectively, this would allow Spurs settled possesion in Chlesea's final 
                third, with space to exploit in the box, beofre the Chelsea players could recover.
            </p>

            <p className = "mb-4 text-sm md:text-lg">
                Despite this opportunity, Spurs played only two of their six corners short. 
                But interestingly, Spurs' opening goal did come from a direct delivery into 
                the penalty area, demonstrating that the conventional approach remained 
                effective. Nevertheless, Chelsea's defensive set-up presented an 
                alternative route to creating dangerous attacking situations that 
                Spurs might have exploited more frequently.
            </p>

        </section>


        {/* Final Thoughts */}
        <section className="mb-12 mx-auto max-w-6xl">
            <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                Final Thoughts
            </h2>

            <p className = "mb-4 text-sm md:text-lg">
                Overall, this was a very encouraging performance that demonstrated how effective De Zerbi's 
                approach can be against teams that press aggressively. The key challenge remains whether
                he can adapt his system to overcome opponents who defend in a low block, where the 
                space available to exploit is considerably more limited.
            </p>

            <p className ="mb-4 text-sm md:text-lg">
                Nevertheless, this result should provide a significant psychological boost to the squad. 
                Performances against the likes of Manchester United and Everton, where Spurs played well
                but failed to take all three points, will have been frustrating. But to travel to 
                Stamford Bridge, execute De Zerbi's ideas so effectively and secure a convincing 
                victory should reinforce the players' belief in the system.
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