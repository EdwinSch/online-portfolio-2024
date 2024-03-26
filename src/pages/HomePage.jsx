import Navigation from "../components/Navigation/Navigation";
import MobileNav from "../components/MobileNav/MobileNav";
import About from "../components/About/About";
import ContactLinks from "../components/ContactLinks/ContactLinks";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const HomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <main>
      {isNavOpen && (
        <div className="overlay">
          <MobileNav setIsNavOpen={setIsNavOpen} />
        </div>
      )}
      <div id="landing">
        {/* Header */}
        <header>
          <h1>Ed.</h1>
          <Navigation />
          <button
            className="nav-btn"
            onClick={() => setIsNavOpen(true)}
            aria-label="open nav"
          >
            <IoMenu />
          </button>
        </header>
        {/* About */}
        <About />
        {/* Contact Links */}
        <ContactLinks />
      </div>

      {/* Experience */}
      <Experience />

      {/* Projects */}
      <Projects />
    </main>
  );
};
export default HomePage;
