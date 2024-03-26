import Navigation from "../components/Navigation/Navigation";
import About from "../components/About/About";
import ContactLinks from "../components/ContactLinks/ContactLinks";
import Experience from "../components/Experience/Experience";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const HomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {isNavOpen && <div className="overlay"></div>}
      <main id="landing">
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
      </main>

      {/* Experience */}
      <Experience />
    </>
  );
};
export default HomePage;
