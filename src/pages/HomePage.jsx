import Navigation from "../components/Navigation/Navigation";
import About from "../components/About/About";
import ContactLinks from "../components/ContactLinks/ContactLinks";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const HomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <main>
      {isNavOpen && <div className="overlay"></div>}
      <div id="landing">
        {/* Header */}
        <header>
          <h1>Ed.</h1>
          <Navigation />
          <button className="nav-btn" onClick={() => setIsNavOpen(true)}>
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
