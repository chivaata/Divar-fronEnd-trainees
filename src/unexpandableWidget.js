import React from "react";
import "./widgets.scss";
class Unexpandable extends React.Component {
  render() {
    return (
      <div>
        <div className="unexpandable">
          <div style={{ color: "#565957" }}>{this.props.text}</div>
          <div>{this.props.value}</div>
        </div>
        <br />
      </div>
    );
  }
}

export default Unexpandable;
