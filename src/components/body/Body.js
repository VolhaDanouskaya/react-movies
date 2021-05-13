import React, { useEffect } from 'react';

import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ErrorBoundary from '../error/ErrorBoundary';
import useSessionStorage from '../hooks/useSessionStorage';
import MoviesService from '../services/MoviesService';
import { loadMovies } from '../store/moviesActions';

import GenresFilter from './GenresFilter';
import MovieCard from './movieList/MovieCard';
import MovieList from './movieList/MovieList';
import MoviesSorter from './MoviesSorter';
import './body.scss';

const Body = ({ movies, dispatch }) => {
  const [currentFilter, setCurrentFilter] = useSessionStorage('filter');
  const [currentSort, setCurrentSort] = useSessionStorage('sort');

  useEffect(() => {
    MoviesService.fetchMovies(currentFilter === 'All' ? null : currentFilter, currentSort).then((res) =>
      dispatch(loadMovies(res.data)),
    );
  }, []);

  const onFilterClick = (genre) => {
    setCurrentFilter(genre);
    return MoviesService.fetchMovies(genre, currentSort).then((res) => dispatch(loadMovies(res.data)));
  };

  const onSortChange = (event) => {
    const { value } = event.target;
    dispatch(loadMovies(MoviesService.sortMovies(movies, value)));
    setCurrentSort(value);
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
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ movies: state.movies });

export default connect(mapStateToProps)(Body);
