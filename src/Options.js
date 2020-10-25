import React from "react";

class Options extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return <div>hello</div>;
    }
  }
}

export default Options;
