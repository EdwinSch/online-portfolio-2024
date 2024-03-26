import { projects } from "../../data";
import SingleProject from "../SingleProject/SingleProject";

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
      </div>
    </section>
  );
};
export default Projects;
