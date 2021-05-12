import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './movieDetails.scss';

const MovieDetails = ({ movies, movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const headerMovie = movies?.find((m) => m.id === movieId);
    setMovie(headerMovie);
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
          <div className="release-date">
            {movie?.release_date?.split('-')[0]}
          </div>
          <div className="runtime">
            {movie?.runtime}
            {' '}
            min
          </div>
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

const mapStateToProps = (state) => ({ movies: state.movies });

export default connect(mapStateToProps)(MovieDetails);
