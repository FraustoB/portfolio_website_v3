import "../styles/Resume.scss";
import { BiSpreadsheet } from "react-icons/bi";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";

const Resume = () => {
  return (
    <div id="Resume" className="Resume-container">
      <main className="Resume-main">
        <h1>Important Links!</h1>
        <div className="Icons-container">
          <BiSpreadsheet size={75} />
          <a
            href="https://docs.google.com/document/d/1oioq11blSa_0rQY0p_s70JdyeM1fAd2SAdv_RqAn6II/edit?usp=sharing"
            target="_blank"
            className="Resume-links"
          >
            RESUME LINK
          </a>
        </div>
        <div className="Icons-container">
          <FaLinkedin size={75} />
          <a
            href="https://www.linkedin.com/in/brandon-s-frausto-13a712213/"
            target="_blank"
            className="Resume-links"
          >
            LinkedIn
          </a>
        </div>
        <div className="Icons-container">
          <FaGithubAlt size={75} />
          <a
            href="https://github.com/FraustoB"
            target="_blank"
            className="Resume-links"
          >
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
};

export default Resume;
