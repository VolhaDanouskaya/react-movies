import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getMovie } from '../../../store/actions/header';

import './movieDetails.scss';

const MovieDetails = ({ movie, getMovieById }) => {
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(Number(movieId));
  }, [movieId, getMovieById]);

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

const mapStateToProps = (state) => ({ movie: state.movie });

const mapDispatchToProps = (dispatch) => ({
  getMovieById: (id) => dispatch(getMovie(id)),
});

MovieDetails.propTypes = {
  movie: PropTypes.shape({
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
  }).isRequired,
  getMovieById: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
