import { projects } from "../../data";
import SingleProject from "../SingleProject/SingleProject";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Projects = () => {
  // Slice projects for features on homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="projects-container" id="projects">
      <h2>Featured Projects</h2>
      <p className="projects-txt">
        My featured projects. Visit my{" "}
        <a
          href="https://github.com/EdwinSch?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="to github"
          className="intxt-link"
        >
          GitHub page
        </a>{" "}
        to see all my repositories.
      </p>

      {/* Projects Map */}
      <div className="projects-overview-wrapper">
        {featuredProjects.map((project) => {
          return <SingleProject key={project.id} {...project} />;
        })}
        <Link
          className="btn"
          to={"/projects"}
          style={{ width: 240, margin: "100px auto" }}
        >
          <div className="fill-layer"></div>
          load more projects
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};
export default Projects;
