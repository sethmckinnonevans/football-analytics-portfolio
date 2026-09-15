import Link from "next/link";

export default function MatchReports() {
    return (

        <main className="bg-gradient-to-b from-[#7678A8] via-[#40425C] to-[#272833] min-h-screen tracking-wide leading-tight px-12 py-2">

            {/* Navigation */}
            <nav className="sticky top-0 z-50 backdrop-blur-xl flex items-center mb-10 py-6 justify-between border-b border-white/50">
                <Link 
                href="/" 
                className="transition duration-200 text-lg md:text-xl font-bold hover:scale-110 hover:text-gray-300"
                >
                Home
                </Link>

                <div className="flex gap-8 text-xs text-white md:text-sm">
                    <Link 
                    href="/about" 
                    className="transition duration-200 hover:scale-110 hover:text-gray-300"
                    >
                        About
                    </Link>

                    <Link 
                    href="/projects" 
                    className="transition duration-200 hover:scale-110 hover:text-gray-300"
                    >
                        Projects
                    </Link>

                    <Link 
                    href="/match-reports" 
                    className="transition duration-200 hover:scale-110 hover:text-gray-300"
                    >
                        Match Reports
                    </Link>

                    <Link 
                    href="/contact" 
                    className="transition duration-200 hover:scale-110 hover:text-gray-300"
                    >
                        Contact
                    </Link>
                </div>
            </nav>

            {/* Title*/}
            <section className="mb-12 mx-auto max-w-6xl">
                
                <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-6xl">
                Tottenham Hotspur 0-0 Everton
                </h1>

                <p className="mb-4 text-sm font-medium tracking-[0.25em] text-gray-400 md:text-md">
                PREMIER LEAGUE | GW4 | 12.09.2026
                </p>

            </section>

            {/* Average Positions */}
            <section className="mb-8 mx-auto max-w-6xl">
                <div className="grid gap-4 md:grid-cols-2">

                    <div>
                        <iframe
                        src="/plots/match-reports/spurs-everton/Tottenham Hotspur_average_positions.html"
                        title="Spurs average positions"
                        className="h-[380px] w-full rounded-xl border-0"
                        />
                    </div>

                    <div>
                        <iframe
                        src="/plots/match-reports/spurs-everton/Everton_average_positions.html"
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
                        src="/plots/match-reports/spurs-everton/momentum_graph.png"
                        alt="Match momentum graph"
                        className="w-full rounded-xl"
                        />
                    </div>

                    <div>
                        <img
                        src="/plots/match-reports/spurs-everton/xg.png"
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
                        src="/plots/match-reports/spurs-everton/Tottenham Hotspur_shot_map.html"
                        title="Spurs shot map"
                        className="h-[380px] w-full"
                        />
                    </div>

                    <div>
                        <iframe
                        src="/plots/match-reports/spurs-everton/Everton_shot_map.html"
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
                
                <p className="mb-4 text-md md:text-lg">
                Despite a promising opening 15 minutes, the wait for a goal continues, as another lackluster attacking 
                performance now means Spurs have gone the opening four games of a season without scoring for the first 
                time in their history. Spurs enjoyed 62% of possession, the majority of which felt safe and uninventive,
                but 39 touches in the Everton penalty areas demonstrates that Spurs were able to access dangerous areas.
                However, once in these areas, a lack of attacking cohesion and poor decison
                making, lead to just two speculative shots on target all game.
                </p>

            </section>

            {/* Out of Possession */}
            <section className="mb-12 mx-auto max-w-6xl">
                <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                    Out of Possession
                </h2>
                
                <p className="mb-4 text-md md:text-lg">
                    In a slight variation to last week's match, Spurs set up in a 4-4-2 block (Image 1) with Mateus Fernandes joining 
                    Dominic Solanke in the forward line. With James Garner dropping inbetween the Everton centre-backs to dictate 
                    play, and their fullbacks pushing high and wide, Everton's build up resembled a 3-4-3 shape. The midfield four 
                    of Spurs was rather compact, forcing Everton around the sides and importantly forcing the key creative outlet, 
                    Dewsbury-Hall, to come deep to recieve the ball, limiting his impact in danegrous areas.
                </p>

                <div className = "w-full mx-auto md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-everton/spurs-oop.jpg"
                        alt="Spurs OOP"
                        className="rounded-xl"
                    />

                    <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                        Image 1: Spurs' 4-4-2 shape out of possession. 
                    </p>
                </div>

                <p className="mb-4 text-md md:text-lg">
                    Spurs also implemented a rather aggressive counter-press in the first half. They won the ball back in the final 
                    third on numerous ocasions allowing them greater control over the game and limiting Everton's counter-attacking 
                    opportunities. This approach was especially effective in the first 15 minutes but as the energy faded further into the game, 
                    they were more eager to regain their shape in transition. This may be evidence of the poor physical condition De Zerbi has been 
                    consistently referencing in his post match interviews.
                </p>

                <p className="mb-4 text-md md:text-lg">
                    Overall, Spurs dealt with the Everton arial threat from set-pieces effectively and limited them to just two shots on target, 
                    one of which came from a Kinsky error while attempting to play out from the back. While an xG conceeded of 1.11 may suggest 
                    Spurs were fortunate to come away with a second successive clean sheet, I would argue it was deserved, with impressive 
                    performances once again from the Dutch duo of Van de Ven and Van Hecke. 
                </p>



            </section>

            {/* In Possession */}
            <section className="mb-12 mx-auto max-w-6xl">
                <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                    In Possession
                </h2>

                <p className="mb-4 text-md md:text-lg">
                    Spurs' set up in possession was slightly different to last week at Forest, reverting to De Zerbi's favoured "box" system. 
                    A 3-2-5 shape which saw a double-pivot of Tonali and Bentancur, with Robertson providing the width on the left, Marmoush 
                    in the left half-space and Fernades in the right half space.  Once again, the aim seemed to be to progress the ball through 
                    central areas, allowing creative players to operate in the half-spaces, but just as at Forst last weekend, it was stifeled 
                    by Everton's approach.  
                </p>

                <p className = "mb-4 text-md md:text-lg">
                    Everton set up in a 4-1-4-1 with James Garner playing an interesting role. The Everton centre-backs were very narrow, while 
                    left-back Mykolenko tightly marked a touchline-hugging Savio. This created a huge gap in the right-half space which Spurs 
                    looked to exploit early in the game. Mateus Fernandes was taking up positions in this space but was being constantly shadowed by Garner, 
                    possibly a direct instruction from Moyes. This might demonstrate that De Zerbi's patterns of play to exploit these areas are too obvious
                    and that Premier League managers are deliberately setting their teams up to nullify this threat. 
                </p>

                <div className = "w-full mx-auto md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-everton/everton-oop.jpg"
                        alt="Everton OOP"
                        className="rounded-xl"
                    />

                    <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                        Image 2: Everton's 4-1-4-1 shape out of possession with Garner man-marking Fernandes. 
                        Also an example of Spurs' 3-2-5 shape in build-up.
                    </p>

                </div>

                <p className = "mb-4 text-md md:text-lg">
                    Spurs were attempted to exploit this Everton shape early on due to clever rotations between
                    Fernandes and Gray and the fantastic passing ability of Van Hecke. In Image 3, Van Hecke is able to find Fernandes in the right half 
                    space after losing his marker but unfortunately was not ablet to convert this promising position into a shooting chance. In Image 4, clever movement
                    from Fernandes, closely followed by Garner, while Savio drags Mykolenko wide, creates a channel for Archie Gray to exploit. This pattern occured
                    multiple times but a lack of penetration on the ball from Tonali and Bentancur meant Spurs were not able to capitalise.
                </p>

                <div className = "w-full mx-auto md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-everton/fernandes.jpg"
                        alt="Everton OOP"
                        className="rounded-xl"
                    />

                    <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                        Image 3: Fernandes finds a pocket in the right half space after losing Garner and Van Hecke 
                        is able to break the lines. 
                    </p>

                </div>

                <div className = "w-full mx-auto md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-everton/garner.jpg"
                        alt="Everton OOP"
                        className="rounded-xl"
                    />

                    <p className="mt-2 mb-4 text-xs text-gray-500 md:text-sm">
                        Image 4: Fernandes drags Garner into a central area, leaving space in the right half space
                        for Gray to exploit.
                    </p>

                </div>

                <p className = "mb-4 text-md md:text-lg">
                    Everton sat in a very low block (16.1 OPPDA), allowing Spurs to have 62% of possession, which I 
                    think this is further evidence of Moyes setting his team up to disrupt De Zerbi's prefered style of play. 
                    During his time at Brighton De Zerbi was famed for "baiting the press" to create artificial transitions and 
                    exploiting space in-behind the opposition. Moyes, astute to this pattern, allowed his Everton team to sit deep 
                    conceeding possession to Spurs, effectively challenging them to break them down. Spurs did successfully do this 
                    on few ocasions as previously discussed but failed to carve out genuine opportunities, generating just 0.52 open 
                    play xG. One reason for this is slow possession and a failure to consistently penetrate Everton with the likes of 
                    Tonali seemingly shrugging off responsibility to progress the ball and choosing safe passing options. But I think 
                    the general lack of attacking cohesion is evident as new signings and players returning from injury are trying to 
                    understand a new system under a still relatively new manager. So it is unsurprising that Spurs are struggling 
                    in front of goal but I think there are positives to take from this weekends game. 
                </p>

            </section>

            {/* Analysis */}
            <section className="mb-12 mx-auto max-w-6xl">
                <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                    Analysis
                </h2>

                 <p className="mb-4 text-md md:text-lg">
                    One statisitc which stood out was that Spurs recorded 39 touches in the Everton's 
                    box without registering a single shot on target from within the box. This reaffirms 
                    that Spurs are able to progress the ball reasonably effectively but due to the reasons previously 
                    discussed are currently struggling to convert these situations into attempts on goal. 
                 </p>

                 <div className = "w-full mx-auto md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-everton/touches_shots.png"
                        alt="Everton OOP"
                        className="rounded-xl"
                    />

                    <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                        Figure 1: A plot of touches in the opposition box against shots in the opposition
                        box for all Premier League teams so far this season, fitted with a linear regression.
                    </p>

                </div>

                <p className="mb-4 text-md md:text-lg">
                    Figrue 1 shows the realtionship between tocuhes in the opposition's box against shots in the opposition's 
                    box for all Premier League teams so far this season. There is a very strong statistical evidence of a positive 
                    relationship between these two variables (r = 0.743, p = 0.0002). This is intuative, as teams who records more 
                    touches in their opposition's box would be expected to produce more shots. 52.2% of the variation in shots in 
                    the opposition's box is explained by the linear relationship with touches in the opposition's box (R^2 = 0.522). 
                    Spurs are positioned significantly below the regression line, recording just 30 shots in the opposition's box 
                    compared with 41.3 shots expected by the league-wide regression relationship. This represents a 27.4% underperformance, 
                    the largest in the league, and demonstrates an inefficiency in attacking output. 
                </p>

                <div className = "w-full mx-auto md:max-w-4xl">
                    <img
                        src="/plots/match-reports/spurs-everton/touches_xg.png"
                        alt="Everton OOP"
                        className="rounded-xl"
                    />

                    <p className="mt-2 mb-4 text-xs text-gray-400 md:text-sm">
                        Figure 2: A plot of touches in the opposition box against total xG created
                        for all Premier League teams so far this season, fitted with a linear regression.
                    </p>

                </div>
                
                <p className="mb-4 text-md md:text-lg">
                Figure 2 shows similarly shows a positive relationship between touches in the opposition's box and expected goals, 
                although weaker then the relationship in Figure 2 (r = 0.537, p = 0.01). The R^2 value of 0.288 indicates only 28.8% 
                of the variation in xG is explained by the linear relationship with opposition-box touches. This suggests that while 
                touches in the opposition's box are strongly associated with shot volume, the resulting quality of these opportunities 
                is less strongly related. Once again, Spurs are positioned below the regression line. Given their 119 touches in opposing 
                penalty areas, the regression predicts 6.75 xG created, but Spurs have only created 3.44 xG. This represents an underperformance 
                of 49.0%, once again the largest underperformance in the league, demonstrating Spurs' inability to carve out quality goal-scoring 
                opportunites from advanced positions. 
                </p>

                <p className="mb-4 text-md md:text-lg">
                    The question therefore, is what is causing this significant underperformance? With three new attacking players in the front 
                    four against Everton, (Marmoush, Savio and Fernandes), it may take time for these players to settle into De Zerbi's system 
                    and establish relationships with the existing squad. There have been clear examples of misunderstandings between players 
                    in attacking areas, notably Savio's misunderstanding of Gray's overlapping run in the second half, leading to an Everton goalkick. 
                    On top of this players like Maddison, Solanke and Kudus may still be lacking match sharpness as they return from long-term injuries. 
                    This combination of new attacking players,  returning players and a new manager who has only taken charge of 12 matches provides an 
                    unsatisfactory but plausible explanation for the current lack of attacking cohesion. 
                </p>

                <p className="mb-4 text-md md:text-lg">
                  It is important to recognise that the relationships identified in this analysis do not establish causation. A team's overall attacking 
                  quality, tactical approach, possession structure and other factors may influence both their number of touches in the opposition's box 
                  and their shot and xG output. However, the strength of the relationships provides useful evidence that opposition-box touches are strongly 
                  associated with attacking output. Spurs' position below both regression lines therefore suggests that their current problem is not simply 
                  a lack of access to the opposition's box, but an inability to effectively convert that access into shots and, ultimately, high-quality scoring opportunities.  
                </p>

            </section>

            <div className="mb-12 border-t border-white/40"></div>

            <div className="mb-12 flex gap-6 justify-center">
                <Link
                    href="/match-reports"
                    className="rounded-xl bg-[#3C3D5C] border border-gray-500 p-6 transition duration-200 hover:border-white hover:scale-110"
                >
                    Read More Match Reports
                </Link>
            </div>  
        </main>
    
    );
}