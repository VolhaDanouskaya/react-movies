import './body.scss';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Select from '@material-ui/core/Select';

const MoviesSorter = () => (
  <>
    <div className="sort">
      <p>Sort by </p>
      <FormControl className="sort-form">
        <Select labelId="simple-select" id="simple-select" defaultValue="releaseDate">
          <MenuItem value="releaseDate" selected>
            Release date
          </MenuItem>
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
        </Select>
      </FormControl>
    </div>
  </>
);

export default MoviesSorter;
