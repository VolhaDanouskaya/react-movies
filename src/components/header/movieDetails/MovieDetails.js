import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import MovieService from '../../../services/MoviesService';

import './movieDetails.scss';

const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    console.log(movieId);
    MovieService.getMovieById(movieId)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setMovie(resJson);
      });
  }, [movieId]);

  return (
    <div className="movie-details">
      <img src={movie?.poster_path} alt="" className="poster" />
      <div className="info">
        <div className="first-row">
          <h1 className="title">{movie?.title}</h1>
          <div className="rating">{movie?.vote_average}</div>
        </div>
        <div className="tagline">{movie?.tagline}</div>
        <div className="third-row">
          <div className="release-date">{movie?.release_date?.split('-')[0]}</div>
          <div className="runtime">{movie?.runtime} min</div>
        </div>
        <div className="overview">{movie?.overview}</div>
      </div>
    </div>
  );
};

MovieDetails.defaultProps = {
  movieId: null,
};

MovieDetails.propTypes = {
  movieId: PropTypes.number,
};

export default MovieDetails;
