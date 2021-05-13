import { SET_HEADER_MOVIE } from './actionTypes';

const headerReducer = (state = null, action) => {
  switch (action.type) {
    case SET_HEADER_MOVIE: return action.payload;
    default: return state;
  }
};

export default headerReducer;
