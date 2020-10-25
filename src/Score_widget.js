import React from "react";
import "./Widgets_Service.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome-library.js";
import Percent from "./Percent";
import Options from "./Options";
class Score extends React.Component {
  constructor(props) {
    super(props);
    this.showOption = this.showOption.bind(this);
    this.state = {
      isOptionOpen: false,
    };
  }
  showOption() {
    this.setState({ isOptionOpen: !this.state.isOptionOpen });
  }
  render() {
    const percent = this.props.percent;
    const title = this.props.title;
    const logo = this.props.logo;
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
          <div>{title}</div>
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
        <Options show={this.state.isOptionOpen} title={title} />
      </>
    );
  }
}

export default Score;
