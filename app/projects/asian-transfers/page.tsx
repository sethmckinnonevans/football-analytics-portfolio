import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function AsianTransfers() {
    return (

        <main className="bg-gradient-to-b from-[#7678A8] via-[#40425C] to-[#272833] min-h-screen tracking-wide leading-tight px-12 py-2">
        

            {/* Navigation */}
            <Navbar />


            {/* Title and Overview*/}
            <section className = "mt-6 max-w-6xl mx-auto mb-12">
            
                <h1 className="text-4xl font-bold text-white mb-2 md:text-6xl">
                    The Premier League's East Asian Recruitment Gap
                </h1>

                <p className="mb-6 md:text-base text-[10px] font-medium tracking-[0.25em] text-gray-400">
                    DATA ANALYSIS · PLAYER RECRUITMENT
                </p>

                <p className="mb-4 text-sm md:text-lg">
                    As of the start of the 2026/27  Premier League season, just 11 Asian players feature across 
                    the league’s 20 teams, accounting for just 2.2% of all players. But why is Asian 
                    representation in the Premier League so low?        
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    While not all Asian nations have established themselves as footballing powers, 
                    Japan and South Korea have become prominent forces on the international stage at 
                    both senior and youth level in recent times. Both the Japanese and South Korean 
                    Football Associations have invested heavily in developing their domestic footballing 
                    infrastructure and youth development systems, with standout talents like 
                    Kaoru Mitoma and Son Heung-Min becoming Premier League stars. Yet, despite the 
                    talent emerging from both countries, Japanese and South Korean player remain 
                    underrepresented in the Premier League.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    This analysis investigates whether Japanese and South Korean players are underrepresented 
                    in Premier League recruitment and whether potential undervalued talent could present 
                    opportunities for clubs. By examining historical transfer patterns and recruitment 
                    from the Japanese and Korean domestic leagues, the project also aims to 
                    identify emerging talents who could become attractive prospects Premier League clubs.
                </p>
                
            </section>

        
            {/* Why Japan and South Korea? */}
            <section className = "mt-6 max-w-6xl mx-auto mb-12">

                <h2 className="text-xl font-bold text-white mb-4 md:text-3xl">
                    Why Japan and South Korea?
                </h2>

                <p className = "mb-4 text-sm md:text-lg">
                    While this analysis originated from the underrepresentation of Asia players in the Premier 
                    League, I did not consider it necessary to examine every Asian nation equally. Football's 
                    popularity, level of investment and international success vary considerably across the 
                    continent, meaning it is understandable why some nations are underrepresented in the 
                    Premier League. In some countries, other sports have traditionally held greater cultural 
                    significance, while others have focused investment on attracting established foreign
                    players to strengthen their domestic competitions. I therefore chose to focus on nations 
                    with an established international pedigree and competitive domestic leagues, where there 
                    was a stronger basis for investigating whether talent might be overlooked by Premier 
                    League clubs.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    At the 2026 World Cup, Japan were the only Asian nation to progress to the knockout stages. 
                    The have consistently been a feature of the World Cup knockout stages since 2018, famously  
                    topping their group in 2022 after defeating both Germany and Spain. Japan have also enjoyed 
                    continental success, winning the Asia Cup in 2011 and reaching the final in 2019. Their 
                    success extends to youth level, with the U-17 side winning two of the last three U-17 
                    Asian Cups in 2023 and 2026. These achievements suggest a pathway for emerging talent, 
                    which is reflected in Japan's position as the highest-ranked Asian nation in the FIFA 
                    world rankings, at 17th.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Iran (23rd), South Korea (32nd) and Saudi Arabia (55th) are the next highest Asian 
                    nations in the FIFA rankings, but all failed to make it past the group stages at the 
                    World Cup. Despite a disappointing tournament this year, South Korea have demonstrated 
                    their ability to compete against some of the world’s strongest teams. They reached the 
                    Round of 16 in Qatar in 2022 and famously defeated reigning world champions Germany 2-0 in 
                    the 2018 group stage. They have also shown promise at youth level with their U-20 squad 
                    finishing as runners-up at the 2019 U-20 World Cup and fourth in 2023. These performances 
                    provide evidence of South Korea’s ability to develop players capable of competing on the 
                    international stage. 
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    While Japan and South Korea have established themselves as prominent forces on the 
                    international stage, it is also important to consider the strength of their domestic 
                    leagues and their role in developing talent. According to Opta's league power rankings, 
                    Japan's J1 League is the highest-ranked Asian domestic league, sitting 29th globally, 
                    while South Korea's K League 1 ranks 51st. However, the Saudi Pro League sits between 
                    the two in 38th place. Given Saudi Arabia's international standing and the comparatively 
                    high ranking of its domestic league, it is worth considering whether it should also be 
                    included in this analysis.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    A key factor behind the growth in the quality of the Saudi Pro League has arguably 
                    been its recruitment of established foreign players, with high-profile names such as 
                    Cristiano Ronaldo, Neymar and Karim Benzema moving to the league in recent years. 
                    Over the last decade, the 18 clubs currently competing in the Saudi Pro League have 
                    accumulated a combined net transfer spend of €2.77 billion. By comparison, the 20 
                    current J1 League clubs recorded a combined net spend of just €22.9 million over 
                    the same period, while the 12 current K League 1 clubs generated a net transfer 
                    profit of €35.6 million.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    This difference is also reflected in average player market values: €2.53 million 
                    in the Saudi Pro League, compared with €441,000 in the J1 League and €226,000 in 
                    the K League 1. However, the Saudi Pro League also has a substantially higher 
                    proportion of foreign players, at 38.2%, compared with 15.7% in Japan and 15.6% 
                    in South Korea. Taken together, these figures suggest that the Saudi Pro League's
                    overall quality is influenced considerably by investment in overseas talent, rather
                    than solely reflecting the development of domestic players. As this analysis aims to 
                    identify potentially undervalued talent emerging from domestic leagues, the Saudi 
                    Pro League is therefore less suitable for the investigation than the J1 League and K League 1.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Japan and South Korea therefore represent suitable candidates for this investigation. 
                    Both nations have established footballing cultures, competitive domestic leagues and a 
                    proven ability to develop players capable of performing on the international stage. 
                    It is therefore unsurprising that Japanese and South Korean players account for 10 of 
                    the 11 Asian players currently in the Premier League. However, this remains a small 
                    number given the talent these nations have demonstrated on the international stage. 
                    This raises an important question: if these countries consistently produce players 
                    capable of competing at the highest level, why are more not making the move to English football? 
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    The remainder of this analysis will examine historical recruitment patterns of Japanese 
                    and South Korean players to assess whether they are underrepresented or potentially 
                    undervalued by Premier League clubs, before identifying emerging talents from the J1 
                    League and K League 1 who could represent future recruitment opportunities.
                </p>

            </section>


            {/* Transfers by Nationality */}
            <section className = "mt-6 max-w-6xl mx-auto mb-12">

                <h2 className="text-xl font-bold text-white mb-4 md:text-3xl">
                    Premier League Transfers by Nationality
                </h2>
                
                <p className = "mb-4 text-sm md:text-lg">
                    To begin to investigate this question, I collected data on players who had signed for a Premier 
                    League club since the summer 2016 transfer window, up until present in the summer 2026 window. 
                    To my surprise, the current lack of Asian players in the Premier League is not an outlier, but 
                    a common pattern over this time period.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">

                {/* World map */}
                <figure className="col-span-1 md:col-span-2 min-w-0">
                    <div className="relative w-full aspect-[2/1] overflow-hidden">
                        <iframe
                        src="/plots/projects/asian-transfers/nationalities-map.html"
                        title="Premier League transfers by nationality"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                        />
                    </div>
                    <figcaption className="mt-2 text-xs md:text-sm text-gray-400">
                        Figure 1: Geographical distribution of Premier League signings between 2016 and 20206.
                    </figcaption>
                </figure>

                {/* Sunburst */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                        <iframe
                        src="/plots/projects/asian-transfers/continents-sunburts.html"
                        title="Transfer distribution by nationality"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                        />
                    </div>
                    <figcaption className="mt-2 text-xs md:text-sm text-gray-400">
                        Figure 2: A breakdown of Premier League signings by continent and nationality, between
                        2016 and 2026.
                    </figcaption>
                </figure>

                {/* Transfer evolution */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                        <iframe
                        src="/plots/projects/asian-transfers/japan_and_korea_trends.html"
                        title="Japanese and South Korean transfers over time"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                        />
                    </div>
                    <figcaption className="mt-2 text-xs md:text-sm text-gray-400">
                        Figure 3: The trend in numbers of Japanese and South Korea Premier League signings between
                        2016 and 2026.
                    </figcaption>
                </figure>

                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    Over this period, there were a total of 1,913 Premier League signings, with more than two 
                    thirds involving European nationals, as illustrated in Figure 2. African and South American 
                    players accounted for the next largest proportions of arrivals, representing 13.1% and 12.3% 
                    respectively. In contrast, with just 39 signings, Asian players accounted for only 2.04% of 
                    all transfers. This was comparable to the representation of North American players (3.03%) 
                    and Oceanic players (1.10%).
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    This is an interesting finding given the popularity of football across much of Asia. Compared with 
                    some other regions, several Asian nations have demonstrated considerable commitment to 
                    developing the sport, investing in their footballing culture and grassroots development. 
                    For example, in Australia, football ranks behind Australian rules football, rugby and cricket 
                    in terms of popularity, with the Australian Sports Commission (ASC) reportedly investing $4.21 
                    million annually into the sport. In Japan, while baseball remains hugely popular, football is 
                    widely established as the country's second most popular sport. The Japan Football Association 
                    (JFA) has also demonstrated significant financial commitment to the game's development, running 
                    a reported yearly deficit of $19 million due to aggressive investment into growth and 
                    infrastructure at all levels of the game. Similarly, the Korean Football Association 
                    (KFA) reportedly spends up to $37 million annually on youth development, grassroots 
                    training and school-level infrastructure, in an attempt to develop the next generation of players.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    One might expect these differences in footballing culture and investment to be reflected 
                    in the quality of players produced by these nations. To some extent, this is evident in 
                    the international rankings, with Japan currently occupying 17th place in the FIFA world 
                    rankings, nine positions above Australia in 26th. However, Australia also ranks above 
                    South Korea, currently placed 32nd. This is despite South Korea having consistently 
                    ranked higher than Australia since June 2023, only recently dropping in the rankings 
                    due to their disappointing 2026 World Cup campaign. 
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Despite these differences in footballing development and international standing, the 
                    Premier League transfer figures tell a somewhat different story. Since summer 2016, 
                    there have been 13 Australian signings compared with just seven South Korean players. 
                    Japan fares slightly better, with 19 signings over the same period. Although Japan 
                    accounts for the largest share of Asian arrivals, these figures remain relatively 
                    low given the country's international standing and investment in football development. 
                    This raises the possibility that Premier League recruitment does not fully reflect 
                    the talent emerging from Japan and South Korea.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    The findings from Figure 1 are also particularly interesting when considering the transfer 
                    fees involved. Zion Suzuki's move to Aston Villa earlier this summer for €30 million 
                    established a new Premier League transfer record for a Japanese player. However, the 
                    average fee paid for Japanese players remains just €6.4 million, only slightly 
                    higher than the €4.0 million average for South Korean players. By comparison, 
                    players from countries with considerably less established international pedigrees, 
                    such as Paraguay, command an average fee of almost twice that of Japanese players 
                    (€12.5 million). Even Albania, whose national team has never qualified for a World Cup, 
                    records a higher average transfer fee than South Korea, at €5.5 million. 
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Considering the international success and footballing infrastructure Japan and South 
                    Korea have developed, these figures are somewhat surprising. Although transfer fees 
                    are influenced by numerous factors, including player age, contract length, position 
                    and selling club, the disparity raises questions about how Premier League clubs value 
                    talent emerging from these countries. When considered alongside their relatively low 
                    representation in the Premier League, the transfer fees provide further evidence of a 
                    potential undervaluation of Japanese and South Korean players within the English market.
                </p>

            </section>


            {/* Transfers by League */}
            <section className = "mt-6 max-w-6xl mx-auto mb-12">

                <h2 className="text-xl font-bold text-white mb-4 md:text-3xl">
                    Premier League Transfers by Selling League
                </h2>

                <p className = "mb-4 text-sm md:text-lg">
                    Another interesting piece of evidence for the underrepresentation of Japanese and 
                    Korean players in the Premier League is in the squads these two nations took to the 
                    2026 World Cup. Of South Korea’s 26 man squad they took to North America, just seven 
                    players played their club football in their home country. While small, this was more 
                    than the Japanese squad who only had three players playing in the J1 League. This suggests 
                    that the elite players of each nation tend move abroad to chase higher levels of football. 
                    Yet, of the 52 players across these two squads just four of them were Premier League players 
                    at the time of the tournament (Hwang Hee-Chan, Wataru Endo, Daichi Kamada and Ao Tanaka). 
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    If the most highly regarded Japanese and South Korean players are not making the move 
                    directly to the Premier League, which leagues are attracting them instead? Examining 
                    transfers out of the J1 League since summer 2016 reveals that the Belgian Pro League 
                    has been the most prominent destination for Japanese players, accounting for 53 transfers. 
                    Liga Portugal follows with 18, while the Eredivisie accounts for a further 13. For South 
                    Korean exports from the K League 1, Liga Portugal represents the most common European 
                    destination, with 10 transfers, followed by the Bundesliga with six.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">

                {/* World map */}
                <figure className="col-span-1 md:col-span-2 min-w-0">
                    <div className="relative w-full aspect-[2/1] overflow-hidden">
                        <iframe
                        src="/plots/projects/asian-transfers/selling-league-map.html"
                        title="Premier League transfers selling league"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                        />
                    </div>
                    <figcaption className="mt-2 text-xs md:text-sm text-gray-400">
                        Figure 4: Geographical distribution of the selling leagues of Premier League Transfers 
                        between 2016 and 2026
                    </figcaption>
                </figure>

                {/* Sunburst */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                        <iframe
                        src="/plots/projects/asian-transfers/leagues-sunburts.html"
                        title="Transfer distribution by selling leagues and nation"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                        />
                    </div>
                    <figcaption className="mt-2 text-xs md:text-sm text-gray-400">
                        Figure 5: A breakdown of Premier League signings by selling country and league between 2016
                        and 2026.
                    </figcaption>
                </figure>

                {/* League strength v transfers */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                        <iframe
                        src="/plots/projects/asian-transfers/league-strength.html"
                        title="League strength v number of transferes"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                        />
                    </div>
                    <figcaption className="mt-2 text-xs md:text-sm text-gray-400">
                        Figure 6: The relationship between Opta league strength and number of transfers to the Premier 
                        League between 2016 and 2026.
                    </figcaption>
                </figure>

                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    Figure 4 highlights another interesting trend: since summer 2016, just six Japanese 
                    players have moved directly from the J1 League to the Premier League. Of the 19 Japanese 
                    players to have signed for Premier League clubs during this period, this represents just 
                    32% of arrivals. These six players commanded an average transfer fee of €2.5 million, 
                    compared with €8.22 million for the remaining 13 players who arrived from other leagues. 
                    This suggests that Premier League clubs have been willing to pay considerably higher fees 
                    for Japanese players who have already established themselves elsewhere in Europe.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Newcastle's signing of Yoshinori Muto in 2018 provides an interesting example. Mainz had 
                    originally signed him from FC Tokyo for just €2.8 million before Newcastle paid €10.7 
                    million for his services a few years later. Of course, Muto may have developed 
                    considerably during his time in Germany, becoming a more attractive proposition 
                    for Newcastle. Nevertheless, the difference in fees raises an interesting question: 
                    could Premier League clubs identify and recruit similar talent directly from Japan 
                    at a considerably lower cost, rather than paying a premium once players have established 
                    themselves in European football?
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    A similar pattern emerges for South Korean players, although there is an even split between the three signings 
                    arriving directly from the K League 1 and the three recruited from elsewhere. 
                    Those signed directly from South Korea commanded an average fee of just €2.4 million, 
                    compared with €5.56 million for players arriving from other leagues. However, this 
                    latter figure is heavily influenced by Hwang Hee-chan's €17 million move to Wolves in 2022. 
                    This suggests that, as with Japanese players, Premier League clubs have generally paid 
                    higher fees for South Korean players who have developed their careers outside their domestic league.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Figure 6 further highlights the potential gap in player recruitment directly from Japan and 
                    South Korea. Both the J1 League and K League 1 sit below the trend line, suggesting that, 
                    relative to their Opta league strength rankings, fewer players have moved directly 
                    from these leagues to the Premier League than might be expected.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    However, this discrepancy may not necessarily reflect a conscious reluctance among 
                    Premier League clubs to recruit from these leagues. Instead, it could point towards 
                    a broader issue of accessibility within the global player recruitment market. Of the
                    21 leagues above the trend line, only 14% are located outside Europe, 
                    while 50% of leagues below the trend line are non-European. 
                    This suggests a wider pattern in which European leagues are more heavily represented among 
                    those supplying players to the Premier League than their league strength alone might predict.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    One possible explanation is that Premier League clubs have greater familiarity with European 
                    football, supported by established scouting networks, professional contacts and more accessible 
                    performance data. In contrast, identifying talent in Japan and South Korea may require greater 
                    investment in scouting infrastructure, travel and the development of local networks. 
                    These additional barriers could reduce the likelihood of players being identified and 
                    recruited directly from these leagues, even where their quality warrants greater attention.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Given the financial resources available to Premier League clubs, it would be difficult to 
                    argue that the cost of scouting alone is necessarily prohibitive. Other factors, including 
                    recruitment preferences, language and cultural barriers, work permit requirements and the 
                    perceived risks of adapting to English football, may also influence transfer decisions. 
                    Therefore, this gap in recruitment directly from Japan and Korean may
                    not be explained solely by the perceived quality of those leagues, but could also reflect 
                    geographical and structural barriers to recruitment.            
                </p>

            </section>


            {/* Scouting */}
            <section className = "mt-6 max-w-6xl mx-auto mb-12">
                <h2 className="text-xl font-bold text-white mb-4 md:text-3xl">
                    Emerging Talents
                </h2>

                <p className = "mb-4 text-sm md:text-lg">
                    Now that we have explored some of the potential reasons why relatively few 
                    Japanese and South Korean players make the move to the Premier League, 
                    despite the quality of talent these nations have produced, I wanted to 
                    investigate whether there are emerging players in their domestic leagues 
                    who could represent attractive recruitment opportunities for English clubs.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    To do this, I created a player database using data from the J1 League and K League 1, 
                    covering the 2025 seasons onwards. After grouping players by position and applying a 
                    minimum minutes-played threshold, I calculated percentile rankings across a range of 
                    performance metrics within each positional group. Using these results, 
                    I identified a selection of young players currently playing in Japan and South Korea 
                    who I believe have the potential to make the step up to the Premier League.
                </p>

                {/* Alexandre Pisano */}
                <h3 className="text-lg font-bold text-white mb-2 mt-8 md:text-2xl">
                    Alexandre Pisano | Goalkeeper | Nagoya Grampus
                </h3>

                <p className="mb-6 md:text-base text-sm font-medium tracking-wider text-gray-400">
                    20 | Right Footed | €275,000
                </p>

                {/* Player image and radar plot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                {/* Player photograph */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <img
                        src="/plots/projects/asian-transfers/pisano.jpeg"
                        alt="Alexandre Pisano"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    </div>
                </figure>

                {/* Radar plot */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <iframe
                        src="/plots/projects/asian-transfers/alexandre-pisano.html"
                        title="Pisano radar chart"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                    />
                    </div>
                </figure>

                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    Alexandre Pisano is a modern-style goalkeeper, standing at 6ft 6in. A product of Nagoya 
                    Grampus' youth system, Pisano began the 2026/27 season as the club's first-choice goalkeeper, 
                    starting their opening six matches. However, following Nagoya's 3-1 defeat to Machida Zelvia 
                    in September, during which he was unfortunate to score an own goal, Pisano has since been 
                    relegated to the bench. He also shared goalkeeping responsibilities for Japan's U-23 side 
                    during their run to the final of the recent Asian Games.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Despite losing his place in the starting XI, I believe Pisano remains a very promising prospect. 
                    His physical stature allows him to command his penalty area, ranking in the 93rd percentile for 
                    punches per 90, while his anticipation and willingness to come off his line are reflected in his 
                    91st-percentile ranking for successful run-outs per 90. However, what makes him particularly 
                    interesting from a recruitment perspective is his ability with the ball at his feet. Pisano 
                    ranks in at least the 93rd percentile across all available passing metrics, suggesting a 
                    level of distribution that could make him particularly well suited to English football. 
                    With goalkeepers increasingly expected to contribute to build-up play in the Premier League, 
                    I believe his technical ability could make him an attractive option for clubs looking to 
                    recruit a modern, ball-playing goalkeeper.
                </p>


                {/* Shin Min-ha*/}
                <h3 className="text-lg font-bold text-white mb-2 mt-8 md:text-2xl">
                    Shin Min-ha | Centre Back | Gangwon FC
                </h3>

                <p className="mb-6 md:text-base text-sm font-medium tracking-wider text-gray-400">
                    21 | Right Footed | €600,000
                </p>

                {/* Player image and radar plot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                {/* Player photograph */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <img
                        src="/plots/projects/asian-transfers/shin-min-ha.jpeg"
                        alt="Myeong-kwan Seo"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    </div>
                </figure>

                {/* Radar plot */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <iframe
                        src="/plots/projects/asian-transfers/shin-min-ha.html"
                        title="Seo radar chart"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                    />
                    </div>
                </figure>

                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    Shin Min-Ha is an imposing left-sided centre-back playing for Gangwon FC, who 
                    currently boast the second-best defensive record in the K League 1. He has also been 
                    a regular starter for South Korea's U-23 side, featuring in their recent Asian Games success.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Min-Ha is an aggressive defender who is often willing to step out of the defensive 
                    line to engage opponents. This can occasionally leave him exposed or drawn 
                    out of position, although his athleticism allows him to recover effectively, 
                    having recorded a top speed of 35.2 km/h this season. He ranks in the 73rd 
                    percentile for both tackles won per 90 and ground duel win rate, suggesting he 
                    is particularly effective in one-on-one defensive situations. However, his 
                    aerial duel statistics are a notable weakness, with his win rate placing 
                    him in just the 5th percentile. On the ball, he is generally a reliable but 
                    relatively conservative passer, favouring shorter, safer options rather than 
                    attempting to break opposition lines. This may limit his appeal to some 
                    English clubs, particularly those looking for centre-backs capable of 
                    progressing possession. 
                </p>


                {/* Seo Myeong-kwan*/}
                <h3 className="text-lg font-bold text-white mb-2 mt-8 md:text-2xl">
                    Seo Myeong-kwan | Centre Back | Ulsan HD
                </h3>

                <p className="mb-6 md:text-base text-sm font-medium tracking-wider text-gray-400">
                    23 | Right Footed | €350,000
                </p>

                {/* Player image and radar plot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                {/* Player photograph */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <img
                        src="/plots/projects/asian-transfers/myeong-kwan-seo.jpeg"
                        alt="Shin Min-ha"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    </div>
                </figure>

                {/* Radar plot */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <iframe
                        src="/plots/projects/asian-transfers/myeong-kwan-seo.html"
                        title="Shin radar chart"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                    />
                    </div>
                </figure>

                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    Seo Myeong-kwan is another promising centre-back emerging from the K League 1. 
                    Like Shin Min-Ha, he is not particularly impressive in possession, but his 
                    defensive capabilities are where he really stands out. Playing on the right 
                    side of a back three for Ulsan HD, Seo's ability to read the game is reflected 
                    in his ranking in the 98th percentile for interceptions. His physical attributes 
                    are equally impressive, placing him in the 98th percentile for tackles won per 90 
                    and the 93rd percentile for ground duel win rate. Although slightly older than 
                    some of the other prospects featured, at 23 years old, I believe his defensive 
                    awareness and physical capabilities could make him an interesting option for 
                    Premier League clubs, particularly those looking for an aggressive, defensively reliable centre-back.
                </p>


                {/* Hayato Inamura*/}
                <h3 className="text-lg font-bold text-white mb-2 mt-8 md:text-2xl">
                    Hayato Inamura | Centre Back | FC Tokyo
                </h3>

                <p className="mb-6 md:text-base text-sm font-medium tracking-wider text-gray-400">
                    24 | Left Footed | €450,000
                </p>

                {/* Player image and radar plot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                {/* Player photograph */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <img
                        src="/plots/projects/asian-transfers/hayato-inamura.jpeg"
                        alt="Hayato Inamura"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    </div>
                </figure>

                {/* Radar plot */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <iframe
                        src="/plots/projects/asian-transfers/hayato-inamura.html"
                        title="Inamura radar chart"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                    />
                    </div>
                </figure>

                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    Seo Myeong-kwan is another promising centre-back emerging from the K League 1. 
                    Like Shin Min-Ha, he is not particularly impressive in possession, but his 
                    defensive capabilities are where he really stands out. Playing on the right 
                    side of a back three for Ulsan HD, Seo's ability to read the game is reflected 
                    in his ranking in the 98th percentile for interceptions. His physical attributes 
                    are equally impressive, placing him in the 98th percentile for tackles won per 90 
                    and the 93rd percentile for ground duel win rate. Although slightly older than 
                    some of the other prospects featured, at 23 years old, I believe his defensive 
                    awareness and physical capabilities could make him an interesting option for 
                    Premier League clubs, particularly those looking for an aggressive, defensively reliable centre-back.
                </p>


                {/* Yotaro Nakajima*/}
                <h3 className="text-lg font-bold text-white mb-2 mt-8 md:text-2xl">
                    Yotaro Nakajima | Centre Midfielder | Sanfrecce Hiroshima
                </h3>

                <p className="mb-6 md:text-base text-sm font-medium tracking-wider text-gray-400">
                    20 | Right Footed | €800,000
                </p>

                {/* Player image and radar plot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                {/* Player photograph */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <img
                        src="/plots/projects/asian-transfers/yotaro-nakajima.jpeg"
                        alt="Yotaro Nakajima"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    </div>
                </figure>

                {/* Radar plot */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <iframe
                        src="/plots/projects/asian-transfers/yotaro-nakajima.html"
                        title="Nakajima radar chart"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                    />
                    </div>
                </figure>

                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    Yotaro Nakajima has been regarded as a promising talent in Japanese football 
                    since becoming the youngest player to sign a professional contract with Sanfrecce 
                    Hiroshima at the age of 17 in 2023. Having joined the club's youth system at just 
                    eight years old, he has progressed through the ranks to become a regular feature in 
                    the first team. He was also an important figure for 
                    Japan's U-23 side during their recent run to the Asian Games final.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Nakajima is a highly technical, deep-lying playmaker capable of dictating the tempo of a game. 
                    His ability to progress possession is a particular strength, supported by excellent spatial 
                    awareness that allows him to find space and consistently offer himself as a passing option.
                    While physicality may not be his strongest attribute, his defensive statistics are impressive, 
                    placing him in the 100th percentile for tackles per 90 and the 95th percentile for ball recoveries 
                    per 90. This suggests that, despite not being the most physically imposing midfielder, he can 
                    still contribute effectively out of possession.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Sanfrecce Hiroshima's links with German side FC Köln could potentially offer Nakajima an 
                    interesting route into European football. However, given his technical quality and ability to 
                    control the midfield, I am sure he will be on the radars of many Premier League clubs.
                </p>


                {/* Son Jeong-beom*/}
                <h3 className="text-lg font-bold text-white mb-2 mt-8 md:text-2xl">
                    Son Jeong-beom | Centre Midfielder | FC Seoul
                </h3>

                <p className="mb-6 md:text-base text-sm font-medium tracking-wider text-gray-400">
                    19 | Left Footed | €300,000
                </p>

                {/* Player image and radar plot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                {/* Player photograph */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <img
                        src="/plots/projects/asian-transfers/son-jeong-beom.jpeg"
                        alt="Son Jeong-beom"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    </div>
                </figure>

                {/* Radar plot */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <iframe
                        src="/plots/projects/asian-transfers/son-jeong-beom.html"
                        title="Son radar chart"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                    />
                    </div>
                </figure>

                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    Son Jeong-beom is arguably one of the most exciting prospects currently playing 
                    in the K League 1. The 19-year-old has been an important figure in FC Seoul's 
                    2026 campaign, featuring in 29 of their 31 matches so far, including 21 starts. 
                    His regular involvement at such a young age reflects his ability to contribute 
                    across different phases of play, combining the physical endurance to operate 
                    effectively in transition with the technical quality to influence possession. 
                    Perhaps his most impressive attribute, however, is his composure on the ball 
                    under pressure, a particularly rare trait in a player of his age.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Although Son has registered just two goals this season, his ability to arrive 
                    late in the penalty area and find promising shooting opportunities is reflected 
                    in his xG per 90, which ranks in the 92nd percentile. This suggests that he is getting 
                    into dangerous positions even if his goal return has yet to match that underlying output. 
                    However, his slender frame could present a challenge if he were to move to a more physically 
                    demanding league. He ranks in just the 4th percentile for aerial duel win rate, highlighting 
                    an area that may require improvement as he continues to develop. Nevertheless, I truly believe 
                    Son is the next big name in Korean football, and hopefully Premier League teams take a chance on him.
                </p>


                {/* Yumeki Yokoyama*/}
                <h3 className="text-lg font-bold text-white mb-2 mt-8 md:text-2xl">
                    Yumeki Yokoyama | Left Winger | Cerezo Osaka
                </h3>

                <p className="mb-6 md:text-base text-sm font-medium tracking-wider text-gray-400">
                    21 | Right Footed | €970,000
                </p>

                {/* Player image and radar plot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                {/* Player photograph */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <img
                        src="/plots/projects/asian-transfers/yumeki-yokoyama.jpg"
                        alt="Yumeki Yokoyama"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    </div>
                </figure>

                {/* Radar plot */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <iframe
                        src="/plots/projects/asian-transfers/yumeki-yokoyama.html"
                        title="Yokoyama radar chart"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                    />
                    </div>
                </figure>

                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    Yumeki Yokoyama is an exciting young winger who has shown considerable promise throughout 2026, 
                    both in the 100 Year Vision League and during the opening stages of the 2026/27 J1 League season. 
                    He has scored six goals for Cerezo Osaka across the 2026 campaign so far, while also featuring along
                    side Yotaro Nakajima for Japan's U-23 side during their recent run to the Asian Games final.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Yokoyama is a direct, attack-minded winger who likes to play on the shoulder of his defender, 
                    looking to exploit space in behind the opposition's defensive line. He is equally dangerous 
                    when carrying the ball, using his pace and willingness to take on defenders to drive his 
                    team forward. This is reflected in his ranking in the 97th percentile for successful dribbles 
                    per 90, highlighting his ability to beat opponents in one-on-one situations. However, 
                    to take the next step in his development, he will need to become more consistent in his 
                    creative output and decision-making in the final third. Improving his ability to create 
                    chances for teammates, alongside his existing threat as a ball carrier, could help him develop 
                    into a more complete attacking option and attract interest from English clubs.
                </p>


                {/* Shin Miidera*/}
                <h3 className="text-lg font-bold text-white mb-2 mt-8 md:text-2xl">
                    Shin Miidera | Left Winger | Yokohama F. Marinos
                </h3>

                <p className="mb-6 md:text-base text-sm font-medium tracking-wider text-gray-400">
                    16 | Left Footed
                </p>

                {/* Player image and radar plot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                {/* Player photograph */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <img
                        src="/plots/projects/asian-transfers/shin-miidera.jpeg"
                        alt="Shin Miidera"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    </div>
                </figure>

                {/* Radar plot */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <iframe
                        src="/plots/projects/asian-transfers/shin-miidera.html"
                        title="Miidera radar chart"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                    />
                    </div>
                </figure>

                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    At just 16 years old, Shin Miidera is by far the youngest player featured in this analysis and 
                    potentially one of the most exciting prospects. Having progressed through Yokohama F. Marinos' 
                    youth system, Miidera made an immediate impression on the first team, earning a place in the 
                    starting XI for their opening match of the 2026/27 season and scoring with his very first touch.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Miidera is an exceptionally technical player whose ability on the ball allows him to operate 
                    both as a central attacking midfielder and out wide. However, he appears particularly 
                    dangerous as a winger, where his dribbling ability allows him to take on defenders and 
                    create opportunities in one-on-one situations. He ranks in the 96th percentile for 
                    dribbling success rate, highlighting his effectiveness when carrying the ball past 
                    opponents. While his current creative output remains limited, this is perhaps unsurprising 
                    for a player still adapting to senior football at such a young age. Inelegible to sign for
                    a Premier League club until he turns 18, Miidera has time to gain valuable first team experience and
                    build on his technical strengths before making the next step. By then, I believe his potential
                    will attract significant interest from English clubs. 
                </p>


                {/* Harumi Miniamo */}
                <h3 className="text-lg font-bold text-white mb-2 mt-8 md:text-2xl">
                    Harumi Minamino | Striker | Urawa Red Diamonds
                </h3>

                <p className="mb-6 md:text-base text-sm font-medium tracking-wider text-gray-400">
                    22 | Striker | €450,000
                </p>

                {/* Player image and radar plot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                {/* Player photograph */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <img
                        src="/plots/projects/asian-transfers/harumi-minamino.jpeg"
                        alt="Harumi Minamino"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    </div>
                </figure>

                {/* Radar plot */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <iframe
                        src="/plots/projects/asian-transfers/harumi-minamino.html"
                        title="Minaminno radar chart"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                    />
                    </div>
                </figure>

                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    Following an impressive campaign in the 100 Year Vision League with Gamba Osaka, where he scored 
                    six goals in 17 appearances, Minamino made a summer move to Urawa Reds. He faced his former club 
                    on the opening day of the 2026/27 season and made an immediate impact, scoring within 20 minutes 
                    of coming onto the pitch.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Despite making six of his ten league appearances so far this season from the bench, Minamino 
                    has continued to influence games, already scoring four goals. His return of a goal every 97 
                    minutes places him in the 99th percentile among the strikers in the dataset, highlighting his 
                    impressive scoring efficiency. He also recently scored an extra-time winner against Nagoya 
                    Grampus to send Urawa through to the next round of the J.League Cup.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    In terms of his playing style, Minamino resembles a hybrid striker, often dropping into pockets 
                    of space to receive the ball on the half-turn before driving at opposing defenders. 
                    This ability to link midfield and attack makes him an interesting attacking option, 
                    although his decision-making and combination play can sometimes let him down, with possession 
                    occasionally being wasted in promising situations. He is also an aggressive presser, showing 
                    a willingness to put opposition defenders under pressure, although his defensive statistics 
                    suggest that this intensity does not always translate into effective defensive contributions.                   
                </p>


                {/* Akito Suzuki*/}
                <h3 className="text-lg font-bold text-white mb-2 mt-8 md:text-2xl">
                    Akito Suzuki | Striker | Sanfrecce Hiroshima
                </h3>

                <p className="mb-6 md:text-base text-sm font-medium tracking-wider text-gray-400">
                    23 | Right Footed | €1.2 Million
                </p>

                {/* Player image and radar plot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                {/* Player photograph */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <img
                        src="/plots/projects/asian-transfers/akito-suzuki.jpg"
                        alt="Akito Suzuki"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    </div>
                </figure>

                {/* Radar plot */}
                <figure className="min-w-0">
                    <div className="relative w-full aspect-[3/3] overflow-hidden">
                    <iframe
                        src="/plots/projects/asian-transfers/akito-suzuki.html"
                        title="Suzuki radar chart"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                    />
                    </div>
                </figure>

                </div>

                <p className = "mb-4 text-sm md:text-lg">
                    Akito Suzuki has been one of the standout performers in an impressive Sanfrecce 
                    Hiroshima side this season, recording nine goals and four assists in just 12 appearances. 
                    Operating as a left forward in a 3-4-3 system, Suzuki is an extremely versatile attacker. 
                    He can hold the width on the left flank, drop into central areas to operate as a number 10, 
                    or make runs into the penalty area to occupy the role of a traditional poacher.
                </p>

                <p className = "mb-4 text-sm md:text-lg">
                    Suzuki is a clinical finisher with either foot, having scored nine goals from just 5.68 
                    expected goals (xG) this season. This overperformance highlights his ability to convert 
                    chances, while his goals-per-90 figure places him in the 89th percentile among strikers 
                    in the dataset. However, his contribution extends well beyond goalscoring. He is heavily 
                    involved in Sanfrecce's attacking play and demonstrates impressive creative ability, 
                    ranking in the 98th percentile for secondary assists and the 93rd percentile for direct 
                    assists. This combination of goalscoring threat, creativity and positional versatility 
                    makes him a particularly interesting attacking prospect.
                </p>




            </section>



            {/* Footer */}
            <Footer />

        </main>
    );
}