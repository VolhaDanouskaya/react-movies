import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import MovieService from '../../../services/MoviesService';

import './movieDetails.scss';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    MovieService.getMovieById(Number(movieId))
      .then((res) => res.json())
      .then((resJson) => {
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

export default MovieDetails;
