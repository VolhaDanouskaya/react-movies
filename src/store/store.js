import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import headerReducer from './reducers/header'
import moviesReducer from './reducers/movies'
import moviesSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers({ movies: moviesReducer, movie: headerReducer }),
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(moviesSagas)

export default store
