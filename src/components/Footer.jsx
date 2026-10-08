import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-cb-black text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold text-cb-white">CB Building</h2>

          <p className="mt-3 text-sm">
            All We Sell Is Peace Of Mind.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-cb-white">Navigation</h3>

          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/reviews">Reviews</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-cb-white">Contact</h3>

          <p className="mt-3 text-sm">
            563-599-5628
            <br />
            CBBuilding@bisbuilding.com
            <br />
            Dubuque and Surronding Areas
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;