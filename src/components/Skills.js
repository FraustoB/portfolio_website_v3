import React from "react";
import "../styles/Skills.scss";
import { FaReact, FaNodeJs, FaGoogle, FaSass, FaNpm } from "react-icons/fa";
import {
  SiRedux,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiStackoverflow,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills">
      <main className="Skills-main">
        <h4>What I can do well</h4>
        <div className="container">
          <div className="row skill-gap">
            <div className="col react-icons">
              <SiHtml5 size={75} />
              HTML5
            </div>
            <div className="col react-icons">
              <SiCss3 size={75} />
              Css3
            </div>
            <div className="col react-icons">
              <SiJavascript size={75} />
              JavaScript
            </div>
          </div>
          <div className="row skill-gap">
            <div className="col react-icons">
              <FaReact size={75} />
              REACT
            </div>
            <div className="col react-icons">
              <SiRedux size={75} />
              React Redux
            </div>
            <div className="col react-icons">
              <FaNodeJs size={75} />
              Node Js
            </div>
          </div>

          <div className="row skill-gap">
            <div className="col react-icons">
              <SiMongodb size={75} />
              MongoDB
            </div>
            <div className="col react-icons">
              <SiTailwindcss size={75} />
              Tailwind Css
            </div>
            <div className="col react-icons">
              <SiBootstrap size={75} />
              Bootstrap
            </div>
          </div>

          <div className="row skill-gap">
            <div className="col react-icons">
              <SiGithub size={75} />
              Github
            </div>
            <div className="col react-icons">
              <SiStackoverflow size={75} />
              Stack Overflow
            </div>
            <div className="col react-icons">
              <FaGoogle size={75} />
              Google
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
