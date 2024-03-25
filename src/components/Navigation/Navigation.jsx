import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="links-container">
        <Link to={"#homepage"} className="link">
          home
        </Link>
        <Link to={"/"} className="link">
          experience
        </Link>
        <Link to={"/"} className="link">
          projects
        </Link>
        <Link to={"/"} className="link">
          contact
        </Link>
      </ul>
    </nav>
  );
};
export default Navigation;
