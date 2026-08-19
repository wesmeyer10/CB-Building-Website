import EstimateRequestForm from "../components/EstimateRequestForm";

function Contact() {
  return (
    <>
      <section className="bg-cb-black text-cb-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cb-tan">
            Contact
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Tell us about your next project.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Send C.B. Building some basic information about your project and
            we'll follow up to discuss the work and next steps.
          </p>
        </div>
      </section>

      <section className="bg-cb-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-cb-black">
              Request an Estimate
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Fill out the form below with as much information as you can.
              C.B. Building will review your request and contact you directly.
            </p>

            <div className="mt-10">
              <EstimateRequestForm />
            </div>
          </div>

          <aside className="rounded-lg bg-cb-beige p-8">
            <h2 className="text-2xl font-bold text-cb-black">
              Prefer to contact us directly?
            </h2>

            <div className="mt-6 space-y-5 text-slate-700">
              <div>
                <p className="font-semibold text-cb-black">Phone</p>
                <p>Business phone number</p>
              </div>

              <div>
                <p className="font-semibold text-cb-black">Email</p>
                <p>Business email address</p>
              </div>

              <div>
                <p className="font-semibold text-cb-black">Service Area</p>
                <p>Dubuque and surrounding areas</p>
              </div>
            </div>

            <div className="mt-8 border-t border-cb-tan pt-6">
              <p className="text-sm leading-6 text-slate-600">
                Submitting this form does not create a contract or guarantee a
                project estimate. C.B. Building will contact you after reviewing
                your request.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default Contact;