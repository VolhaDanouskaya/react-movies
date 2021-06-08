import React, { useState } from 'react';

import PropTypes from 'prop-types';
import './body.scss';

const genres = ['All', 'Adventure', 'Comedy', 'Drama', 'Fantasy'];

const GenresFilter = ({ onFilterClick, selectedFilter }) => {
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

GenresFilter.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
  selectedFilter: PropTypes.string.isRequired,
};

export default GenresFilter;
