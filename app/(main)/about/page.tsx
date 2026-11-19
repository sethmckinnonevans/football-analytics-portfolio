import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground px-5 sm:px-8 lg:px-12 py-2">

      {/* Title */}
      <section className="mt-4 mb-16 mx-auto max-w-6xl">

        <h1 className="mb-2 text-4xl font-bold md:text-6xl">
          About
        </h1>

        <p className="mb-3 text-xs font-medium tracking-[0.25em] text-accent">
          THE PERSON BEHIND EXPECTEDxG
        </p>

      </section>

    </main>
  );
}