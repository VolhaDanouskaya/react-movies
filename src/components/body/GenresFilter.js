import React from 'react';

import PropTypes from 'prop-types';
import './body.scss';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

const GenresFilter = (props) => (
  <div className="genres-filter">
    {genres.map((genre) => (
      <button key={genre} type="button" onClick={() => props.onFilterClick(genre)} className="item">
        {genre}
      </button>
    ))}
  </div>
);

GenresFilter.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
};

export default GenresFilter;
