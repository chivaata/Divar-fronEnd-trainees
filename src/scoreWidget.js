import React, { useState } from "react";
import "./widgets.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesomeLibrary.js";
import Percent from "./percent";
import SubWidget from "./subWidget";

function Score({ item, logo, title, percent }) {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [isBodyOpen, setIsBodyOpen] = useState(false);

  const showOption = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  const showBody = () => {
    setIsBodyOpen(!isBodyOpen);
  };

  return (
    <>
      <div
        className="score"
        role="button"
        onClick={(e) => {
          showOption();
          console.log("click");
        }}
      >
        <div>
          <img className="image-logo" src={logo} alt="logo" />
        </div>
        <div
          onClick={(e) => {
            if (title === "بدنه") {
              showBody();
            }
          }}
        >
          {title}
        </div>
        <div>
          <Percent percent={percent} />
        </div>
        <div>
          <FontAwesomeIcon
            icon="angle-left"
            style={{ color: "#898c8a", float: "left" }}
          />
        </div>
      </div>
      <hr className="divider" />
      {(isBodyOpen || isOptionOpen) && <SubWidget title={title} item={item} />}
    </>
  );
}

export default Score;
