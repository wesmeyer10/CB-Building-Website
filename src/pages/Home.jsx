import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="bg-slate-900 text-white">
        <div className="mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-amber-400">
              CB Building
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
              Built right.
              <br />
              Built to last.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Professional construction and remodeling services focused on
              craftsmanship, communication, and quality.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                to="/contact"
                className="rounded-md bg-amber-500 px-6 py-4 font-semibold text-slate-950"
              >
                Request an Estimate
              </Link>

              <Link
                to="/projects"
                className="rounded-md border border-white px-6 py-4 font-semibold"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-semibold uppercase tracking-widest text-amber-600">
            What We Do
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Construction services built around your project
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">Remodeling</h3>
            <p className="mt-3 text-slate-600">
              Kitchens, bathrooms, and complete home renovations.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">New Construction</h3>
            <p className="mt-3 text-slate-600">
              Residential construction designed around your goals.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">Exterior Projects</h3>
            <p className="mt-3 text-slate-600">
              Decks, additions, exterior improvements, and more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;