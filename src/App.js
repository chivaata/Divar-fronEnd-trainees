import React from "react";
import "./App.css";
import Widgets from "./widgets";
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
