import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="links-container">
        <a href="#landing" className="link">
          home
        </a>
        <a href="#experience" className="link">
          experience
        </a>
        <a to="#projects" className="link">
          projects
        </a>
        <a to="#contact" className="link">
          contact
        </a>
      </ul>
    </nav>
  );
};
export default Navigation;
