import "../styles/Resume.scss";
import { BiSpreadsheet } from "react-icons/bi";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";

const Resume = () => {
  return (
    <div id="Resume" className="Resume-container">
      <main className="Resume-main">
        <h1>Connect With Me</h1>
        <div className="Resume-grid">
          <a
            href="https://docs.google.com/document/d/1oioq11blSa_0rQY0p_s70JdyeM1fAd2SAdv_RqAn6II/edit?usp=sharing"
            target="_blank"
            className="Icons-container"
          >
            <BiSpreadsheet size={100} />
            <div className="Resume-links">RESUME</div>
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
