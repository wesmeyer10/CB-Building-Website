import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-2xl font-bold">
          CB Building
        </Link>

        <div className="hidden gap-7 md:flex">
          <Link to="/about" className="hover:text-amber-400">
            About
          </Link>

          <Link to="/services" className="hover:text-amber-400">
            Services
          </Link>

          <Link to="/projects" className="hover:text-amber-400">
            Projects
          </Link>

          <Link to="/reviews" className="hover:text-amber-400">
            Reviews
          </Link>

          <Link to="/contact" className="hover:text-amber-400">
            Contact
          </Link>
        </div>

        <Link
          to="/contact"
          className="rounded-md bg-amber-500 px-5 py-3 font-semibold text-slate-950"
        >
          Get an Estimate
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;