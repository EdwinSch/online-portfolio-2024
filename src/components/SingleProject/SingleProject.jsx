const SingleProject = ({
  title,
  screenshot,
  description,
  stack,
  deploy,
  repo,
}) => {
  return (
    <article className="single-prj-container">
      {/* Sreenshot */}
      <img src={screenshot} alt={title} className="screenshot" />

      {/* INFO */}
      <div className="info-wrapper">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        {/* BTNS */}
        <div className="btns-wrapper">
          <a
            className="btn btn-small"
            href={deploy}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="to deployed site"
          >
            <div className="fill-layer"></div>
            See Demo
          </a>
          <a
            className="btn btn-small"
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="to deployed site"
          >
            <div className="fill-layer"></div>
            Visit Repo
          </a>
        </div>
        {/* Stack */}
        <div className="stack-used">
          <p className="stack-txt">Stack:</p>
          {stack.map((icon, idx) => {
            return (
              <img key={idx} src={icon} alt="stack-icon" className="icon-map" />
            );
          })}
        </div>
      </div>
    </article>
  );
};
export default SingleProject;
