import React, { useState, useEffect } from "react";
import "./widgets.scss";
import Title from "./titleWidget";
import Unexpandable from "./unexpandableWidget";
import Score from "./scoreWidget";

function Widgets() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/v1/widgets/actions")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setIsLoaded(true);
        setItems(json);
      });
  }, []);

  if (isLoaded === false) {
    return (
      <div className="loading">
        <h1>درحال‌بارگذاری... </h1>
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
            return (
              <Score title={title} logo={logo} percent={percent} item={item} />
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}

export default Widgets;
