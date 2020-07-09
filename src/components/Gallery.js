import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";

export default class Gallery extends Component {

  render() { 
    return (
      <div>
        <h1>Gallery Page</h1>
        {
          this.props.artworkData.map((m) => {
            return (<CanvasDraw
            key={m}
            disabled
            hideGrid
            saveData={m}
          />)
          })
    
        }
        
       
      </div>
    );
  }
}

