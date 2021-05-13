import {
  LOAD_MOVIES,
  ADD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
} from './actionTypes';

export const loadMovies = (movies) => ({
  type: LOAD_MOVIES,
  payload: movies,
});

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

export const updateMovie = (movie) => ({
  type: UPDATE_MOVIE,
  payload: movie,
});

export const deleteMovie = (id) => ({
  type: DELETE_MOVIE,
  payload: id,
});
