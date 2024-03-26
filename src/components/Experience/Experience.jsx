import { stack } from "../../data";

const Experience = () => {
  return (
    <section className="experience-container" id="experience">
      <h2>Experience</h2>
      <p className="experience-txt">
        I love to work in these languages and tools:
      </p>
      <div className="stack-wrapper">
        {stack.map((icon, idx) => {
          return (
            <article key={idx} className="icon-wrapper">
              <img src={icon.icon} alt={icon.title} className="icon-img" />
              <p className="stack-title">{icon.title}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Experience;
