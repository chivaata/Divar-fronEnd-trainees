import React from "react";

class Options extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return <div className="option"></div>;
    }
  }
}

export default Options;
