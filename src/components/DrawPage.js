import React, { Component } from "react";

import Canvas from "./Canvas";
import ColorPicker from "./ColorPicker";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const canvas = document.getElementById("canvas");

export default class DrawPage extends Component {
  state = {
    // Canvas
    color: "#000000",
    width: 600,
    height: 700,
    brushRadius: 3,
    lazyRadius: 5,
    hideGrid: true,

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
    // const outterStyle = {
    //   width: "100%",
    // };
    // const innerStyle = {
    //   display: "grid",
    //   gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    //   // justifyContent: 'center',
    //   // alignContent: 'center',
    //   margin: "0 auto",
    //   alighItem: "center",
    // };

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
          <div>
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
              />
            </Container>
          </div>
        </Grid>
      </div>
    );
  }
}
