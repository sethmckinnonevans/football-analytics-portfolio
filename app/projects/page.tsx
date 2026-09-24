import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Projects() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#7678A8] via-[#40425C] to-[#272833] text-white px-12 py-2">

      {/* Navigation */}
      <Navbar />

      {/* Title */}
      <section className = "mt-6 max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 md:text-6xl">
          Projects
        </h1>

        <p className="text-md text-white md:text-lg">
      
          
        </p>
      </section>

      {/* Footer*/}
      <Footer />
    </main>
  );
}