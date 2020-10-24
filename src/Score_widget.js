import React from "react";
import "./Widgets_Service.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome-library.js";

class Score extends React.Component {
  render() {
    return (
      <div>
        <div className="score">
          <div>
            <img className="image-logo" src={this.props.logo} alt="logo" />
          </div>
          <div>{this.props.title}</div>
          <div>score</div>
          <div>
            <FontAwesomeIcon icon="angle-left" style={{ color: "#898c8a" }} />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Score;
