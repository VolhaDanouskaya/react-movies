import "./header.scss";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <p className="title">find your movie</p>
      <form noValidate autoComplete="off">
        <TextField
          id="search"
          label="What do you want to search?"
          type="search"
          variant="filled"
          color="secondary"
          id="search-input"
        />
        <Button variant="contained">Search</Button>
      </form>
    </div>
  );
};

export default SearchBar;
