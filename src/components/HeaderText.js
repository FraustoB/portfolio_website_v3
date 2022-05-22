import React from "react";
import "../styles/HeaderText.scss";

const HeaderText = () => {
  return (
    <div id="Intro" className="HeaderText-main">
      <main>
        <h1 className="Name-text">
          <div>Brandon</div>
          <div>Shin</div>
          <div>Frausto</div>{" "}
        </h1>

        <p className="Main-text">Web Developer</p>

        {/* <a
          className="Header-Resume"
          href="https://docs.google.com/document/d/1oioq11blSa_0rQY0p_s70JdyeM1fAd2SAdv_RqAn6II/edit#"
          target="_blank"
        >
          Resume
        </a> */}

        <p className="Header-P">
          {`</>`} <span className="Header-Underscore">{`_`}</span>
        </p>
      </main>
    </div>
  );
};

export default HeaderText;
