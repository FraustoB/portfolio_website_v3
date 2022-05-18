import "../styles/Projects.scss";
import ProjectCards from "./smaller-components/projectCards";

const Projects = () => {
  const h1Style = {
    color: "azure",
    marginTop: "5rem",
  };
  return (
    <div id="Projects">
      <main className="Projects-main">
        <h2 style={h1Style}>PROJECTS</h2>
        <ProjectCards
          projectTitle="Kilometer to Pounds Converter"
          projectComment="Converting the weight"
          projectInfo="no, THIS is where I taco about it"
          liveSiteLink="https://fraustob.github.io/kilo-counter-deployment/"
          sourceCodeLink="https://github.com/FraustoB/kilo-counter-deployment"
        />
        <ProjectCards
          projectTitle="Macro Calculator"
          projectComment="For those in the fitness world"
          projectInfo="Wanted to create something"
          liveSiteLink="https://tdee-macro-app-70d1n75s8-fraustob.vercel.app/"
          sourceCodeLink="https://github.com/FraustoB/TDEE_MACRO_app"
        />
        <ProjectCards
          projectTitle="WonTonSoup Proof of concept Site"
          projectComment="If this was an actual restaurant the page would be fire"
          projectInfo="Website for Asian cuisine"
          liveSiteLink="https://wonton-website.vercel.app/"
          sourceCodeLink="https://github.com/FraustoB/wonton-website"
        />
      </main>
    </div>
  );
};

export default Projects;
