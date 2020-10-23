import React from "react";
import "./Widgets_Service.scss";
class Unexpandable extends React.Component {
  render() {
    return (
      <div className="unexpandable">
        <div>{this.props.text}</div>
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default Unexpandable;
