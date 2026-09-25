import Link from "next/link";
import Navbar from "@/components/navbar";

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#7678A8] via-[#40425C] to-[#272833] text-white px-12 py-2">

      {/* Navigation */}
      <Navbar />

      {/* Title and Overview*/}
      <section className = "mt-6 max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-white mb-2 md:text-6xl">
          Premier League Usage Rates
        </h1>

        <p className="mb-6 md:text-base text-[10px] font-medium tracking-[0.25em] text-gray-400">
          DATA ANALYSIS · FOOTBALL ANALYTICS
        </p>

        <p className="mb-4 text-sm md:text-lg">
          The idea behind this project was born from a friendly debate between a good friend and myself about Bruno Fernandes.
        </p>

        <p className = "mb-4 text-sm md:text-lg">
          My friend hold Bruno in very high regards, labelling him as Manchester United's best signing of the pos-Ferguson era
          and one of the best midfielders in Premier League History. While I don't disagree that Bruno is an excellent footballer,
          I believe that there is an argument that his highly dominant role in Manchester United's attaack can sometimes 
          limit the impact of the players around him.
        </p>

        <p className = "mb-4 text-sm md:text-lg">
          Bruno is often the focal point of Manchester United's attack, looking to drag his team through games by attempting 
          difficult passes to create chances and taking plenty of shots on himself. But is his output actually worth the amount
          of the ball he uses?
        </p>
        
        <p className = "mb-4 text-sm md:text-lg">
          We can look at Bruno's direct output, goals, assists and other attacking metrics and compare these numbers
          with his teammates or Manchester United's overall output. However, there is no metric to quantify how much of his team's 
          attacking play is chanelled through him and wether the output he produces is proportionate to the amount of possession 
          he consumes. 
        </p>

        <p className="mb-4 text-sm md:text-lg">
          The answer to our debate seemed to lie in a different sport entierly.
        </p>

        <p className="mb-4 text-sm md:text-lg">
          Basketball fans will be well acquainted with the term usage rate, a statistic designed to measure a player's ball 
          dominance by estimating the proportion of their team's possessions that end with them. It is common for a team's star 
          player to have a high usage rate, as the team's tactical system is often designed to give them a large share of 
          shooting opportunities. 
        </p>

        <p className = "mb-4 text-sm md:text-lg">
          In this project, I explored whether the concept of the basketball usage rate can be translated into football, and
          whether it can provide a useful way of understanding how attacking responsibility is distributed between players. I then
          use the metric to investigate team attacking structures and its potential application as a scouting tool. 
        </p>
          
      </section>
    
    </main>
  );
}