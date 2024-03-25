import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <h2>Hi I'm Ed.</h2>
      <h3>Front-End Developer</h3>
      <p className="about-txt">
        &Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio iusto,
        eum nulla ullam temporibus necessitatibus. Autem natus inventore ratione
        officiis, itaque molestiae eos corrupti minima, in dignissimos, saepe
        voluptatem totam.
      </p>
      <Link to="#projects" className="btn">
        <div className="fill-layer"></div>
        browse projects
      </Link>
    </div>
  );
};
export default About;
