import React from "react";
import "./Widgets_Service.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome-library.js";
import Percent from "./Percent";
class Score extends React.Component {
  render() {
    const percent = this.props.percent;
    return (
      <div>
        <div className="score">
          <div>
            <img className="image-logo" src={this.props.logo} alt="logo" />
          </div>
          <div>{this.props.title}</div>
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
      </div>
    );
  }
}

export default Score;
