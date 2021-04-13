import "./body.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  return (
    <li className="movie-card">
      <img src={props.movie.poster_path} />
      <div className="movie-info">
        <div className="info-first-row">
          <p className="title">{props.movie.title}</p>
          <p className="movie-release-year">
            {props.movie.release_date.split("-")[0]}
          </p>
        </div>
        <p className="genre">{props.movie.genres.join(", ")}</p>
      </div>
    </li>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array,
  }),
};

export default MovieCard;
