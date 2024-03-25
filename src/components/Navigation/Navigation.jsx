import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="links-container">
        <Link to={"#landing"} className="link">
          home
        </Link>
        <Link to={"/#experience"} className="link">
          experience
        </Link>
        <Link to={"#projects"} className="link">
          projects
        </Link>
        <Link to={"#contact"} className="link">
          contact
        </Link>
      </ul>
    </nav>
  );
};
export default Navigation;
