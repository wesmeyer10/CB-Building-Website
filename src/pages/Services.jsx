import { Link } from "react-router-dom";

const services = [
  {
    title: "Residential Remodeling",
    description:
      "Interior and exterior remodeling projects focused on improving the function, appearance, and value of your home.",
    examples: [
      "Kitchen remodels",
      "Bathroom remodels",
      "Basement finishing",
      "Interior renovations",
    ],
  },
  {
    title: "New Construction",
    description:
      "Residential construction services for homeowners planning new spaces, additions, or complete builds.",
    examples: [
      "New homes",
      "Home additions",
      "Garages",
      "Custom construction projects",
    ],
  },
  {
    title: "Exterior Improvements",
    description:
      "Exterior construction and improvement projects designed to improve durability, appearance, and outdoor living space.",
    examples: [
      "Decks",
      "Siding",
      "Exterior repairs",
      "Outdoor structures",
    ],
  },
];

function Services() {
  return (
    <>
      {/* Header */}
      <section className="bg-cb-black text-cb-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cb-tan">
            Services
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Construction services for your home and property.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            C.B. Building provides residential construction and remodeling
            services in Dubuque and the surrounding area.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-cb-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Approach */}
      <section className="bg-slate-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cb-brown">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Start with the project. Build from there.
            </h2>

            <p className="mt-6 leading-7 text-slate-600">
              Every project is different. We start by understanding what you
              want to accomplish, reviewing the space, and discussing the
              options available for your project.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              From there, C.B. Building works with you to develop a plan and
              move the project from the initial conversation through
              construction and completion.
            </p>
          </div>

          <div className="rounded-lg bg-cb-black p-8 text-cb-white">
            <h3 className="text-2xl font-bold">
              Not sure where your project fits?
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Reach out and tell us what you have in mind. We can discuss the
              project and determine the best next step.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-block rounded-md bg-cb-tan px-6 py-3 font-semibold text-cb-black transition hover:bg-cb-beige"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cb-tan">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-cb-black">
              Ready to get started?
            </h2>

            <p className="mt-3 text-lg text-slate-800">
              Contact C.B. Building to talk about your next project.
            </p>
          </div>

          <Link
            to="/contact"
            className="self-start rounded-md bg-cb-black px-7 py-4 font-semibold text-cb-white transition hover:bg-slate-800 md:self-auto"
          >
            Request an Estimate
          </Link>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-cb-white p-8">
      <div className="mb-5 h-1 w-12 bg-cb-tan" />

      <h2 className="text-2xl font-bold text-cb-black">
        {service.title}
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        {service.description}
      </p>

      <ul className="mt-6 space-y-2 text-slate-700">
        {service.examples.map((example) => (
          <li key={example} className="flex gap-3">
            <span className="font-bold text-cb-brown">•</span>
            <span>{example}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Services;