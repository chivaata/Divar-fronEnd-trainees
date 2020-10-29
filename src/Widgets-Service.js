import React from "react";
import "./Widgets_Service.scss";
import Title from "./Title-widget";
import Unexpandable from "./Unexpandable_widget";
import Score from "./Score_widget";

class Widgets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/widgets")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          isLoaded: true,
        });
      });
  }

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return (
        <div>
          <h1>...درحال‌بارگذاری </h1>
        </div>
      );
    } else {
      return (
        <div className="main_widgets">
          {items.map((item) => {
            if (item.widget_type === "TITLE_ROW") {
              const text = item.data.text;
              return <Title text={text} />;
            }
            if (item.widget_type === "UNEXPANDABLE_ROW") {
              const text = item.data.title;
              const value = item.data.value;
              return <Unexpandable text={text} value={value} />;
            }
            if (item.widget_type === "SCORE_ROW") {
              const title = item.data.title;
              const logo = item.data.image_url;
              const percent = item.data.percentage_score;
              return <Score title={title} logo={logo} percent={percent} />;
            }
          })}
        </div>
      );
    }
  }
}

export default Widgets;
