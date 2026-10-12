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
                Tottenham Hotspur 2-3 Aston Villa
                </h1>

                <p className="mb-4 text-sm font-medium tracking-[0.25em] text-gray-400 md:text-md">
                PREMIER LEAGUE | GW5 | 19.09.2026
                </p>

            </section>
            

            {/* Average Positions */}
            <section className="mb-8 mx-auto max-w-6xl">
                <div className="grid gap-4 md:grid-cols-2">

                    <div>
                        <iframe
                        src="/plots/match-reports/spurs-villa/Tottenham Hotspur_average_positions.html"
                        title="Spurs average positions"
                        className="h-[380px] w-full rounded-xl border-0"
                        />
                    </div>

                    <div>
                        <iframe
                        src="/plots/match-reports/spurs-villa/Aston Villa_average_positions.html"
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
                        src="/plots/match-reports/spurs-villa/momentum_graph.png"
                        alt="Match momentum graph"
                        className="w-full rounded-xl"
                        />
                    </div>

                    <div>
                        <img
                        src="/plots/match-reports/spurs-villa/xg.png"
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
                        src="/plots/match-reports/spurs-villa/Tottenham Hotspur_shot_map.html"
                        title="Spurs shot map"
                        className="h-[380px] w-full"
                        />
                    </div>

                    <div>
                        <iframe
                        src="/plots/match-reports/spurs-villa/Aston Villa_shot_map.html"
                        title="Everton shot map"
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
                    Spurs head into the international break bottom of the Premier League following 
                    a home defeat to Aston Villa. It was another encouraging start, but some 
                    impressive shot-stopping from Zion Suzuki kept Spurs at bay. Once again, it 
                    felt as though the players' confidence began to fade, with individual errors, 
                    an inability to deal with long balls and an absolute wonder goal leaving Spurs 
                    3-0 down. There was however a welcome show of character as Spurs finally found the net, twice,
                    after more than seven hours without a goal in the league.
                </p>

            </section>


            {/* Out of Possession */}
            <section className="mb-12 mx-auto max-w-6xl">
                <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                    Out of Possession
                </h2>

                <p className = "mb-4 text:sm md:text-lg">
                   The slow tempo of Spurs' possession, combined with Aston Villa's low block (12.6 OPPDA), 
                   meant that Spurs once again struggled to generate high-quality chances. In their usual 3-2-5 
                   structure, Spurs attempted to access the half-spaces, but with varying degrees of success. But, the structure
                   of the team of the team might not be the reason for the lack of attacking threat, but rather the inabilty
                   to exploit the spaces that the structure creates.
                </p>

                <div className = "w-full mx-auto md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-villa/right side.jpg"
                        alt="Spurs Right Side"
                        className="rounded-xl"
                    />

                    <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                        Image 1: Spurs' attacking dymnamics on the right side of the pitch created a large gap
                        in Aston Villa's back line. 
                    </p>
                </div>

                <p className = "mb-4 text:sm md:text-lg">
                    In Image 1, we see Spurs' familiar attacking set-up, with Sávio holding the width while 
                    Pedro Porro and Mateus Fernandes rotate between right-back and the right half-space. 
                    Unusually, however, Ruggeri marked Sávio aggressively in the opening stages, leaving a 
                    significant gap between himself and Tyrone Mings.
                </p>

                <p className = "mb-4 text:sm md:text-lg">
                    Spurs attempted to exploit this space through rotations between Fernandes and Porro, 
                    supported by Van Hecke's passing ability. The problem was that these players, along with 
                    Sávio out wide, consistently looked to receive the ball to feet. Against Villa's compact 
                    defensive structure, this allowed the defenders to close down the receiving player and 
                    contest possession before Spurs could make meaningful progress. There was little attempt 
                    to run in behind and exploit the space between Mings and Ruggeri, a potentially far more dangerous
                    scenario.
                </p>

                <p className = "mb-4 text:sm md:text-lg">
                    That changed when Archie Gray came onto the pitch. His blindside run between Ruggeri and Mings in the 21st minute
                    created precisely the kind of threat that had been missing, leading to a chance that Suzuki 
                    saved brilliantly. This pattern of slow possession and a preference for receiving to feet have made it difficult 
                    for Spurs to turn territorial control into genuinely dangerous chances so far this seasons.
                </p>

                <div className = "w-full mx-auto md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-villa/left side.jpg"
                        alt="Spurs Side Side"
                        className="rounded-xl"
                    />

                    <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                        Image 2: Spurs' attacking dymnamics on the left side of the pitch leading to a disallowed goal.
                    </p>
                </div>
               
                <p className = "mb-4 text:sm md:text-lg">
                    Image 2 shows a different dynamic on the left. Here, Marmoush looks to find space in the 
                    pockets, while Robertson holds the width and Tonali offers an option in midfield. When 
                    Cash follows Marmoush into the half-space, another gap opens between Lindelöf and McGinn, 
                    who is tracking back. The key difference is Robertson's willingness to run in behind, 
                    combined with Tonali's penetrating pass. This forces Villa's defenders to turn and run 
                    towards their own goal and, despite Robertson ultimately being flagged offside, the move 
                    resulted in Spurs putting the ball in the net.
                </p>
                
                <p className = "mb-4 text:sm md:text-lg">
                    This was arguably one of Spurs' most dangerous attacking sequences of the game. It 
                    demonstrated how a greater willingness to attack space in behind can create more 
                    threatening situations, especially when teams have tended to resist pressing Spurs so far this season.
                </p>
                
                <p className = "mb-4 text:sm md:text-lg">
                    A similar principle was evident in Spurs' first goal, which came just minutes after Conor Gallagher replaced Tonali. 
                    Gallagher's run into the box allowed him to meet Kudus' delivery for a simple tap-in. It was the kind of aggressive, 
                    forward movement that Spurs have too often lacked from their deeper midfielders, with Tonali and Bentancur 
                    rarely making comparable runs into the penalty area.
                </p>

                <p className = "mb-4 text:sm md:text-lg">
                    The second goal offered another interesting insight into Spurs' attacking patterns. Robertson delivered an 
                    outswinging free-kick towards Van Hecke's back-post run, a routine Spurs had attempted earlier in the 64th minute, 
                    only for Suzuki to collect the delivery. They had also tried the same routine against Everton 
                    five minutes into that match, where it led to another opportunity for Van Hecke. 
                    The repetition suggests this is a rehearsed set-piece pattern, making it particularly 
                    satisfying to see it finally produce a goal.
                </p>
            </section>


            {/* Out of Possession */}
            <section className="mb-12 mx-auto max-w-6xl">
                <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                    Out of Possession
                </h2>

                <p className = "mb-4 text:sm md:text-lg">
                    While Spurs did concede three goals, the overall defensive performance was not necessarily as alarming as 
                    the scoreline suggests. The first goal followed a Robertson error as he attempted to keep the ball in play, 
                    while the third came from a spectacular Emiliano Buendía strike worth just 0.02 xG. The more concerning aspect 
                    of the performance was Spurs' inability to deal with Villa's long balls.
                </p>


                <div className = "w-full mx-auto md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-villa/press.jpg"
                        alt="Spurs Pressing"
                        className="rounded-xl"
                    />

                    <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                        Image 3: Spurs' man-to-man press when the ball went back to Zion Suzuki.
                    </p>
                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    In the opening stages, Spurs implemented an aggressive man-to-man press when the ball was played back to Zion Suzuki, 
                    as shown in Image 3. This proved effective in forcing Villa towards their left-hand side, where Mings and Ruggeri appeared 
                    uncomfortable under pressure. Spurs won possession back high up the pitch on several occasions, demonstrating the potential 
                    rewards of their aggressive approach.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    However, around the 30th minute, Villa began to bypass the press more frequently, opting to play long rather than build from the back. 
                    Whether this was a deliberate tactical adjustment from Unai Emery or an instinctive response 
                    from the players is difficult to say, but it proved effective. A key factor was Suzuki's 
                    distribution.
                </p>

                <div className = "w-full mx-auto md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-villa/suzuki_pass_map.png"
                        alt="Suzuki passes"
                        className="rounded-xl"
                    />

                    <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                        Figure 1: Zion Suzuki's pass map from the first 30 minutes compared to the remainder of the match.
                    </p>
                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    Figure 1 compares Suzuki's pass map from the opening 30 minutes with the remainder of the 
                    match. There was a clear shift in his decision-making with 38% of his passes in the first 30 
                    minutes played into Spurs' half (6/16), compared to 63% for the remainder of the game 
                    (17/27). Of those 17 passes into Spurs' half after the opening 30 minutes, 
                    only six were successful. But despite this low completion rate, Villa were frequently able to 
                    contest and recover the resulting second balls, exploiting the space left behind by Spurs' 
                    aggressive press. Van Hecke and Van de Ven also struggled to deal with Nicolas Jackson's 
                    physicality and movement, a weakness that was directly exposed in Villa's second goal.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    This is an issue De Zerbi will need to address. The benefits of an aggressive press are clear as 
                    it can force turnovers in dangerous areas and create immediate scoring opportunities. However, 
                    when opponents bypass that press, the space left behind can leave the defence exposed. If 
                    Spurs continue to struggle with long balls and second-ball situations, 
                    opposition managers may increasingly look to exploit this vulnerability.
                </p>

            </section>


            {/* Out of Possession */}
            <section className="mb-12 mx-auto max-w-6xl">
                <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                    Final Thoughts
                </h2>

                <p className = "mb-4 text-sm md:text-lg">
                    This will be a difficult result for De Zerbi and his team to digest, particularly given 
                    that Spurs recorded the higher xG (1.58 to Villa's 1.26). Heading into the international 
                    break bottom of the table, with just two points from their opening five games, will only 
                    add to the frustration.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    However, Spurs have finally managed to find the back of the net and there are encouraging 
                    signs in the way De Zerbi has structured the team. The underlying numbers suggest Spurs' 
                    league position may not fully reflect their performances, with Opta's expected table placing 
                    them 13th. While these metrics cannot guarantee a reversal of fortunes, there are 
                    reasons to remain optimistic. If Spurs can translate their possession into more dangerous 
                    chances in the final third, I believe this team has the potential to turn its season around.
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