import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Sketchbook from "./components/Sketchbook";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>App</h1>

        <Sketchbook />
      </div>
    );
  }
}

export default App;
