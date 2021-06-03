import {
  GET_MOVIE_BY_ID,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_BY_ID_FAIL
} from './types'

export const getMovie = (movieId) => ({
  type: GET_MOVIE_BY_ID,
  movieId
})

export const getMovieSuccess = (movie) => ({
  type: GET_MOVIE_BY_ID_SUCCESS,
  movie
})

export const getMovieFail = (message) => ({
  type: GET_MOVIE_BY_ID_FAIL,
  message
})
