import React, { useEffect } from 'react';

import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ErrorBoundary from '../error/ErrorBoundary';
import useSessionStorage from '../../hooks/useSessionStorage';
import { loadMovies } from '../../store/actions/movies';

import GenresFilter from './GenresFilter';
import MovieCard from './movieList/MovieCard';
import MovieList from './movieList/MovieList';
import MoviesSorter from './MoviesSorter';
import './body.scss';

const Body = ({ movies, loadMovies }) => {
  const [currentFilter, setCurrentFilter] = useSessionStorage('filter');
  const [currentSort, setCurrentSort] = useSessionStorage('sort');

  useEffect(() => {
    loadMovies(currentFilter, currentSort);
  }, []);

  const onFilterClick = (genre) => {
    setCurrentFilter(genre);
    loadMovies(genre, currentSort);
  };

  const onSortChange = (sort) => {
    setCurrentSort(sort);
    loadMovies(currentFilter, sort);
  };

  return (
    <Container className="body" fixed>
      <div className="submenu">
        <GenresFilter onFilterClick={onFilterClick} selectedFilter={currentFilter} />
        <MoviesSorter onSortChange={onSortChange} selectedSort={currentSort} />
      </div>
      <p className="movies-counter">
        <b>{movies?.length}</b> movies found
      </p>
      <ErrorBoundary>
        <MovieList movies={movies} />
      </ErrorBoundary>
    </Container>
  );
};

Body.propTypes = {
  movies: PropTypes.arrayOf(MovieCard).isRequired,
};

const mapStateToProps = (state) => ({ movies: state.movies });

const mapDispatchToProps = (dispatch) => ({
  loadMovies: (filter, sort) => dispatch(loadMovies(filter, sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
