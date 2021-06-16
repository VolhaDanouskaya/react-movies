import React, { useState } from 'react';

import PropTypes from 'prop-types';

import styles from './body.module.scss';

const genres = ['All', 'Adventure', 'Comedy', 'Drama', 'Fantasy'];

const GenresFilter = ({ onFilterClick, selectedFilter }) => {
  const [selected, setSelected] = useState(selectedFilter);

  return (
    <div className={styles.genresFilter}>
      {genres.map((genre) => (
        <button
          key={genre}
          type="button"
          onClick={() => {
            onFilterClick(genre);
            setSelected(genre);
          }}
          className={styles.item}
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
