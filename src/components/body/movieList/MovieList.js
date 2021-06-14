import React from 'react';

import PropTypes from 'prop-types';

import MovieCard from './movieCard';

const MovieList = ({ movies }) => (
  <ul className="movieList">
    {movies?.map((movie) => (
      <MovieCard key={movie?.id} movie={movie} />
    ))}
  </ul>
);

MovieList.propTypes = {
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
};

export default MovieList;
