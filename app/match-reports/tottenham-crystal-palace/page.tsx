import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function SprursPalace() {
    return (

        <main className="bg-gradient-to-b from-[#7678A8] via-[#40425C] to-[#272833] min-h-screen tracking-wide leading-tight px-12 py-2">
        
            {/* Navigation */}
            <Navbar />

            
            {/* Title*/}
            <section className="mb-12 mx-auto max-w-6xl">
                
                <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-6xl">
                    Tottenham Hotspur 2 - 0 Crystal Palace
                </h1>

                <p className="mb-4 text-sm font-medium tracking-[0.25em] text-gray-400 md:text-md">
                    PREMIER LEAGUE | GW9 | 31.10.2026
                </p>

            </section>


            {/* Average Positions */}
            <section className="mb-8 mx-auto max-w-6xl">
                <div className="grid gap-4 md:grid-cols-2">

                    <div>
                        <iframe
                        src="/plots/match-reports/spurs-palace/Tottenham Hotspur_average_positions.html"
                        title="Spurs average positions"
                        className="h-[380px] w-full rounded-xl border-0"
                        />
                    </div>

                    <div>
                        <iframe
                        src="/plots/match-reports/spurs-palace/Crystal Palace_average_positions.html"
                        title="Palace average player positions"
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
                        src="/plots/match-reports/spurs-palace/momentum_graph.png"
                        alt="Match momentum graph"
                        className="w-full rounded-xl"
                        />
                    </div>

                    <div>
                        <img
                        src="/plots/match-reports/spurs-palace/xg.png"
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
                        src="/plots/match-reports/spurs-palace/Tottenham Hotspur_shot_map.html"
                        title="Spurs shot map"
                        className="h-[380px] w-full"
                        />
                    </div>

                    <div>
                        <iframe
                        src="/plots/match-reports/spurs-palace/Crystal Palace_shot_map.html"
                        title="Palace shot map"
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
                    Spurs put on a dominant display against a 10-man Crystal Palace, securing a third 
                    consecutive league win for the first time since February 2025. Mateta's dismissal 
                    in the 13th minute led to a largely one-sided affair, with Archie Gray putting 
                    Spurs ahead before Jan Paul van Hecke doubled their lead midway through the second 
                    half. Regardless of the circumstances, it was an important victory for Spurs, 
                    moving them up to ninth in the table.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    From a tactical perspective, the game was fundamentally altered by Mateta's red card, 
                    which saw Crystal Palace retreat into a deep 5-3-1 low block (15.1 OPPDA), conceding 79% 
                    of possession to Spurs. De Zerbi was quick to react, seemingly instructing 
                    Archie Gray to adopt a higher position in the 15th minute. This was despite Gray
                    beginning the match as part of a back three, in a similar diamond midfield sysetm that Spurs
                    had used against Coventry. With a numerical advantage, Gray was able to push higher up the pitch,
                    helping to create overloads in wide areas, while build-up initiated from a back two of van Hecke and
                    van de Ven.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    One of the most impressive aspects of Spurs' performance was the effectiveness of their 
                    counter-pressing. Their numerical advantage allowed them to commit more players higher 
                    up the pitch, with limited threat of a Palace counter-attack. This helped to 
                    compress the space available to Palace when they regained possession. With few
                    available outlets to progress the ball and Spurs well positioned to counter-press, they were able 
                    to recover possession quickly. This was a key factor in their dominance and control of the game, 
                    reflected in their extraordinary field tilt of 94.3%.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    But the most exciting moment of the match came in the 88th minute, when 18-year-old Luca 
                    Williams-Barnett came on to make his Premier League debut. Williams-Barnett is a 
                    name many Spurs fans will already be familiar with, having established himself 
                    as one of the most promising prospects to emerge from the academy in recent years. 
                    He spent last season with the U21s, scoring six goals and providing five assists in 
                    just ten Premier League 2 appearances, earning his promotion to the first team at the 
                    beginning of this season. His mazy dribble past three defenders, before putting the 
                    ball on a plate for Kudus, offered a glimpse of the excitement he could bring to the first 
                    team. It was a fitting way to mark his debut and an encouraging sign of the talent 
                    emerging from Spurs' academy.
                </p>

            </section>

            {/* Half-time change*/}
            <section className="mb-12 mx-auto max-w-6xl">
                <h3 className="mb-6 text-2xl font-bold md:text-4xl">
                    De Zerbi's Half-Time Change
                </h3>
                
                <p className="mb-4 text-sm md:text-lg">
                    While the game felt as though it was only ever going in one direction 
                    following Mateta's dismissal, I think De Zerbi made one particularly important tactical 
                    decision that helped Spurs become more effective in possession. In the first half, Spurs 
                    created just 0.66 xG, with their breakthrough coming from an Archie Gray header. 
                    Despite scoring, Gray was substituted at half-time for Pedro Porro, and I think Figures 1 
                    and 2 help explain the tactical reasoning behind this change. De Zerbi later 
                    explained that Gray's yellow card was the reason for the substitution, but I think the 
                    change also offered Spurs an important tactical advantage.
                </p>

                
                {/* xT maps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">

                    {/* Gray xT map */}
                    <figure className="min-w-0">
                        <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                            <iframe
                                src="/plots/match-reports/spurs-palace/gray-xt.html"
                                title="Archie Gray xT map"
                                className="absolute inset-0 w-full h-full border-0"
                                loading="lazy"
                            />
                        </div>

                        <figcaption className="mt-2 mb-4 text-xs md:text-sm text-gray-400">
                        Figure 1: Archie Gray's xT passing map against Crystal Palace.
                        </figcaption>
                    </figure>

                    {/* Porro xT map */}
                    <figure className="min-w-0">
                        <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                            <iframe
                                src="/plots/match-reports/spurs-palace/porro-xt.html"
                                title="Pedro Porro xT map"
                                className="absolute inset-0 w-full h-full border-0"
                                loading="lazy"
                            />
                        </div>

                        <figcaption className="mt-2 mb-4 text-xs md:text-sm text-gray-400">
                        Figure 2: Pedro Porro's xT passing map against Crystal Palace.
                        </figcaption>
                    </figure>

                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    Gray has developed an ability at right-back to make penetrating underlapping runs, disrupting 
                    the opposition's defensive structure and exploiting space in behind. However, this movement 
                    is most effective when there is space to attack, something that was largely unavailable 
                    against Palace's deep defensive block following the red card. Furthermore, while Gray is an 
                    effective ball carrier and possesses good positional awareness, his passing is not necessarily 
                    his strongest attribute when it comes to unlocking a compact defence. He recorded -0.003 xT 
                    from passing in the first half, suggesting limited threat through his distribution. 
                    De Zerbi may therefore have recognised that Gray's influence on the game was likely to be 
                    limited under the circumstances.
                </p>
                
                <div className = "w-full mx-auto md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-palace/porro-1.jpg"
                        alt="Spurs' midfield overload"
                        className="rounded-xl"
                    />

                    <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                        Image 1: Pedro Porro's passing ability, allows him to play direct into the feet of Solanke, greating
                        a goal scoring opportunity for Spurs.
                    </p>
                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    By contrast, Pedro Porro offered a different dimension. One of the league's most accomplished 
                    passers, his ability to pick out progressive passes and deliver the ball into dangerous areas 
                    was particularly valuable against a side defending so deep. He demonstrated this quality in 
                    the second half, contributing 0.177 xT from passing. For example, Figure 1 shows an excellent 
                    pass into Solanke's feet, creating a shooting opportunity worth 0.09 xG. Passes into the area from
                    this right half-space are something Porro specialises in, and a key tool for breaking down low-blocks.
                </p>            
                                
                <div className = "w-full mx-auto md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-palace/porro-2.jpg"
                        alt="Spurs' midfield overload"
                        className="rounded-xl"
                    />

                    <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                        Image 2: Pedro Porro's movement to exploit space behind Palace's defensive line. 
                    </p>
                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    However, Porro's contribution wasn't limited to his distribution. His spatial awareness and 
                    ability to manipulate defenders through movement also proved valuable. While Gray has shown 
                    improvements in this area, Porro is particularly effective at identifying and exploiting 
                    spaces between defensive lines. This is demonstrated in Figure 2, where he initially 
                    positions himself in the right half-space before making a double movement. This draws 
                    Canvot out of position, allowing Porro to subsequently run in behind and meet van Hecke's 
                    pass, creating a shooting opportunity worth 0.05 xG.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Spurs were considerably more effective in the second half, creating 2.81 xG compared to 
                    just 0.66 in the first. While Porro was certainly not the sole reason for this improvement, 
                    his introduction provided Spurs with a different attacking dimension, better suited to 
                    exploiting Palace's deep defensive block. It was an intelligent adjustment from De Zerbi, 
                    recognising that the qualities required to break down a low block were different from 
                    those needed earlier in the game.
                </p>

            </section>
            

            {/* Final Thoughts */}
            <section className="mb-12 mx-auto max-w-6xl">
                <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                    Final Thoughts
                </h2>

                <p className = "mb-4 text-sm md:text-lg">
                    While this was statistically Spurs' best performance of the season so far, 
                    recording 79% possession and a net xG difference of 3.33, the circumstances 
                    following Mateta's dismissal in the 13th minute mean that too much shouldn't 
                    be read into the numbers. That being said, you can only play what's in front 
                    of you, and Spurs approached the game with confidence and control, making the 
                    most of their numerical advantage. With three consecutive wins under their 
                    belt, the squad will be feeling increasingly confident heading into their 
                    final fixture at Elland Road next weekend, before the international break.          
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