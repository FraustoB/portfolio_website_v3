import react from "react";
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

  return (
    <div>
      <div className="card text-dark bg-white" style={divStyle}>
        <div className="card-body">
          <h5 className="card-title">{projectTitle}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{projectComment}</h6>
          <p className="card-text">{projectInfo}</p>
          <a href={liveSiteLink} className="card-link" target="_blank">
            Live Site
          </a>
          <a href={sourceCodeLink} className="card-link" target="_blank">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
