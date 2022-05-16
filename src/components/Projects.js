import "../styles/Projects.scss";
import ProjectCards from "./smaller-components/projectCards";

const Projects = () => {
  const h1Style = {
    color: "white",
    marginTop: "4rem",
  };
  return (
    <div id="Projects">
      <main className="Projects-main">
        <h1 style={h1Style}>PROJECTS</h1>
        <ProjectCards
          projectTitle="Kilometer to Pounds Converter"
          projectComment="Converting the weight"
          projectInfo="no, THIS is where I taco about it"
          liveSiteLink="https://fraustob.github.io/kilo-counter-deployment/"
          sourceCodeLink="https://github.com/FraustoB/kilo-counter-deployment"
        />
      </main>
    </div>
  );
};

export default Projects;
