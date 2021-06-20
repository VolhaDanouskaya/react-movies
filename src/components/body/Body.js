import React, { useEffect } from 'react';

import { Container } from '@material-ui/core';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import useSessionStorage from '../../hooks/useSessionStorage';
import ErrorBoundary from '../error/ErrorBoundary';

import styles from './body.module.scss';
import GenresFilter from './GenresFilter';
import MovieList from './movieList/MovieList';
import MoviesSorter from './MoviesSorter';

const Body = ({ movies, loadMovies }) => {
  const [currentFilter, setCurrentFilter] = useSessionStorage('filter');
  const [currentSort, setCurrentSort] = useSessionStorage('sort');
  const { query } = useRouter();

  useEffect(() => {
    loadMovies(currentFilter, currentSort, query.search);
  }, [currentFilter, currentSort, query.search, loadMovies]);

  const onFilterClick = (genre) => {
    setCurrentFilter(genre);
  };

  const onSortChange = (sort) => {
    setCurrentSort(sort);
  };

  return (
    <Container className={styles.body} fixed>
      <div className={styles.submenu}>
        <GenresFilter onFilterClick={onFilterClick} selectedFilter={currentFilter} />
        <MoviesSorter onSortChange={onSortChange} selectedSort={currentSort} />
      </div>
      {!movies?.length ? (
        <div>
          <p className={styles['no-movies']}>No Movies Found</p>
        </div>
      ) : (
        <ErrorBoundary>
          <MovieList movies={movies} />
        </ErrorBoundary>
      )}
    </Container>
  );
};

Body.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      genres: PropTypes.arrayOf(PropTypes.string),
      vote_average: PropTypes.number,
      tagline: PropTypes.string,
      vote_count: PropTypes.number,
      overview: PropTypes.string,
      budget: PropTypes.number,
      revenue: PropTypes.number,
      runtime: PropTypes.number,
    }),
  ).isRequired,
  loadMovies: PropTypes.func.isRequired,
};

export default Body;
