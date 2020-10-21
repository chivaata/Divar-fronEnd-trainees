import React from "react";
import "./App.scss";
import Widgets from "./Widgets";
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
