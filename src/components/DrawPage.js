import React, { Component } from "react";

import Canvas from "./Canvas";
import ColorPicker from "./ColorPicker";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export default class DrawPage extends Component {
  state = {
    // Canvas
    color: "#000000",
    brushRadius: 3,
    // ColorPicker
    background: "#000000",
  };

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
                color={this.state.color}
                brushRadius={this.state.brushRadius}
                lazyRadius={1}
                canvasWidth={600}
                canvasHeight={700}
                hideGrid={true}
                onBrushRadiusChange={this.handleOnBrushRadiusChange}
                handleCanvasSaveDataClick={this.handleCanvasSaveDataClick}
              />
            </Container>
          </div>
        </Grid>
      </div>
    );
  }
}
