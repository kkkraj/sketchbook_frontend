import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";

export default class Canvas extends Component {
  state = {
    saveData: [],
  };

  handleCanvasSaveDataClick = () => {
    const newDrawing = this.saveableCanvas.getSaveData()
    this.setState((previousState) => {
      return {saveData: [...previousState.saveData, newDrawing]}
    });
    this.handleFetchPostCanvasToBackEnd(newDrawing)
  }

  handleFetchPostCanvasToBackEnd = (data) => {
    const destinationUrl = "http://localhost:3000/sketchbooks"
    const configObj = {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sketchbook: {
          data_url: data,
          user_id: 5,
          gallery_id: 1
        }
      })
    };
    fetch(destinationUrl, configObj);
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleCanvasSaveDataClick} >
            Save
          </button>

          <button onClick={() => {this.saveableCanvas.clear();}} >
            Clear
          </button>

          <button onClick={() => { this.saveableCanvas.undo(); }} >
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
          ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
          brushColor={this.props.color}
          brushRadius={this.props.brushRadius}
          lazyRadius={this.props.lazyRadius}
          canvasWidth={this.props.canvasWidth}
          canvasHeight={this.props.canvasHeight}
          hideGrid={this.props.hideGrid}
        />
        <div>
        </div>
      </div>
    );
  }
}
