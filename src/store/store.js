import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import headerReducer from './reducers/header';
import moviesReducer from './reducers/movies';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ movies: moviesReducer, header: headerReducer }),
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(mySaga);

export default store;
