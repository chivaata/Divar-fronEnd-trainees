import React from "react";

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "بدنه کاملا سالم و بدون رنگ است.",
      rings: "هر چهار لاستیک سالم است.",
      inside: "aaa",
      engine: "aaa",
      tormoz: "vvv",
      carOption: "ccc",
      carDoc: "www",
    };
  }
  render() {
    if (!this.props.show) {
      return null;
    } else {
      if (this.props.title === "بدنه") {
        return <div className="option">{this.state.body}</div>;
      }
      if (this.props.title === "لاستیک و رینگ‌ها") {
        return <div className="option">{this.state.rings}</div>;
      }
      if (this.props.title === "فضای داخل و تجهیزات") {
        return <div className="option">{this.state.inside}</div>;
      }
      if (this.props.title === "موتور و انتقال قدرت") {
        return <div className="option">{this.state.engine}</div>;
      }
      if (this.props.title === "تعلیق، فرمان و ترمز") {
        return <div className="option">{this.state.tormoz}</div>;
      }
      if (this.props.title === "آپشن‌ها") {
        return <div className="option">{this.state.carOption}</div>;
      }
      if (this.props.title === "سند و مدارک") {
        return <div className="option">{this.state.carDoc}</div>;
      }
    }
  }
}

export default Options;
