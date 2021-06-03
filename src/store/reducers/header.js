import { GET_MOVIE_BY_ID_SUCCESS, GET_MOVIE_BY_ID_FAIL } from '../actions/types'

const headerReducer = (state = null, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_ID_SUCCESS:
      return action.movie
    case GET_MOVIE_BY_ID_FAIL:
    default:
      return state
  }
}

export default headerReducer
