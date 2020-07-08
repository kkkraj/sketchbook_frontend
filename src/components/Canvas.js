import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";

export default class Canvas extends Component {
  state = {
    saveData: null,
    savedCanvasArray: [],
  };

  handleFetchPostCanvasToBackEnd = (data) => {
    const destinationUrl = "http://localhost:3000/sketchbooks"
    const configObj = {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        Accept: "application/json",
      },
      body: {
        data_url: data,
        user_id: 10,
        gallery_id: 20
      }
    };
    fetch(destinationUrl, configObj);
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
              this.handleFetchPostCanvasToBackEnd(this.saveableCanvas.getSaveData());
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
          // saveData={this.state.saveData}
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
