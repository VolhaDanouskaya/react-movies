import {
  LOAD_MOVIES,
  ADD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
  LOAD_MOVIES_SUCCCESS,
  LOAD_MOVIES_FAIL,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAIL,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAIL,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAIL,
} from './types';

export const loadMovies = (filter, sort) => ({
  type: LOAD_MOVIES,
  filter,
  sort,
});

export const loadMoviesSuccess = (movies) => ({
  type: LOAD_MOVIES_SUCCCESS,
  movies,
});

export const loadMoviesFail = (message) => ({
  type: LOAD_MOVIES_FAIL,
  message,
});

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  movie,
});

export const addMovieSuccess = (movie) => ({
  type: ADD_MOVIE_SUCCESS,
  movie,
});

export const addMovieFail = (message) => ({
  type: ADD_MOVIE_FAIL,
  message,
});

export const updateMovie = (movie) => ({
  type: UPDATE_MOVIE,
  movie,
});

export const updateMovieSuccess = (movie) => ({
  type: UPDATE_MOVIE_SUCCESS,
  movie,
});

export const updateMovieFail = (message) => ({
  type: UPDATE_MOVIE_FAIL,
  message,
});

export const deleteMovie = (id) => ({
  type: DELETE_MOVIE,
  id,
});

export const deleteMovieSuccess = (id) => ({
  type: DELETE_MOVIE_SUCCESS,
  id,
});

export const deleteMovieFail = (message) => ({
  type: DELETE_MOVIE_FAIL,
  message,
});
