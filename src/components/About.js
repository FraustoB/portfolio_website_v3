import React from "react";
import "../styles/About.scss";
import Cards from "./smaller-components/cards";

const About = () => {
  return (
    <div id="About" className="About-container">
      <main className="About-main">
        <h1>So... Who Am I?</h1>
        <h2>I am </h2>
        <Cards
          title=" A Problem Solver"
          tagline="Yes, I work to fix things"
          info="This is where I will put info about myself"
        />
        <Cards
          title=" A Power Lifter"
          tagline="Heavy Circles Are Fun"
          info="Of my favorite hobbys, of which would be powerlifting"
        />

        <Cards
          title=" A People Person"
          tagline="Working with others is the reward"
          info="I believe that some (not all) of the best solutions come from collboration"
        />
        <Cards
          title="Persistence"
          tagline="The world keeps growing and so will I"
          info="Life is changing all the time; new technologies are being created, shipped, and integrated. And my goal is to stay at the for
           front of those changes. I continue to adapt by researching, learning, and implementing  "
        />
      </main>
    </div>
  );
};

export default About;
