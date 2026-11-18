
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import XpassExplorer from "@/components/gallery/xPassmap";

export default function XpassPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#7678A8] via-[#40425C] to-[#272833] text-white px-12 py-2">

        <section className = "mt-6 max-w-6xl mx-auto mb-12">
                <h1 className="text-4xl font-bold text-white mb-2 md:text-6xl">
                    Zonal xPass Map
                </h1>

                <p className="mb-6 md:text-base text-[10px] font-medium tracking-[0.25em] text-gray-400">
                    INTERACTIVE FIGURE 
                </p>

                <p className="mb-4 text-sm md:text-lg">
                    Explore passing performance across Europe's top five leagues using my custom xPass model. 
                    The model estimates the probability of each pass being completed, incorporating factors 
                    such as pass location, distance, direction and match context.
                </p>

                <p className="mb-4 text-sm md:text-lg">
                    PAx (Passes Completed Above Expected) measures the difference between actual and expected completions, 
                    highlighting players who consistently outperform expectations given the difficulty of their passes.
                </p>

                <p className="mb-4 text-sm md:text-lg">
                    Select a player to explore their passing profile, then click individual pitch zones to investigate 
                    their passing tendencies and performance across different areas of the pitch. Only zones 
                    containing at least 15 attempted passes are displayed.
                </p>

                <p className="mb-4 text-sm md:text-lg">
                    The data covers the 2026/27 season across the Premier League, La Liga, Bundesliga, Serie A and Ligue 1.
                </p>

            <XpassExplorer />
        </section>

        <Footer />

    </main>
  );
}
