import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold text-white">CB Building</h2>

          <p className="mt-3 text-sm">
            Quality construction, remodeling, and home improvement.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Navigation</h3>

          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/reviews">Reviews</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact</h3>

          <p className="mt-3 text-sm">
            Phone number
            <br />
            Email address
            <br />
            Service area
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;