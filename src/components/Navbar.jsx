import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-cb-black text-cb-white">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-5">
          <Link
            to="/"
            className="text-2xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            CB Building
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 md:flex">
            <Link to="/about" className="hover:text-cb-tan">
              About
            </Link>

            <Link to="/services" className="hover:text-cb-tan">
              Services
            </Link>

            <Link to="/projects" className="hover:text-cb-tan">
              Projects
            </Link>

            <Link to="/reviews" className="hover:text-cb-tan">
              Reviews
            </Link>

            <Link
              to="/contact"
              className="rounded-md bg-cb-tan px-5 py-3 font-semibold text-cb-black"
            >
              Get an Estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md border border-slate-700 px-4 py-2 font-semibold md:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="border-t border-slate-800 pb-6 pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              <MobileLink
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </MobileLink>

              <MobileLink
                to="/services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </MobileLink>

              <MobileLink
                to="/projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </MobileLink>

              <MobileLink
                to="/reviews"
                onClick={() => setMenuOpen(false)}
              >
                Reviews
              </MobileLink>

              <MobileLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </MobileLink>
            </div>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 block rounded-md bg-cb-tan px-5 py-3 text-center font-semibold text-cb-black"
            >
              Request an Estimate
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

function MobileLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="rounded-md px-3 py-3 text-lg font-medium hover:bg-slate-900 hover:text-cb-tan"
    >
      {children}
    </Link>
  );
}

export default Navbar;