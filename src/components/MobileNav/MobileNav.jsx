import { IoClose } from "react-icons/io5";

const MobileNav = ({ setIsNavOpen }) => {
  return (
    <nav className="mobile-nav">
      <div className="btn-holder">
        <button
          onClick={() => setIsNavOpen(false)}
          className="close-btn"
          type="button"
          aria-label="close nav"
        >
          <IoClose />
        </button>
      </div>

      <div className="links-wrapper">
        <a href="#landing" className="link" onClick={() => setIsNavOpen(false)}>
          home
        </a>
        <a
          href="#experience"
          className="link"
          onClick={() => setIsNavOpen(false)}
        >
          experience
        </a>
        <a
          href="#projects"
          className="link"
          onClick={() => setIsNavOpen(false)}
        >
          projects
        </a>
      </div>
    </nav>
  );
};
export default MobileNav;
