import useWindowDimensions from "../smaller-components/useWindowDimensions";
const ProjectCards = ({
  projectTitle,
  projectComment,
  projectInfo,
  liveSiteLink,
  sourceCodeLink,
}) => {
  const { height, width } = useWindowDimensions();

  let divSize = "18rem";

  const resizeDiv = (divSize, width) => {
    if (width < 768) {
      divSize = "20rem";
      return divSize;
    } else if (width >= 768 && width < 1024) {
      divSize = "29rem";
    } else if (width >= 1024) {
      divSize = "24rem";
    }
    return divSize;
  };

  let curDiv = resizeDiv(divSize, width);

  const divStyle = {
    width: curDiv,
    marginTop: "1rem",
    fontSize: "1.25rem",
    marginBottom: "2rem",
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
