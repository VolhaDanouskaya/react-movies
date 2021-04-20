import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './body.scss';

const MoviesSorter = ({ onSortChange }) => (
  <>
    <div className="sort">
      <p>Sort by </p>
      <FormControl className="sort-form">
        <Select
          labelId="simple-select"
          id="simple-select"
          defaultValue="release_date"
          onChange={onSortChange}
        >
          <MenuItem value="vote_average">Rating</MenuItem>
          <MenuItem value="release_date" selected>
            Release date
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  </>
);

export default MoviesSorter;
