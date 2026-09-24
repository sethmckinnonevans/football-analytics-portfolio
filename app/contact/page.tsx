import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Contact() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#7678A8] via-[#40425C] to-[#272833] text-white px-12 py-2">

      {/* Navigation */}
      <Navbar />

      {/* Title */}
      <section className = "mt-6 max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 md:text-6xl">
          Contact
        </h1>

        <p className="text-md text-white md:text-lg">
          Whether you would like to discuss one of my projects, football analytics or potential 
          opportunities, feel free to get in touch.
          
        </p>
      </section>

      {/* Links */}
      <section className = "mt-6 max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          <a
            href="https://github.com/sethmckinnonevans"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl text-center border border-white/30 p-12 md:p-18 transition duration-200 hover:-translate-y-1 hover:border-white hover:bg-white/10"
          >
            <p className="text-lg md:text-4xl font-bold">
              GITHUB
            </p>
          </a>

          <a
              href="https://www.linkedin.com/in/sethmckinnonevans/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl text-center border border-white/30 p-12 md:p-18 transition duration-200 hover:-translate-y-1 hover:border-white hover:bg-white/10"
            >
            <p className="text-lg md:text-4xl font-bold">
              LINKEDIN
            </p>
            </a>

          <a
            href="mailto:sethmckinnonevans02@gmail.com"
            className="group rounded-xl text-center border border-white/30 p-12 md:p-18 transition duration-200 hover:-translate-y-1 hover:border-white hover:bg-white/10"
          >
            <div>
              <p className="text-lg font-bold md:text-4xl">
                EMAIL
              </p>

              <p className="mt-1 text-sm text-gray-400 md:text-base">
                sethmckinnonevans02@gmail.com
              </p>
            </div>
          </a>

        </div>

      </section>

      <Footer />

    
    </main>
  );
}