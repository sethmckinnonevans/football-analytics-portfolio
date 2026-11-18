import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function LeedsSpurs() {
    return (

        <main className="bg-gradient-to-b from-[#7678A8] via-[#40425C] to-[#272833] min-h-screen tracking-wide leading-tight px-12 py-2">
        
            {/* Navigation */}
            <Navbar />

            
            {/* Title*/}
            <section className="mb-12 mx-auto max-w-6xl">
                
                <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-6xl">
                    Leeds United 1-0 Tottenham Hotspur
                </h1>

                <p className="mb-4 text-sm font-medium tracking-[0.25em] text-gray-400 md:text-md">
                    PREMIER LEAGUE | GW10 | 07.11.2026
                </p>

            </section>


            {/* Average Positions */}
            <section className="mb-8 mx-auto max-w-6xl">
                <div className="grid gap-4 md:grid-cols-2">

                    <div>
                        <iframe
                        src="/plots/match-reports/leeds-spurs/Leeds United_average_positions.html"
                        title="Leeds average positions"
                        className="h-[380px] w-full rounded-xl border-0"
                        />
                    </div>

                    <div>
                        <iframe
                        src="/plots/match-reports/leeds-spurs/Tottenham Hotspur_average_positions.html"
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
                        src="/plots/match-reports/leeds-spurs/momentum_graph.png"
                        alt="Match momentum graph"
                        className="w-full rounded-xl"
                        />
                    </div>

                    <div>
                        <img
                        src="/plots/match-reports/leeds-spurs/xg.png"
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
                        src="/plots/match-reports/leeds-spurs/Leeds United_shot_map.html"
                        title="Leeds shot map"
                        className="h-[380px] w-full"
                        />
                    </div>

                    <div>
                        <iframe
                        src="/plots/match-reports/leeds-spurs/Tottenham Hotspur_shot_map.html"
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
                    Spurs travelled to Elland Road this weekend on the back of three successive wins, facing a 
                    Leeds side that hadn't won any of their previous five Premier League matches. However, 
                    despite the contrasting recent form, it was Leeds who emerged as the dominant force in 
                    a match where Spurs struggled creatively, generating just 0.72 xG.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    I believe a large part of this can be attributed to Leeds' pressing structure, 
                    which disrupted the way Spurs typically look to build up and progress the ball. 
                    Consequently, despite enjoying 62% of possession, Spurs struggled to exert the 
                    same level of control we've seen in recent weeks. The match momentum graph 
                    supports this observation, highlighting how possession didn't necessarily 
                    translate into periods of sustained attacking pressure.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Spurs will therefore head into the international break following their worst performance since 
                    the opening-day defeat against Brentford. It's certainly not the feeling you want 
                    going into a two-week break, particularly after building some momentum in recent weeks. 
                    However, sitting 11th in the table, there is still plenty of opportunity to build on 
                    that earlier form. With the next three fixtures against Ipswich, Sunderland and Fulham, 
                    Spurs have a chance to regain their momentum before hosting Arsenal in the 
                    North London Derby at the start of December.
                </p>

            </section>

            {/* Leeds' Press */}
            <section className="mb-12 mx-auto max-w-6xl">
                <h3 className="mb-6 text-2xl font-bold md:text-4xl">
                    Leeds' Pressing Structure
                </h3>
                
                <p className="mb-4 text-sm md:text-lg">
                    One thing that was immediately apparent from Leeds' approach was their focus on preventing 
                    Spurs from building out from the back. Daniel Farke usually lines his team up in a 3-4-2-1 
                    shape, with Calvert-Lewin as a lone striker. However, today he opted for a 3-4-1-2, employing 
                    Felix Nmecha as a second striker and Sean Longstaff in a more aggressive midfield role. I 
                    believe the reasoning behind this change was to allow Leeds to press more aggressively in 
                    the first phase, limiting Spurs' ability to play out from the back and, consequently, 
                    their control of the game.
                </p>

                {/* Leeds' front three*/}
                <div className = "w-full mx-auto md:max-w-4xl">
                    <img
                        src="/plots/match-reports/leeds-spurs/front-three.jpg"
                        alt="Leeds' front three"
                        className="rounded-xl"
                    />

                    <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                        Image 1: Leed's front three press in the first phase.
                    </p>
                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    We have seen Spurs play through an initial two-man press many times this season, 
                    notably away at Manchester United. Aware of this, Leeds instead pressed with 
                    three players, as illustrated in Image 1. Sean Longstaff's tight marking of 
                    Mateus Fernandes prevented him from creating a numerical overload in Spurs' 
                    favour. Once the ball was forced back to Kinsky, Calvert-Lewin pressed 
                    intelligently, using his positioning to cut off the passing lane into Van de 
                    Ven and forcing Spurs to play long.
                </p>
                
                <div className = "w-full mx-auto md:max-w-4xl">
                    <img
                        src="/plots/match-reports/leeds-spurs/leeds-press.png"
                        alt="Leeds' structure"
                        className="rounded-xl"
                    />

                    <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                        Image 2: Leeds' pressing structure visualised. 
                    </p>
                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    This pressing structure, which prevented Spurs from creating an overload in the first phase, 
                    is further illustrated in Image 2. Centrally, Leeds pressed man-to-man, preventing the 
                    Spurs centre-backs from receiving the ball with time and space. Spurs' fullbacks remained
                    wide to stretch the opposition, but Bogle and Gudmundsson were ready to jump onto either 
                    player as soon as the ball was played out wide, effectively trapping Spurs in these wide areas. 
                    With few alternative passing options, Kinsky was frequently forced to play long balls towards 
                    the front three, which was precisely what Leeds wanted.
                </p>            
                                
                <div className = "w-full mx-auto md:max-w-4xl">
                    <img
                        src="/plots/match-reports/leeds-spurs/longballs.jpg"
                        alt="Gap from long balls"
                        className="rounded-xl"
                    />

                    <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                        Image 3: The gap between Spurs' front three and midfield three when the ball was sent long, meant
                        the team was poorly positioned to compete for second balls.
                    </p>
                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    Leeds also employed a man-to-man approach across their back line, confident in their ability to 
                    deal with these long balls given their aerial advantage against the Spurs front three. 
                    Indeed, Leeds won 55% of aerial duels. However, from a Spurs perspective, the problem wasn't 
                    necessarily an inability to win the initial aerial duels. As illustrated in Image 3, the 
                    Spurs midfield dropped so deep to provide support during the build-up that, when the ball 
                    eventually went long, they were poorly positioned to compete for second balls. Consequently, 
                    even when Spurs managed to win the initial header, they struggled to retain possession, 
                    allowing Leeds to regain control. This demonstrates just how effective the pressing 
                    structure was, as Leeds were not only forcing Spurs into long balls but were also well-positioned 
                    to recover possession afterwards.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    I thought the introduction of Dominic Solanke following Mathys Tel's injury might provide a 
                    solution, particularly given his ability to offer a physical presence up front. 
                    However, his struggles to hold the ball up meant that this did little to change the situation.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    I believe De Zerbi did address some of these issues at half-time, dropping the fullbacks 
                    deeper during the first phase of build-up. This meant Leeds' wing-backs had further to 
                    travel to engage the ball, giving the Spurs fullbacks more time and space to receive 
                    possession. However, despite this adjustment, Spurs continued to struggle creatively. 
                    The compact nature of Leeds' back five restricted the opportunities to exploit the half-spaces, 
                    an area De Zerbi typically looks to utilise in his attacking structure.
                </p>
            </section>
            

            {/* Final Thoughts */}
            <section className="mb-12 mx-auto max-w-6xl">
                <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                    Final Thoughts
                </h2>

                <p className = "mb-4 text-sm md:text-lg">
                    This was undoubtedly Spurs' worst performance since the opening day, making it a 
                    particularly sour note on which to head into the international break. I think 
                    De Zerbi has to take some responsibility, particularly with his team selection. 
                    Starting Archie Gray as the most advanced midfielder didn't seem like the right 
                    decision, especially against a Leeds side that were so effective at restricting 
                    the space available between the lines. However, it would be unfair to place all 
                    the blame on the manager. Several of Spurs' attacking players were simply not at 
                    the races today, although credit must also go to Leeds for the way they disrupted 
                    Spurs' build-up and restricted their attacking opportunities.         
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Regardless, Spurs now have time to reflect on this performance over the international 
                    break before Ipswich visit the Tottenham Hotspur Stadium. By then, the likes of Sávio, 
                    Bergvall and Mudryk could also be back from injury, providing De Zerbi with some welcome 
                    additional options. Hopefully, Spurs can put this disappointing performance behind them 
                    and return with renewed confidence for what is an important run of fixtures.
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