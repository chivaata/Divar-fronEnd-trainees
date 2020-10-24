import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.text}</div>
        <br />
      </div>
    );
  }
}

export default Title;
