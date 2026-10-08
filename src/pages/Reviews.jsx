import { Link } from "react-router-dom";

const reviews = [
  {
    id: 1,
    name: "Bob Stout",
    rating: 5,
    text: "I admired the level of dedication and thoughtful execution shown throughout the entire experience. Everything felt properly aligned, making the process smooth and reassuring from beginning to end. The final outcome was exceptional and truly admirable.",
    source: "Facebook",
    project: "Residential Remodel",
  },

];

function Reviews() {
  return (
    <>
      {/* Header */}
      <section className="bg-cb-black text-cb-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cb-tan">
            Reviews
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            What our customers have to say.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Hear from homeowners who have worked with C.B. Building on
            construction and remodeling projects.
          </p>
        </div>
      </section>

      {/* Review Cards */}
<section className="bg-cb-white">
  <div className="mx-auto max-w-7xl px-6 py-20">
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  </div>
</section>

      {/* Reviews */}
<section className="bg-cb-beige">
  <div className="mx-auto max-w-7xl px-6 py-16">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cb-brown">
        More Reviews
      </p>

      <h2 className="mt-3 text-3xl font-bold text-cb-black">
        See more customer feedback.
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        Visit C.B. Building on Facebook to see additional reviews and updates.
      </p>

      <a
        href="https://www.facebook.com/profile.php?id=61573961880118&sk=reviews"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-block rounded-md bg-cb-black px-6 py-3 font-semibold text-cb-white transition hover:opacity-90"
      >
        View on Facebook
      </a>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-cb-tan">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-cb-black">
              Have a project in mind?
            </h2>

            <p className="mt-3 text-lg text-slate-800">
              Tell C.B. Building what you're planning and request an estimate.
            </p>
          </div>

          <Link
            to="/contact"
            className="self-start rounded-md bg-cb-black px-7 py-4 font-semibold text-cb-white transition hover:opacity-90 md:self-auto"
          >
            Request an Estimate
          </Link>
        </div>
      </section>
    </>
  );
}

function ReviewCard({ review }) {
  return (
    <article className="flex h-full flex-col border-t-4 border-cb-tan bg-white p-8 shadow-sm">
      <StarRating rating={review.rating} />

      <blockquote className="mt-6 flex-1 leading-7 text-slate-600">
        “{review.text}”
      </blockquote>

      <div className="mt-8 border-t border-slate-200 pt-5">
        <p className="font-bold text-cb-black">
          {review.name}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {review.project}
        </p>

        <p className="mt-2 text-sm font-semibold text-cb-brown">
          {review.source} Review
        </p>
      </div>
    </article>
  );
}

function StarRating({ rating }) {
  return (
    <div
      className="flex gap-1 text-cb-brown"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} aria-hidden="true">
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default Reviews;