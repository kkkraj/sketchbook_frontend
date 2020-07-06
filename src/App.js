import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sketchbook from "./components/Sketchbook";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Navbar />
      <Sketchbook />
    </div>
  );
}

export default App;
