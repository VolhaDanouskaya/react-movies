import {
  LOAD_MOVIES,
  ADD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
} from './actionTypes';

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return action.payload;
    case ADD_MOVIE:
      return [...state, action.payload];
    case UPDATE_MOVIE:
      return state.map((movie) => {
        if (movie.id === action.payload.id) {
          return {
            ...action.payload,
          };
        }
        return movie;
      });
    case DELETE_MOVIE:
      return [...state.filter((movie) => movie.id !== action.payload)];
    default:
      return state;
  }
};

export default moviesReducer;
