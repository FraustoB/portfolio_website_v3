import React from "react";
import "../styles/About.scss";
import Cards from "./smaller-components/cards";

const About = () => {
  return (
    <div id="About" className="About-container">
      <div className="h1">Who am I?</div>
      <h2>I am... </h2>
      <main className="About-main">
        <Cards
          title=" A Problem Solver"
          tagline="Yes, I work to fix things"
          info="I almost cannot allow myself to let a problem go unsolved. I'll wrack by brain for hours figuring out different
          possible solutions, searching the web for answers, and talking with others and brainstorming together. Even if that means
          coming back to the problem with a fresh mindset at a later time, a problem I run into will not go unsolved."
          className="About-cards"
        />

        <Cards
          title=" A Power Lifter"
          tagline="Heavy Circles Are Fun"
          info="Power lifting has been an enjoyable hobby of mine for over a year now. Not only is training
          for competitive meets incredibly enjoyable, the community itslef would be the highlight of the sport."
        />

        <Cards
          title=" A Collaborator"
          tagline="Working with others is the reward"
          info="I believe that some (not all) of the best solutions come from collboration. Talking with one another, picking each other's
          brains, and coming together to find out an effective answer to the problem ahead of us. "
        />
        <Cards
          title="Persistent"
          tagline="The world keeps growing and so will I"
          info="Life is changing all the time; new technologies are being created, shipped, and integrated. And my goal is to stay at the forefront 
          of those changes. I continue to adapt by researching, learning, and implementing  "
        />
      </main>
    </div>
  );
};

export default About;
