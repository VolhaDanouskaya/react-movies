import "./header.scss";
import React from "react";
import Button from "@material-ui/core/Button";

const AddMovieButton = () => {
  return (
    <Button id="button-add-movie" variant="contained" size="large">
      + Add Movie
    </Button>
  );
};

export default AddMovieButton;
