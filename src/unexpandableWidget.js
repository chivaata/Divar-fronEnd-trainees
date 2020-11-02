import React from "react";
import "./widgets.scss";
function Unexpandable({ value, text }) {
  return (
    <div>
      <div className="unexpandable">
        <div style={{ color: "#565957" }}>{text}</div>
        <div>{value}</div>
      </div>
      <br />
    </div>
  );
}

export default Unexpandable;
