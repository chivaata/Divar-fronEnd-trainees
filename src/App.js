import React from "react";
import "./App.scss";
import Widgets from "./widgetsService";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Widgets />
      </div>
    );
  }
}

export default App;
