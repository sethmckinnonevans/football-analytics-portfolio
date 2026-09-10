export default function WorldCupPredictor() {
  return (
    <main className="min-h-screen bg-[#404040] text-white px-12 py-16">

      <a
        href="/"
        className="text-sm text-gray-500 hover:text-white"
      >
        ← Back to projects
      </a>

      <section className="mt-20 max-w-4xl">

        <p className="mb-6 text-sm font-medium tracking-[0.25em] text-gray-500">
          MACHINE LEARNING
        </p>

        <h1 className="text-6xl font-bold tracking-tight">
          2026 World Cup Predictor
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-400">
          Predicting international football results using Elo
          ratings, historical form and machine learning.
        </p>

      </section>

      <section className="mt-24 max-w-3xl">

        <h2 className="mb-6 text-3xl font-bold">
          Overview
        </h2>

        <p className="leading-relaxed text-gray-400">
          This project uses historical international football
          results to build a machine-learning model capable of
          estimating the probability of home wins, away wins and
          draws.
        </p>

      </section>

      <section className="mt-20 max-w-3xl">

        <h2 className="mb-6 text-3xl font-bold">
          Methodology
        </h2>

        <p className="leading-relaxed text-gray-400">
          The model combines Elo ratings, recent form, goals
          scored and conceded, opponent strength and match
          context. Several classification models were evaluated
          against a historical test set.
        </p>

      </section>

    </main>
  );
}