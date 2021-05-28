import {
  LOAD_MOVIES_SUCCCESS,
  ADD_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAIL,
  DELETE_MOVIE_FAIL,
  LOAD_MOVIES_FAIL,
  ADD_MOVIE_FAIL,
  UPDATE_MOVIE_SUCCESS,
  DELETE_MOVIE_SUCCESS,
} from '../actions/types';

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_MOVIES_SUCCCESS:
      return action.movies;
    case ADD_MOVIE_SUCCESS:
      return [...state, action.movie];
    case UPDATE_MOVIE_SUCCESS:
      return state.map((movie) => {
        if (movie.id === action.movie.id) {
          return {
            ...action.movie,
          };
        }
        return movie;
      });
    case DELETE_MOVIE_SUCCESS:
      return [...state.filter((movie) => movie.id !== action.id)];
    case LOAD_MOVIES_FAIL:
    case ADD_MOVIE_FAIL:
    case UPDATE_MOVIE_FAIL:
    case DELETE_MOVIE_FAIL:
    default:
      return state;
  }
};

export default moviesReducer;
