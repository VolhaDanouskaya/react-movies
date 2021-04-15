import React from 'react';

import PropTypes from 'prop-types';

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
