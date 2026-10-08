import { Link } from "react-router-dom";
import heroImage from "../assets/Home/heroImage.jpg";

function Home() {
  return (
    <>
<section
  className="relative min-h-[650px] bg-cover bg-center text-cb-white"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  {/* Dark overlay so text stays readable */}
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24">
    <div className="max-w-3xl">
      <p className="font-semibold uppercase tracking-[0.2em] text-cb-tan">
        CB Building
      </p>

      <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
        Built right.
        <br />
        Built to last.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
        Professional construction and remodeling services focused on
        craftsmanship, communication, and quality.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          to="/contact"
          className="rounded-md bg-cb-tan px-6 py-4 font-semibold text-cb-black transition hover:bg-cb-beige"
        >
          Request an Estimate
        </Link>

        <Link
          to="/projects"
          className="rounded-md border border-cb-white px-6 py-4 font-semibold text-cb-white transition hover:bg-cb-white hover:text-cb-black"
        >
          View Projects
        </Link>
      </div>
    </div>
  </div>
</section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-semibold uppercase tracking-widest text-cb-brown">
            What We Do
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Construction services built around your project
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-cb-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">Remodeling</h3>
            <p className="mt-3 text-slate-600">
              Kitchens, bathrooms, and complete home renovations.
            </p>
          </div>

          <div className="rounded-xl bg-cb-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">New Construction</h3>
            <p className="mt-3 text-slate-600">
              Residential construction designed around your goals.
            </p>
          </div>

          <div className="rounded-xl bg-cb-white p-8 shadow-sm">
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