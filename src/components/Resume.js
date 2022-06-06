import "../styles/Resume.scss";
import { BiSpreadsheet } from "react-icons/bi";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";
import pdf from "./B_Frausto_resume.pdf";

const Resume = () => {
  return (
    <div id="Resume" className="Resume-container">
      <main className="Resume-main">
        <h1>Connect</h1>
        <div className="Resume-grid">
          <a href={pdf} target="_blank" className="Icons-container">
            <BiSpreadsheet size={100} />
            <div className="Resume-links">Resume</div>
          </a>

          <a
            className="Icons-container"
            href="https://www.linkedin.com/in/brandon-s-frausto-13a712213/"
            target="_blank"
          >
            <FaLinkedin size={100} />
            <div className="Resume-links">LinkedIn</div>
          </a>

          <a
            className="Icons-container"
            href="https://github.com/FraustoB"
            target="_blank"
          >
            <FaGithubAlt size={100} />
            <div className="Resume-links">GitHub</div>
          </a>
        </div>

        {/* <footer>
          <a href="frausto.dev">frausto.dev</a>
        </footer> */}
      </main>
    </div>
  );
};

export default Resume;
