import { SET_HEADER_MOVIE } from './types';

const setHeaderMovie = (id) => ({
  type: SET_HEADER_MOVIE,
  payload: id,
});

export default setHeaderMovie;
