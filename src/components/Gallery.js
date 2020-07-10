import React from "react";
import CanvasDraw from "react-canvas-draw";
import Grid from "@material-ui/core/Grid";

const Gallery = ({ artworkData, handleDeleteClick }) => {
  return (
    <div>
      <h1>Gallery Page</h1>
      {artworkData.map((drawing) => {
        return (
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            <CanvasDraw
              key={drawing.id}
              hideGrid
              disabled
              immediateLoading={true}
              saveData={drawing.data_url}
            />
            <button onClick={() => handleDeleteClick(drawing)}>Delete</button>
          </Grid>
        );
      })}
    </div>
  );
};

export default Gallery;
