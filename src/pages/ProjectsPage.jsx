import { Link } from "react-router-dom";
import { projects } from "../data";
import SingleProject from "../components/SingleProject/SingleProject";
import { FaChevronLeft } from "react-icons/fa6";

const ProjectsPage = () => {
  // Window start at top
  window.scrollTo(0, 0);

  return (
    <main className="projects-page-container">
      <Link to={"/"} className="back-btn">
        <FaChevronLeft /> Go back
      </Link>
      <h2>All Featured Projects</h2>

      {/* Full Projects Overview Map */}
      <div className="projects-overview-wrapper">
        {projects.map((project) => {
          return <SingleProject key={project.id} {...project} />;
        })}
      </div>
    </main>
  );
};
export default ProjectsPage;
