import React, { Component } from "react";
import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

const MovieList = (props) => {
  return (
    <ul className="movie-list">
      {props.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

Component.propTypes = {
  movies: PropTypes.array,
}

export default MovieList;
