import "./body.scss";
import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const MoviesSorter = () => {
  return (
    <>
      <div className="sort">
        <p>Sort by </p>
        <FormControl className="sort-form">
          <Select labelId="simple-select" id="simple-select" defaultValue="releaseDate">
            <MenuItem value="releaseDate" selected={true}>
              Release date
            </MenuItem>
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default MoviesSorter;
