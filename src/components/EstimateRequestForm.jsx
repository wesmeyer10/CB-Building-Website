import { useState } from "react";

function EstimateRequestForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    preferredContact: "email",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xoeaykyd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.status}`);
      }

      const data = await response.json();

      console.log("Submission successful:", data);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectType: "",
        location: "",
        preferredContact: "email",
        message: "",
      });

      setStatus("success");
    } catch (error) {
      console.error("Estimate request failed:", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg bg-cb-beige p-8">
        <h2 className="text-2xl font-bold text-cb-black">
          Thanks for reaching out.
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Your project information has been received. C.B. Building will follow
          up with you to discuss the next steps.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-md bg-cb-black px-6 py-3 font-semibold text-cb-white transition hover:opacity-90"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-sm text-slate-500">
        Fields marked with * are required.
      </p>

      {/* Name */}
      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <FormField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email + Phone */}
      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required={formData.preferredContact === "email"}
        />

        <FormField
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required={formData.preferredContact === "phone"}
        />
      </div>

      {/* Project Type */}
      <div>
        <label
          htmlFor="projectType"
          className="mb-2 block font-semibold text-cb-black"
        >
          Project Type
          <span className="ml-1 text-red-600" aria-hidden="true">
            *
          </span>
        </label>

        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cb-tan"
        >
          <option value="">Select a project type</option>
          <option value="remodeling">Residential Remodeling</option>
          <option value="new-construction">New Construction</option>
          <option value="addition">Home Addition</option>
          <option value="exterior">Exterior Project</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Location */}
      <FormField
        label="Project Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="City, ZIP code, or general area"
        required
      />

      {/* Preferred Contact */}
      <div>
        <p className="mb-3 font-semibold text-cb-black">
          Preferred Contact Method
        </p>

        <div className="flex flex-wrap gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="preferredContact"
              value="email"
              checked={formData.preferredContact === "email"}
              onChange={handleChange}
            />
            Email
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="preferredContact"
              value="phone"
              checked={formData.preferredContact === "phone"}
              onChange={handleChange}
            />
            Phone
          </label>
        </div>
      </div>

      {/* Project Description */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-semibold text-cb-black"
        >
          Tell Us About Your Project
          <span className="ml-1 text-red-600" aria-hidden="true">
            *
          </span>
        </label>

        <textarea
          id="message"
          name="message"
          rows="7"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe what you're looking to have done, your goals for the project, and anything else that might be helpful."
          required
          className="w-full resize-y rounded-md border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cb-tan"
        />
      </div>

      {status === "error" && (
        <div className="rounded-md border border-red-300 bg-red-50 p-4 text-red-800">
          Something went wrong while submitting your request. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-cb-tan px-7 py-4 font-semibold text-cb-black transition hover:bg-cb-beige disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting"
          ? "Sending Request..."
          : "Request an Estimate"}
      </button>
    </form>
  );
}

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-semibold text-cb-black"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-600" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cb-tan"
      />
    </div>
  );
}

export default EstimateRequestForm;