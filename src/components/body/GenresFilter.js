import React, { useState } from 'react';

import PropTypes from 'prop-types';
import './body.scss';

const propTypes = {
  onFilterClick: PropTypes.func.isRequired,
  selectedFilter: PropTypes.string.isRequired,
};

// PATTERN: State hoisting
const GenresFilter = ({ onFilterClick, selectedFilter }) => {
  const genres = ['All', 'Adventure', 'Comedy', 'Drama', 'Fantasy'];
  const [selected, setSelected] = useState(selectedFilter);

  return (
    <div className="genres-filter">
      {genres.map((genre) => (
        <button
          key={genre}
          type="button"
          onClick={() => {
            onFilterClick(genre);
            setSelected(genre);
          }}
          className={`item ${genre === selected ? 'active' : ''}`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

GenresFilter.propTypes = propTypes;

export default GenresFilter;
