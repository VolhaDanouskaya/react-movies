import "./body.css";
import React from "react";

const MovieCard = (props) => {
  return (
    <li className="movie-card" key={props.movie.id}>
      <img src={props.movie.poster_path} />
      <div className="movie-info">
        <div className="info-first-row">
          <p>{props.movie.title}</p>
          <p className="movie-release-year">{props.movie.release_date.split('-')[0]}</p>
        </div>
        <p>{props.movie.genres.join(', ')}</p>
      </div>
    </li>
  );
};

export default MovieCard;
