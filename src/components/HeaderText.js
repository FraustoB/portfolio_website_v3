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
      </main>

      <div className="Header-P">
        <div className="Main-text">
          <h2 className="slide-right">
            {`<`} Web Developer{`/>`}
          </h2>
        </div>
      </div>

      <div className="HeaderText-arrow">
        <BsArrowDownSquareFill />
      </div>
    </div>
  );
};

export default HeaderText;
