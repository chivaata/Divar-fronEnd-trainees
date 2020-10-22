import React from "react";
import "./Widgets_Service.scss";
import Title from "./Title-widget";
import Unexpandable from "./Unexpandable_widget";
import Score from "./Score_widget";
class Widgets extends React.Component {
  render() {
    return (
      <div className="main_widgets">
        <Title />
        <br />
        <Unexpandable />
        <hr />
        <Score />
      </div>
    );
  }
}

export default Widgets;
