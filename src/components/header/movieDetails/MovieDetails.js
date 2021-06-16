import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import styles from './movieDetails.module.scss';

const MovieDetails = ({ movie, getMovie }) => {
  const { movieId } = useParams();

  useEffect(() => {
    getMovie(Number(movieId));
  }, [movieId, getMovie]);

  return (
    <div className={styles.movieDetails}>
      <img src={movie?.poster_path} alt="" className={styles.poster} />
      <div className={styles.info}>
        <div className={styles.firstRow}>
          <h1 className={styles.title}>{movie?.title}</h1>
          <div className={styles.rating}>{movie?.vote_average}</div>
        </div>
        <div className={styles.tagline}>{movie?.tagline}</div>
        <div className={styles.thirdRow}>
          <div className={styles.releaseDate}>{movie?.release_date?.split('-')[0]}</div>
          <div className={styles.runtime}>{movie?.runtime} min</div>
        </div>
        <div className={styles.overview}>{movie?.overview}</div>
      </div>
    </div>
  );
};

MovieDetails.defaultProps = {
  movie: null,
};

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
  }),
  getMovie: PropTypes.func.isRequired,
};

export default MovieDetails;
