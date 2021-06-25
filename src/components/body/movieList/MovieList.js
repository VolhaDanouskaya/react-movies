import React from 'react';

import PropTypes from 'prop-types';

import MovieCard from './movieCard';

const propTypes = {
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
    })
  ).isRequired,
};

// PATTERN: Container component
const MovieList = ({ movies }) => (
  <ul className="movie-list">
    {movies?.map((movie) => (
      <MovieCard key={movie?.id} movie={movie} />
    ))}
  </ul>
);

MovieList.propTypes = propTypes;

export default MovieList;
