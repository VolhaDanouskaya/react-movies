import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {

    },
  },
}));

const SearchBar = (props) => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-search"
        label="What do you want to search?"
        type="search"
      />
    </form>
  );
};

export default SearchBar;
