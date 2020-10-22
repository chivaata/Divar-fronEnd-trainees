import React from "react";
import "./Widgets.scss";
import Title from "./Title-widget";
import Unexpandable from "./Unexpandable_widget";
import Score from "./Score_widget";
class Widgets extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Unexpandable />
        <Score />
      </div>
    );
  }
}

export default Widgets;
