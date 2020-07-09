import React, { Component } from "react";

import Canvas from "./Canvas";
import Gallery from './Gallery';
import ColorPicker from "./ColorPicker";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// import CanvasDraw from "react-canvas-draw";

// const canvas = document.getElementById("canvas");

export default class DrawPage extends Component {
  state = {
    // Canvas
    color: "#000000",
    width: 600,
    height: 700,
    brushRadius: 3,
    lazyRadius: 1,
    hideGrid: true,
    // from Canvas for Gallery
    // saveData: [],

    // ColorPicker
    background: "#000000",
  };

//   handleCanvasSaveDataClick = (data) => {
    
//     // const newDrawing = this.saveableCanvas.getSaveData()
//     this.setState((previousState) => {
//     return {saveData: [...previousState.saveData, newDrawing]}
//     });
//     this.handleFetchPostCanvasToBackEnd(newDrawing)
//   }

//   handleFetchPostCanvasToBackEnd = (data) => {
//     const destinationUrl = "http://localhost:3000/sketchbooks"
//     const configObj = {
//       method: "POST",
//       headers: {
//         Authorization: localStorage.getItem("token"),
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         sketchbook: {
//           data_url: data,
//           user_id: 5,
//           gallery_id: 1
//         }
//       })
//     };
//     fetch(destinationUrl, configObj);
//   };

  handleChangeComplete = (color) => {
    this.setState({
      background: color.hex,
      color: color.hex,
    });
  };

  handleOnBrushRadiusChange = (event) => {
    this.setState({
      brushRadius: parseInt(event.target.value, 10),
    });
  };

  render() {
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <div>
            <Container fixed>
              <ColorPicker
                background={this.state.background}
                handleChangeComplete={this.handleChangeComplete}
              />
            </Container>
          </div>
          <div id="canvas">
            <Container fixed>
              <Canvas
                savData={this.state.saveData}
                color={this.state.color}
                brushRadius={this.state.brushRadius}
                lazyRadius={this.state.lazyRadius}
                canvasWidth={this.state.width}
                canvasHeight={this.state.height}
                hideGrid={this.state.hideGrid}
                onBrushRadiusChange={this.handleOnBrushRadiusChange}
                handleCanvasSaveDataClick={this.handleCanvasSaveDataClick}
              />
            </Container>
          </div>
        </Grid>
        {/* <Gallery artworkData={this.state.saveData}/> */}
      </div>
    );
  }
}
