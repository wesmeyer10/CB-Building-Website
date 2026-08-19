import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-cb-black text-cb-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cb-tan">
            About Us
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Local construction. Quality work. Straightforward service.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            C.B. Building LLC provides residential remodeling and new
            construction services in Dubuque and the surrounding area.
          </p>
        </div>
      </section>

      {/* Company / Owner */}
      <section className="bg-cb-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          
          {/* Temporary image placeholder */}
          <div className="flex min-h-[450px] items-center justify-center rounded-lg bg-slate-200">
            <p className="text-slate-500">
              Carter / Crew / Project Photo
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cb-brown">
              C.B. Building LLC
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cb-black md:text-4xl">
              Built around the customer and their project.
            </h2>

            <p className="mt-6 leading-7 text-slate-600">
              C.B. Building LLC is a locally owned construction company based
              in Dubuque, Iowa, owned and operated by Carter Bisdorf. We focus
              on residential remodeling and new construction, working with
              homeowners to turn their ideas into finished projects.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              We believe good construction starts with understanding what the
              customer wants. From the early planning stages through
              construction and completion, our goal is to provide dependable
              workmanship, clear communication, and a finished project our
              customers can feel confident in.
            </p>

            <Link
              to="/projects"
              className="mt-8 inline-block rounded-md bg-cb-black px-6 py-3 font-semibold text-cb-white transition hover:bg-slate-800"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cb-brown">
              What We Value
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              A straightforward approach to construction.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              title="Quality Work"
              description="Attention to detail and craftsmanship focused on producing work made to last."
            />

            <ValueCard
              title="Clear Communication"
              description="Keeping customers informed and setting clear expectations throughout the project."
            />

            <ValueCard
              title="Straightforward Process"
              description="Understanding the project, developing a plan, completing the work, and making sure the result meets expectations."
            />

            <ValueCard
              title="Locally Owned"
              description="Owned and operated in Dubuque and serving homeowners throughout the surrounding area."
            />
          </div>
        </div>
      </section>

    

      {/* CTA */}
      <section className="bg-cb-tan">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-cb-black">
              Have a project in mind?
            </h2>

            <p className="mt-3 text-lg text-slate-800">
              Get in touch with C.B. Building to discuss your project.
            </p>
          </div>

          <Link
            to="/contact"
            className="self-start rounded-md bg-cb-black px-7 py-4 font-semibold text-cb-white transition hover:bg-slate-800 md:self-auto"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

function ValueCard({ title, description }) {
  return (
    <article className="rounded-lg bg-cb-white p-7 shadow-sm">
      <div className="mb-5 h-1 w-12 bg-cb-tan" />

      <h3 className="text-xl font-bold text-cb-black">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>
    </article>
  );
}

export default About;