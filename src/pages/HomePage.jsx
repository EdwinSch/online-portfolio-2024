import Navigation from "../components/Navigation/Navigation";
import About from "../components/About/About";
import ContactLinks from "../components/ContactLinks/ContactLinks";

const HomePage = () => {
  return (
    <main id="landing">
      <header>
        <h1>Ed.</h1>
        <Navigation />
      </header>
      <About />
      <ContactLinks />
    </main>
  );
};
export default HomePage;
