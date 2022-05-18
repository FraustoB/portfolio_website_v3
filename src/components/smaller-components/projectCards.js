const ProjectCards = ({
  projectTitle,
  projectComment,
  projectInfo,
  liveSiteLink,
  sourceCodeLink,
}) => {
  const divStyle = {
    width: "18rem",
    marginTop: "1rem",
  };
  const linkStyle = {
    background: "#7a7c80",
    borderRadius: "10px",
    padding: "0.3rem",
    color: "white",
    fontWeight: "600",
  };

  const h2Style = {
    fontWeight: "600",
  };
  return (
    <div>
      <div className="card text-dark bg-white" style={divStyle}>
        <div className="card-body">
          <h5 className="card-title" style={h2Style}>
            {projectTitle}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">{projectComment}</h6>
          <p className="card-text">{projectInfo}</p>
          <a
            href={liveSiteLink}
            className="card-link"
            style={linkStyle}
            target="_blank"
          >
            Live Site
          </a>
          <a
            href={sourceCodeLink}
            className="card-link"
            style={linkStyle}
            target="_blank"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
