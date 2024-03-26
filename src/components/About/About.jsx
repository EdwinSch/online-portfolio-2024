import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <h2>Hi I'm Ed.</h2>
      <h3>Front-End Developer</h3>
      <p className="about-txt">
        Welcome to my journey into the world of front-end development. With a
        passion for crafting immersive digital experiences, I've embarked on an
        exciting adventure, pushing the boundaries of creativity and technology
        to bring ideas to life.
      </p>
      <a href="#projects" className="btn">
        <div className="fill-layer"></div>
        browse projects
      </a>
    </div>
  );
};
export default About;
