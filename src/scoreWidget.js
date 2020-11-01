import React from "react";
import "./Widgets_Service.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome-library.js";
import Percent from "./Percent";
import SubWidget from "./Sub_widget";

class Score extends React.Component {
  state = {
    isOptionOpen: false,
    isBodyOpen: false,
  };

  showOption = () => {
    this.setState({ isOptionOpen: !this.state.isOptionOpen });
  };

  showBody = () => {
    this.setState({ isBodyOpen: !this.state.isBodyOpen });
  };

  render() {
    const { item, logo, title, percent } = this.props;
    const { isBodyOpen, isOptionOpen } = this.state;
    return (
      <>
        <div
          className="score"
          role="button"
          onClick={(e) => {
            this.showOption();
            console.log("click");
          }}
        >
          <div>
            <img className="image-logo" src={logo} alt="logo" />
          </div>
          <div
            onClick={(e) => {
              if (title === "بدنه") {
                this.showBody();
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
        {(isBodyOpen || isOptionOpen) && (
          <SubWidget title={title} item={item} />
        )}
      </>
    );
  }
}

export default Score;
