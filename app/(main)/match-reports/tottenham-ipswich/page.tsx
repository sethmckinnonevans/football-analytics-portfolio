import Link from "next/link";
import MatchReportFigures from "@/components/match-reports/match-report-figures";

export default function LeedsSpurs() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground px-5 sm:px-8 lg:px-12 py-2">


        {/* Report Header */}
        <section className="mt-4 mb-12 mx-auto max-w-6xl">
            <h1 className="mb-2 text-3xl font-bold md:text-5xl">
                Tottenham Hotspur 2-0 Ipswich Town
            </h1>

            <p className="text-xs md:text-sm font-medium tracking-[0.25em] text-accent">
                PREMIER LEAGUE | GW11 | 21.11.2026
            </p>
        </section>


        {/* Match Figures */}
        <MatchReportFigures
            slug="spurs-ipswich"
            homeTeam="Tottenham Hotspur"
            awayTeam="Ipswich Town"
        />


        {/* Overview */}
        <section className="mb-16 mx-auto max-w-6xl">

            <div className="mb-6">
                <h2 className="mb-2 text-2xl font-bold md:text-4xl">
                    Overview
                </h2>

                <p className="text-xs font-medium tracking-[0.25em] text-accent">
                    MATCH SUMMARY
                </p>
            </div>

            <p className="mb-4 text-sm leading-relaxed md:text-lg">
                A dominant display from Spurs makes it three consecutive wins in their last three home games, 
                equalling their total number of home victories from last season. Exploiting Ipswich's 
                defensive structure effectively, Spurs repeatedly created dangerous situations from wide 
                areas, generating a total of 2.65 xG. Equally impressive was their defensive display, 
                which effectively neutralised Ipswich's danger man, Julio Enciso, and restricted the 
                visitors to a handful of low-quality chances.
            </p>

            <p className="mb-4 text-sm leading-relaxed md:text-lg">
                But it was Luca Williams-Barnett who stole the show. Making his first senior start, he became 
                the third-youngest Premier League goalscorer in Spurs' history (behind Andy Turner and Gareth Bale), 
                as well as the second-youngest player to both score and assist in a Premier League match 
                (behind Michael Owen). His constant willingness to drive at the opposition provided a 
                different dynamic down the left flank, causing Ipswich all sorts of problems. 
                In contrast to the tentative approach of Spurs' other wingers, his directness provided a 
                breath of fresh air, and he has certainly made a compelling case for a regular place in the side.
            </p>

        </section>


        {/* Exploiting Ipswich's Structure */}
        <section className="mb-16 mx-auto max-w-6xl">

            <div className="mb-6">
                <h2 className="mb-2 text-2xl font-bold md:text-4xl">
                    Exploiting Ipswich's Defensive Structures
                </h2>

                <p className="text-xs font-medium tracking-[0.25em] text-accent">
                    ATTACKING ANALYSIS
                </p>
            </div>

            <p className="mb-6 text-sm leading-relaxed md:text-lg">
                Ipswich struggled out of possession to find a structure that effectively limited Spurs' 
                attacking threat. Ouattara's dynamic role allowed Ipswich to switch between a 
                5-3-2 and a 4-4-2 throughout the match. However, Spurs were able to exploit both structures, 
                albeit in different ways.
            </p>

            <figure className="mx-auto mb-6 w-full md:max-w-4xl">
                <img
                    src="/plots/match-reports/spurs-ipswich/wide-overload.jpg"
                    alt="Wide Overload"
                    className="w-full rounded-xl"
                />

                <figcaption className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
                    Image 1: Spurs manipulate Ipswich's narrow midfield three, drawing them to the left side, before 
                    Fernandes switches play to Porro, leading to the opening goal.
                </figcaption>
            </figure>

            <figure className="mx-auto mb-8 w-full md:max-w-4xl">
                <img
                    src="/plots/match-reports/spurs-ipswich/532-press.gif"
                    alt="5-3-2 shape gif"
                    className="w-full rounded-xl"
                />

                <figcaption className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
                    GIF 1: Ipswich 5-3-2 shape created space in wide areas, which Spurs were able to exploit
                    with quick switches of play.
                </figcaption>
            </figure>

            <p className="mb-6 text-sm leading-relaxed md:text-lg">
                In the opening stages, Ipswich set up in a 5-3-2, with Ouattara operating more as a right 
                wing-back. This provided additional defensive cover against Spurs' front three, 
                allowing Ipswich to double up on the wingers. However, it left just three players in 
                a narrow midfield, conceding space outside the block. With Udogie positioned slightly 
                deeper in build-up, the distance Ouattara had to cover to press him was considerable, 
                allowing the Spurs defender time and space on the ball. By drawing Ipswich across to the 
                left, while Porro remained high and wide on the right, Spurs were able to create large 
                spaces to exploit through quick switches of play. This pattern is demonstrated in Figure 1, 
                with Spurs exploiting this weakness to create the opening goal, as shown in Image 1.
            </p>

            <figure className="mx-auto mb-6 w-full md:max-w-4xl">
                <img
                    src="/plots/match-reports/spurs-ipswich/ipswich-4-4-2.jpg"
                    alt="Ipswich 4-4-2"
                    className="w-full rounded-xl"
                />

                <figcaption className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
                    Image 2: Ipswich transitioned into a 4-4-2 shape, providing better cover in midfield, and 
                    limiting the space in wide areas. Ouattara's higher starting position means there is less distance
                    to press Udogie, affording him less time on the ball.
                </figcaption>
            </figure>

            <p className="mb-6 text-sm leading-relaxed md:text-lg">
                Ipswich subsequently transitioned into a 4-4-2, with Ouattara occupying a higher 
                starting position, as shown in Image 2. This reduced the distance required to 
                press Udogie, allowing him less time on the ball. It also placed less strain on 
                the midfield, as the distances players had to cover were shorter, conceding less 
                space around the outside of the block. However, this came at the expense of defensive 
                cover in the back line and, significantly, left Luca Williams-Barnett isolated against 
                Furlong. Through slick combination play, Spurs were able to progress down the left, 
                creating opportunities for Williams-Barnett to drive directly at Furlong. This proved 
                particularly problematic for Ipswich, with the winger causing a flurry of chances around the 
                45th minute.
            </p>

            <figure className="mx-auto mb-6 w-full md:max-w-4xl">
                <img
                    src="/plots/match-reports/spurs-ipswich/madison-space.jpg"
                    alt="Maddison space"
                    className="w-full rounded-xl"
                />

                <figcaption className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
                    Image 3: Ipswich revert to a 5-3-2 shape to provide better protection against Williams-Barnett. This 
                    sretched Ipswich's midfield three, creating a pocket of space for James Maddison.
                </figcaption>
            </figure>

            <p className="mb-6 text-sm leading-relaxed md:text-lg">
                Recognising the problems Williams-Barnett was causing, Gary O'Neil reverted to the 5-3-2 
                structure at the beginning of the second half. This allowed Ouattara to provide additional 
                defensive cover for Furlong against Williams-Barnett, as seen in Image 3. However, this once 
                again created problems elsewhere. With Lukic pushing aggressively onto Udogie, a pocket 
                of space opened up for James Maddison, who began to exert an increasing influence on the game 
                in the second half. Ultimately, Spurs' second goal also came down this flank, prompting 
                O'Neil to make a triple substitution and revert to the 4-4-2. This adjustment helped shore up 
                Ipswich defensively for the remainder of the game.
            </p>

        </section>



        {/* Nullifying Ipswich's Attacking Threat*/}
        <section className="mb-16 mx-auto max-w-6xl">

            <div className="mb-6">
                <h2 className="mb-2 text-2xl font-bold md:text-4xl">
                    Nullifying Ipswich's Attacking Threat
                </h2>

                <p className="text-xs font-medium tracking-[0.25em] text-accent">
                    DEFENSIVE ANALYSIS
                </p>
            </div>

            <figure className="mx-auto mb-6 w-full md:max-w-4xl">
                <img
                    src="/plots/match-reports/spurs-ipswich/spurs-shape.jpg"
                    alt="Maddison space"
                    className="w-full rounded-xl"
                />

                <figcaption className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
                    Image 4: Spurs' 4-1-4-1 shape, allowing Mateus Fernandes to track Julio Enciso.
                </figcaption>
            </figure>

            <p className="mb-6 text-sm leading-relaxed md:text-lg">
                Spurs adopted a slightly different defensive structure, setting up in a 4-1-4-1 for one key 
                reason: Julio Enciso. Ipswich's focal point and chief creative threat, Enciso leads the 
                side for expected assists per 90, shots per 90, key passes per 90 and successful dribbles 
                per 90. To negate this threat, Mateus Fernandes was clearly instructed to remain tight to 
                the Paraguayan, as demonstrated in Image 4. With Fernandes shadowing him, Enciso's ability to recieve
                the ball in dangerous areas between the lines was limited, causing him to drop deep or wide to recieve the ball
                in less threatening positions.
            </p>

            <p className="mb-6 text-sm leading-relaxed md:text-lg">
                Fernandes executed this role superbly. Enciso was restricted to four speculative efforts from 
                outside the box, managing just one key pass and creating no chances. Consequently, 
                Ipswich struggled to make any meaningful inroads in an attacking sense, generating just 0.47 
                xG across the match. While their limited attacking output cannot be attributed solely to 
                Fernandes' defensive work, his ability to restrict Enciso's influence was undoubtedly a 
                significant factor. It was also a clever adjustment from De Zerbi, using the 4-1-4-1 
                structure to provide the necessary defensive cover while ensuring Ipswich's most dangerous 
                creator was kept out of the game.
            </p>

        </section>


        {/* Final Thoughts */}
        <section className="mb-16 mx-auto max-w-6xl">

            <div className="mb-6">
                <h2 className="mb-2 text-2xl font-bold md:text-4xl">
                    Final Thoughts
                </h2>

                <p className="text-xs font-medium tracking-[0.25em] text-accent">
                    KEY TAKEAWAYS
                </p>
            </div>

            <p className="mb-4 text-sm leading-relaxed md:text-lg">
                Overall, it was a largely comfortable afternoon at the Tottenham Hotspur Stadium, 
                with Spurs' ability to exploit Ipswich's defensive structures allowing them to create 
                numerous chances. While the substitutes struggled to make an impact and the prospect of 
                losing Savio to injury yet again will be a concern, there were plenty of positives to take 
                from the performance.
            </p>

            <p className="mb-4 text-sm leading-relaxed md:text-lg">
                Several players have given De Zerbi a welcome selection headache going forward. Mateus 
                Fernandes has firmly established himself as the deepest of the midfield three, 
                demonstrating his ability to dictate play while also keeping Enciso quiet for large 
                periods of the match. Williams-Barnett's quality and fearlessness in driving at opponents 
                adds another dimension to the attack, something Spurs' other wingers have struggled to provide. 
                In my eyes, he has made a compelling case for a regular starting place on the left.
            </p>

            <p className="mb-4 text-sm leading-relaxed md:text-lg">
                Perhaps the most difficult decision, however, concerns Marcos Senesi, who has struggled for 
                minutes so far this season. His ball-playing ability was on full display today, demonstrating 
                how valuable he could be in breaking down compact defensive blocks. The trade-off, however, 
                is potentially losing Micky van de Ven, whose defensive qualities provide a better balance 
                alongside van Hecke. It's certainly a selection dilemma for De Zerbi, but one that 
                could ultimately be determined by the opposition profile on a game-by-game basis.
            </p>

            <p className="mb-4 text-sm leading-relaxed md:text-lg">
                Spurs' impressive run of form takes them up to ninth in the table (before Brentford play on 
                Monday), just three points away from a Europa League place. After such a frustrating start 
                to the season, it's encouraging to see a squad that has remained committed to De Zerbi's 
                philosophy now beginning to translate its football into consistent results. 
                A trip to the Stadium of Light next Sunday to face 18th-placed Sunderland presents 
                another opportunity to extend this run, and Spurs will undoubtedly travel with confidence.
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