import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div>
        <div style={{ color: "grey" }}>{this.props.text}</div>
      </div>
    );
  }
}

export default Title;
