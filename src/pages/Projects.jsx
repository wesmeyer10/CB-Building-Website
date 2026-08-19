import ImageSlideshow from "../components/ImageSlideshow";

const projects = [
  {
    id: 1,
    title: "Kitchen Remodel",
    category: "Remodeling",
    location: "Dubuque, Iowa",
    description:
      "Placeholder project description. This section will eventually explain the scope of work and what was completed.",
    images: [],
  },
  {
    id: 2,
    title: "Home Addition",
    category: "New Construction",
    location: "Dubuque, Iowa",
    description:
      "Placeholder project description. This section will eventually explain the scope of work and what was completed.",
    images: [],
  },
  {
    id: 3,
    title: "Deck Project",
    category: "Exterior",
    location: "Dubuque, Iowa",
    description:
      "Placeholder project description. This section will eventually explain the scope of work and what was completed.",
    images: [],
  },
];

function Projects() {
  return (
    <>
      {/* Header */}
      <section className="bg-cb-black text-cb-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cb-tan">
            Projects
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            See the work behind C.B. Building.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore completed remodeling, construction, and exterior projects.
          </p>
        </div>
      </section>

      {/* Project List */}
      <section className="bg-cb-white">
        <div className="mx-auto max-w-7xl space-y-16 px-6 py-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="grid gap-10 border-b border-slate-200 pb-16 lg:grid-cols-2 lg:items-center">
      <div>
        {project.images.length > 0 ? (
          <ImageSlideshow images={project.images} />
        ) : (
          <div className="flex min-h-[400px] items-center justify-center rounded-lg bg-slate-200">
            <p className="text-slate-500">
              Project photos coming soon
            </p>
          </div>
        )}
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cb-brown">
          {project.category}
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-cb-black">
          {project.title}
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          {project.location}
        </p>

        <p className="mt-6 leading-7 text-slate-600">
          {project.description}
        </p>
      </div>
    </article>
  );
}

export default Projects;