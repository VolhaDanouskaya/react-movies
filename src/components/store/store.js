import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import headerReducer from './headerReducer';
import moviesReducer from './moviesReducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ movies: moviesReducer, header: headerReducer }),
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(mySaga);

export default store;
