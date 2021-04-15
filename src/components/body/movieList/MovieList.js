import PropTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line sort-imports-es6-autofix/sort-imports-es6
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => (
  <ul className="movie-list">
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </ul>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(MovieCard).isRequired,
};

export default MovieList;
