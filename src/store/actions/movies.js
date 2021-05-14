import { LOAD_MOVIES, ADD_MOVIE, UPDATE_MOVIE, DELETE_MOVIE } from './types';

export const loadMovies = (filter, sort) => ({
  type: LOAD_MOVIES,
  filter,
  sort,
});

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  movie,
});

export const updateMovie = (movie) => ({
  type: UPDATE_MOVIE,
  movie,
});

export const deleteMovie = (id) => ({
  type: DELETE_MOVIE,
  id,
});
