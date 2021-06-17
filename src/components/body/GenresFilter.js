import React, { useState } from 'react';

import PropTypes from 'prop-types';

import styles from './body.module.scss';

const genres = ['All', 'Adventure', 'Comedy', 'Drama', 'Fantasy'];

const GenresFilter = ({ onFilterClick, selectedFilter }) => {
  const [selected, setSelected] = useState(selectedFilter);

  return (
    <div className={styles['genres-filter']}>
      {genres.map((genre) => {
        const activeClass = `${genre === selected ? 'item-active' : 'item'}`;
        return (
          <button
            key={genre}
            type="button"
            onClick={() => {
              onFilterClick(genre);
              setSelected(genre);
            }}
            className={styles[activeClass]}
          >
            {genre}
          </button>
        );
      })}
    </div>
  );
};

GenresFilter.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
  selectedFilter: PropTypes.string.isRequired,
};

export default GenresFilter;
