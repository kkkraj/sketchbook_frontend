import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import Toolbox from "./Toolbox";

class Sketchbook extends Component {
  state = {
    color: "#ffc600",
    width: 400,
    height: 400,
    brushRadius: 10,
    lazyRadius: 12,
  };
  // componentDidMount() {
  //   // let's change the color randomly every 2 seconds. fun!
  //   window.setInterval(() => {
  //     this.setState({
  //       color: "#" + Math.floor(Math.random() * 16777215).toString(16),
  //     });
  //   }, 2000);
  // }
  render() {
    return (
      <div>
        {/* <h1>React Canvas Draw</h1>

        <h2>Save & Load</h2>
        <p>
          This part got me most excited. Very easy to use saving and loading of
          drawings. It even comes with a customizable loading speed to control
          whether your drawing should load instantly (loadTimeOffset = 0) or
          appear after some time (loadTimeOffset > 0){" "}
          <span>{`<CanvasDraw loadTimeOffset={10} />`}</span>
        </p>
        <p>Try it out! Draw something, hit "Save" and then "Load".</p> */}
        <div>
          <button
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
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
            <label>Width:</label>
            <input
              type="number"
              value={this.state.width}
              onChange={(e) =>
                this.setState({ width: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <div>
            <label>Height:</label>
            <input
              type="number"
              value={this.state.height}
              onChange={(e) =>
                this.setState({ height: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <div>
            <label>Brush-Radius:</label>
            <input
              type="number"
              value={this.state.brushRadius}
              onChange={(e) =>
                this.setState({ brushRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <div>
            <label>Lazy-Radius:</label>
            <input
              type="number"
              value={this.state.lazyRadius}
              onChange={(e) =>
                this.setState({ lazyRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
        </div>

        <CanvasDraw
          // hideGrid
          ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
        />
        <Toolbox />
        {/* <p>
          The following is a disabled canvas with a hidden grid that we use to
          load & show your saved drawing.
        </p> */}
        {/* <button
          onClick={() => {
            this.loadableCanvas.loadSaveData(
              localStorage.getItem("savedDrawing")
            );
          }}
        > */}
        {/* Load Saved Canvas
        </button>
        <CanvasDraw
          disabled
          hideGrid
          ref={(canvasDraw) => (this.loadableCanvas = canvasDraw)}
          saveData={localStorage.getItem("savedDrawing")}
        /> */}
        {/* <p>
          The saving & loading also takes different dimensions into account.
          Change the width & height, draw something and save it and then load it
          into the disabled canvas. It will load your previously saved
          masterpiece scaled to the current canvas dimensions.
        </p> */}
        {/* <p>
          That's it for now! Take a look at the{" "}
          <a href="https://github.com/mBeierl/react-canvas-draw/tree/master/demo/src">
            source code of these examples
          </a>
          .
        </p> */}
      </div>
    );
  }
}

export default Sketchbook;
