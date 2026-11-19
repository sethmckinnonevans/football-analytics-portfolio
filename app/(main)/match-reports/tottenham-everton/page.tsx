
import Link from "next/link";
import MatchReportFigures from "@/components/match-reports/match-report-figures";

export default function SpursEverton() {
    return (
        <main className="min-h-screen overflow-hidden bg-background text-foreground px-5 sm:px-8 lg:px-12 py-2">

            {/* Title */}
            <section className="mt-4 mb-12 mx-auto max-w-6xl">
                <h1 className="mb-2 text-3xl font-bold md:text-5xl">
                    Tottenham Hotspur 0-0 Everton
                </h1>

                <p className="text-xs md:text-sm font-medium tracking-[0.25em] text-accent">
                    PREMIER LEAGUE | GW4 | 12.09.2026
                </p>
            </section>

            {/* Standard Match Figures */}
            <MatchReportFigures
                slug="spurs-everton"
                homeTeam="Tottenham Hotspur"
                awayTeam="Everton"
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
                    Despite a promising opening 15 minutes, the wait for a goal continues, as another lackluster attacking
                    performance now means Spurs have gone the opening four games of a season without scoring for the first
                    time in their history. Spurs enjoyed 62% of possession, the majority of which felt safe and uninventive,
                    but 39 touches in the Everton penalty areas demonstrates that Spurs were able to access dangerous areas.
                    However, once in these areas, a lack of attacking cohesion and poor decision-making, lead to just two speculative shots on target all game.
                </p>
            </section>

            {/* Out of Possession */}
            <section className="mb-16 mx-auto max-w-6xl">
                <div className="mb-6">
                    <h2 className="mb-2 text-2xl font-bold md:text-4xl">
                        Out of Possession
                    </h2>
                    <p className="text-xs font-medium tracking-[0.25em] text-accent">
                        DEFENSIVE ANALYSIS
                    </p>
                </div>

                <p className="mb-4 text-sm leading-relaxed md:text-lg">
                    In a slight variation to last week's match, Spurs set up in a 4-4-2 block (Image 1) with Mateus Fernandes joining
                    Dominic Solanke in the forward line. With James Garner dropping in between the Everton centre-backs to dictate
                    play, and their fullbacks pushing high and wide, Everton's build up resembled a 3-4-3 shape. The midfield four
                    of Spurs was rather compact, forcing Everton around the sides and importantly forcing the key creative outlet,
                    Dewsbury-Hall, to come deep to receive the ball, limiting his impact in dangerous areas.
                </p>

                <figure className="mx-auto mb-6 w-full md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-everton/spurs-oop.jpg"
                        alt="Spurs OOP"
                        className="w-full rounded-xl"
                    />

                    <figcaption className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
                        Image 1: Spurs' 4-4-2 shape out of possession.
                    </figcaption>
                </figure>

                <p className="mb-4 text-sm leading-relaxed md:text-lg">
                    Spurs also implemented a rather aggressive counter-press in the first half. They won the ball back in the final
                    third on numerous occasions allowing them greater control over the game and limiting Everton's counter-attacking
                    opportunities. This approach was especially effective in the first 15 minutes but as the energy faded further into the game,
                    they were more eager to regain their shape in transition. This may be evidence of the poor physical condition De Zerbi has been
                    consistently referencing in his post-match interviews.
                </p>

                <p className="mb-4 text-sm leading-relaxed md:text-lg">
                    Overall, Spurs dealt with the Everton aerial threat from set-pieces effectively and limited them to just two shots on target,
                    one of which came from a Kinsky error while attempting to play out from the back. While an xG conceded of 1.11 may suggest
                    Spurs were fortunate to come away with a second successive clean sheet, I would argue it was deserved, with impressive
                    performances once again from the Dutch duo of Van de Ven and Van Hecke.
                </p>
            </section>

            {/* In Possession */}
            <section className="mb-16 mx-auto max-w-6xl">
                <div className="mb-6">
                    <h2 className="mb-2 text-2xl font-bold md:text-4xl">
                        In Possession
                    </h2>
                    <p className="text-xs font-medium tracking-[0.25em] text-accent">
                        ATTACKING ANALYSIS
                    </p>
                </div>

                <p className="mb-4 text-sm leading-relaxed md:text-lg">
                    Spurs' set up in possession was slightly different to last week at Forest, reverting to De Zerbi's favoured "box" system.
                    A 3-2-5 shape which saw a double-pivot of Tonali and Bentancur, with Robertson providing the width on the left, Marmoush
                    in the left half-space and Fernandes in the right half space. Once again, the aim seemed to be to progress the ball through
                    central areas, allowing creative players to operate in the half-spaces, but just as at Forest last weekend, it was stifled
                    by Everton's approach.
                </p>

                <p className="mb-4 text-sm leading-relaxed md:text-lg">
                    Everton set up in a 4-1-4-1 with James Garner playing an interesting role. The Everton centre-backs were very narrow, while
                    left-back Mykolenko tightly marked a touchline-hugging Savio. This created a huge gap in the right-half space which Spurs
                    looked to exploit early in the game. Mateus Fernandes was taking up positions in this space but was being constantly shadowed by Garner,
                    possibly a direct instruction from Moyes. This might demonstrate that De Zerbi's patterns of play to exploit these areas are too obvious
                    and that Premier League managers are deliberately setting their teams up to nullify this threat.
                </p>

                <figure className="mx-auto mb-6 w-full md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-everton/everton-oop.jpg"
                        alt="Everton OOP"
                        className="w-full rounded-xl"
                    />

                    <figcaption className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
                        Image 2: Everton's 4-1-4-1 shape out of possession with Garner man-marking Fernandes.
                        Also an example of Spurs' 3-2-5 shape in build-up.
                    </figcaption>
                </figure>

                <p className="mb-4 text-sm leading-relaxed md:text-lg">
                    Spurs attempted to exploit this Everton shape early on due to clever rotations between
                    Fernandes and Gray and the fantastic passing ability of Van Hecke. In Image 3, Van Hecke is able to find Fernandes in the right half
                    space after losing his marker but unfortunately was not able to convert this promising position into a shooting chance. In Image 4, clever movement
                    from Fernandes, closely followed by Garner, while Savio drags Mykolenko wide, creates a channel for Archie Gray to exploit. This pattern occurred
                    multiple times but a lack of penetration on the ball from Tonali and Bentancur meant Spurs were not able to capitalise.
                </p>

                <figure className="mx-auto mb-6 w-full md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-everton/fernandes.jpg"
                        alt="Fernandes"
                        className="w-full rounded-xl"
                    />

                    <figcaption className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
                        Image 3: Fernandes finds a pocket in the right half space after losing Garner and Van Hecke
                        is able to break the lines.
                    </figcaption>
                </figure>

                <figure className="mx-auto mb-6 w-full md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-everton/garner.jpg"
                        alt="Garner"
                        className="w-full rounded-xl"
                    />

                    <figcaption className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
                        Image 4: Fernandes drags Garner into a central area, leaving space in the right half space
                        for Gray to exploit.
                    </figcaption>
                </figure>

                <p className="mb-4 text-sm leading-relaxed md:text-lg">
                    Everton sat in a very low block (16.1 OPPDA), allowing Spurs to have 62% of possession, which I
                    think this is further evidence of Moyes setting his team up to disrupt De Zerbi's preferred style of play.
                    During his time at Brighton De Zerbi was famed for "baiting the press" to create artificial transitions and
                    exploiting space in-behind the opposition. Moyes, astute to this pattern, allowed his Everton team to sit deep
                    conceding possession to Spurs, effectively challenging them to break them down. Spurs did successfully do this
                    on few occasions as previously discussed but failed to carve out genuine opportunities, generating just 0.52 open
                    play xG. One reason for this is slow possession and a failure to consistently penetrate Everton with the likes of
                    Tonali seemingly shrugging off responsibility to progress the ball and choosing safe passing options. But I think
                    the general lack of attacking cohesion is evident as new signings and players returning from injury are trying to
                    understand a new system under a still relatively new manager. So it is unsurprising that Spurs are struggling
                    in front of goal but I think there are positives to take from this weekend's game.
                </p>
            </section>

            {/* Analysis */}
            <section className="mb-16 mx-auto max-w-6xl">
                <div className="mb-6">
                    <h2 className="mb-2 text-2xl font-bold md:text-4xl">
                        Spurs' Attacking Woes
                    </h2>
                    <p className="text-xs font-medium tracking-[0.25em] text-accent">
                        STATISTICAL ANALYSIS
                    </p>
                </div>

                <p className="mb-4 text-sm leading-relaxed md:text-lg">
                    One statistic which stood out was that Spurs recorded 39 touches in the Everton's
                    box without registering a single shot on target from within the box. This reaffirms
                    that Spurs are able to progress the ball reasonably effectively but due to the reasons previously
                    discussed are currently struggling to convert these situations into attempts on goal.
                </p>

                <figure className="mx-auto mb-6 w-full md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-everton/touches_shots.png"
                        alt="Touches in the opposition box against shots in the opposition box"
                        className="w-full rounded-xl"
                    />

                    <figcaption className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
                        Figure 1: A plot of touches in the opposition box against shots in the opposition
                        box for all Premier League teams so far this season, fitted with a linear regression.
                    </figcaption>
                </figure>

                <p className="mb-4 text-sm leading-relaxed md:text-lg">
                    Figure 1 shows the relationship between touches in the opposition's box against shots in the opposition's
                    box for all Premier League teams so far this season. There is very strong statistical evidence of a positive
                    relationship between these two variables (r = 0.743, p = 0.0002). This is intuitive, as teams who record more
                    touches in their opposition's box would be expected to produce more shots. 52.2% of the variation in shots in
                    the opposition's box is explained by the linear relationship with touches in the opposition's box (R^2 = 0.522).
                    Spurs are positioned significantly below the regression line, recording just 30 shots in the opposition's box
                    compared with 41.3 shots expected by the league-wide regression relationship. This represents a 27.4% underperformance,
                    the largest in the league, and demonstrates an inefficiency in attacking output.
                </p>

                <figure className="mx-auto mb-6 w-full md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-everton/touches_xg.png"
                        alt="Touches in the opposition box against expected goals"
                        className="w-full rounded-xl"
                    />

                    <figcaption className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
                        Figure 2: A plot of touches in the opposition box against total xG created
                        for all Premier League teams so far this season, fitted with a linear regression.
                    </figcaption>
                </figure>

                <p className="mb-4 text-sm leading-relaxed md:text-lg">
                    Figure 2 shows similarly shows a positive relationship between touches in the opposition's box and expected goals,
                    although weaker than the relationship in Figure 2 (r = 0.537, p = 0.01). The R^2 value of 0.288 indicates only 28.8%
                    of the variation in xG is explained by the linear relationship with opposition-box touches. This suggests that while
                    touches in the opposition's box are strongly associated with shot volume, the resulting quality of these opportunities
                    is less strongly related. Once again, Spurs are positioned below the regression line. Given their 119 touches in opposing
                    penalty areas, the regression predicts 6.75 xG created, but Spurs have only created 3.44 xG. This represents an underperformance
                    of 49.0%, once again the largest underperformance in the league, demonstrating Spurs' inability to carve out quality goal-scoring
                    opportunities from advanced positions.
                </p>

                <p className="mb-4 text-sm leading-relaxed md:text-lg">
                    The question therefore, is what is causing this significant underperformance? With three new attacking players in the front
                    four against Everton, (Marmoush, Savio and Fernandes), it may take time for these players to settle into De Zerbi's system
                    and establish relationships with the existing squad. There have been clear examples of misunderstandings between players
                    in attacking areas, notably Savio's misunderstanding of Gray's overlapping run in the second half, leading to an Everton goal kick.
                    On top of this players like Maddison, Solanke and Kudus may still be lacking match sharpness as they return from long-term injuries.
                    This combination of new attacking players, returning players and a new manager who has only taken charge of 12 matches provides an
                    unsatisfactory but plausible explanation for the current lack of attacking cohesion.
                </p>

                <p className="mb-4 text-sm leading-relaxed md:text-lg">
                    It is important to recognise that the relationships identified in this analysis do not establish causation. A team's overall attacking
                    quality, tactical approach, possession structure and other factors may influence both their number of touches in the opposition's box
                    and their shot and xG output. However, the strength of the relationships provides useful evidence that opposition-box touches are strongly
                    associated with attacking output. Spurs' position below both regression lines therefore suggests that their current problem is not simply
                    a lack of access to the opposition's box, but an inability to effectively convert that access into shots and, ultimately, high-quality scoring opportunities.
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
