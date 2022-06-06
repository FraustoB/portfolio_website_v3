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
        <div className="Projects-grid">
          <div className="Projects-card-hover">
            <ProjectCards
              projectTitle="Kilometer to Pounds Converter"
              projectComment="React, React-Redux, TailwindCSS"
              projectInfo="I wanted to accomplish 2 things with this project: Learn React-Redux and Tailwind CSS, along
                  with solving a common problem among powerlifters. Converting Kilos to LBs easily. "
              liveSiteLink="https://fraustob.github.io/kilo-counter-deployment/"
              sourceCodeLink="https://github.com/FraustoB/kilo-counter-deployment"
            />
          </div>

          <div className="Projects-card-hover">
            <ProjectCards
              projectTitle="Macro Calculator"
              projectComment="Next, React, Sass"
              projectInfo="The goal of this project was to give clients of mine a very easy way of
          calculating how many calories they need to be eating in a day to gain, lose, or maintain weight. Along with
          breaking down the macro-nutrients (Protein, Carbs, Fats) they would need to consume to meet those goals. "
              liveSiteLink="https://tdee-macro-app-70d1n75s8-fraustob.vercel.app/"
              sourceCodeLink="https://github.com/FraustoB/TDEE_MACRO_app"
            />
          </div>
          <div className="Projects-card-hover">
            <ProjectCards
              projectTitle="WonTonSoup Proof of concept Site"
              projectComment="Next, React, Sass"
              projectInfo="Wanted practice with Next, React, and Sass, along with playing around with mobile-friendly layouts and 
          practices."
              liveSiteLink="https://wonton-website.vercel.app/"
              sourceCodeLink="https://github.com/FraustoB/wonton-website"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
