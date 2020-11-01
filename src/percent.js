import React from "react";
import "./widgets.scss";

class Percent extends React.Component {
  render() {
    const percent = this.props.percent;
    // console.log(percent);

    if (percent <= 15) {
      return <div className="lessThan15">bisar</div>;
    }
    if (15 < percent && percent <= 30) {
      return <div className="lessThan30"></div>;
    }
    if (30 < percent && percent <= 45) {
      return <div className="lessThan45"></div>;
    }
    if (45 < percent && percent <= 60) {
      return <div className="lessThan60"></div>;
    }
    if (60 < percent && percent <= 80) {
      return <div className="lessThan80"></div>;
    }
    if (80 < percent && percent <= 90) {
      return <div className="lessThan90"></div>;
    } else {
      return <div className="lessThan100"></div>;
    }
  }
}

export default Percent;
