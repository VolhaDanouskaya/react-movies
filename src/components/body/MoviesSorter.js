import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import './body.scss';

const propTypes = {
  onSortChange: PropTypes.func.isRequired,
  selectedSort: PropTypes.string.isRequired,
};

const MoviesSorter = ({ onSortChange, selectedSort }) => {
  if (!selectedSort) {
    onSortChange('release_date');
  }
  return (
    <div className="sort">
      <p>Sort by </p>
      <FormControl className="sort-form">
        <Select
          labelId="simple-select"
          id="simple-select"
          defaultValue={selectedSort}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <MenuItem value="vote_average">Rating</MenuItem>
          <MenuItem value="release_date">Release date</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

MoviesSorter.propTypes = propTypes;

export default MoviesSorter;
