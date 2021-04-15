import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './searchBar.scss';

const SearchBar = () => (
  <div className="search-bar">
    <p className="title">find your movie</p>
    <form noValidate autoComplete="off">
      <TextField
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

export default SearchBar;
