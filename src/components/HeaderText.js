import React from "react";
import "../styles/HeaderText.scss";
import { BsArrowDownSquareFill } from "react-icons/bs";

const HeaderText = () => {
  return (
    <div id="Intro" className="HeaderText-main">
      <main className="HeaderText-subMain">
        <h1 className="Name-text">
          <div className="HeaderText-animation">Brandon</div>
          <div className="HeaderText-animation">Shin</div>
          <div className="HeaderText-animation">Frausto</div>{" "}
        </h1>

        {/* <a
          className="Header-Resume"
          href="https://docs.google.com/document/d/1oioq11blSa_0rQY0p_s70JdyeM1fAd2SAdv_RqAn6II/edit#"
          target="_blank"
        >
          Resume
        </a> */}
      </main>
      <div className="Header-P">
        <div className="Main-text">
          <h2 className="slide-right">
            {`<`}Web Developer{`/>`}
          </h2>
        </div>
        {/* <span className="Header-Underscore">{`_`}</span> */}
      </div>

      <div className="HeaderText-arrow">
        <BsArrowDownSquareFill />
      </div>
    </div>
  );
};

export default HeaderText;
