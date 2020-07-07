import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";

export default class Canvas extends Component {
  state = {
    saveData: null,
  };

  fetchPostFunction = (data) => {
    const config = {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        Accept: "application/json",
      },
      body: {
        data_url: data,
      },
    };
    fetch("http://localhost:3000/sketchbooks", config);
  };

  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.setState({
                saveData: this.saveableCanvas.getSaveData(),
              });
              console.log(this.saveableCanvas.getSaveData());
              this.fetchPostFunction(this.saveableCanvas.getSaveData());
            }}
          >
            Save
          </button>

          <button
            onClick={() => {
              this.saveableCanvas.clear();
            }}
          >
            Clear
          </button>

          <button
            onClick={() => {
              this.saveableCanvas.undo();
            }}
          >
            Undo
          </button>

          <div>
            <label>Brush Size: </label>
            <input
              type="number"
              value={this.props.brushRadius}
              onChange={(event) => this.props.onBrushRadiusChange(event)}
            />
          </div>
        </div>

        <CanvasDraw
          saveData={this.state.saveData}
          ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
          brushColor={this.props.color}
          brushRadius={this.props.brushRadius}
          lazyRadius={this.props.lazyRadius}
          canvasWidth={this.props.canvasWidth}
          canvasHeight={this.props.canvasHeight}
          hideGrid={this.props.hideGrid}
        />
      </div>
    );
  }
}
