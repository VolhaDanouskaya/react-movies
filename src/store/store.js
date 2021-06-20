import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

import headerReducer from './reducers/header';
import moviesReducer from './reducers/movies';
import moviesSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   combineReducers({ movies: moviesReducer, movie: headerReducer }),
//   applyMiddleware(sagaMiddleware),
// );

const combinedReducer = combineReducers({ movies: moviesReducer, movie: headerReducer });

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  }
  return combinedReducer(state, action);
};

const initStore = () => {
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(moviesSagas);
  return store;
};

export const wrapper = createWrapper(initStore);
