import React from "react";

function SubWidget({ item }) {
  return (
    <div className="option">
      {item.data.action.payload.widget_list.map((list) => {
        if (list.widget_type === "DESCRIPTION_ROW") {
          return <div>{list.data.text}</div>;
        }
      })}
    </div>
  );
}

export default SubWidget;
