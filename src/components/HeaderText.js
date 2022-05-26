import React from "react";
import "../styles/HeaderText.scss";

const HeaderText = () => {
  return (
    <div id="Intro" className="HeaderText-main">
      <main className="HeaderText-subMain">
        <h1 className="Name-text">
          <div>Brandon</div>
          <div>Shin</div>
          <div>Frausto</div>{" "}
        </h1>

        {/* <a
          className="Header-Resume"
          href="https://docs.google.com/document/d/1oioq11blSa_0rQY0p_s70JdyeM1fAd2SAdv_RqAn6II/edit#"
          target="_blank"
        >
          Resume
        </a> */}

        <div className="Header-P">
          <div className="Main-text">
            {`<`}Web Developer{`/>`}
          </div>
          {/* <span className="Header-Underscore">{`_`}</span> */}
        </div>
      </main>
    </div>
  );
};

export default HeaderText;
