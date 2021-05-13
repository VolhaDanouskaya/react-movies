// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';
import { call, put, takeEvery } from 'redux-saga/effects';

import MoviesService from '../services/MoviesService';

import { LOAD_MOVIES } from './actionTypes';

function* getAllMovies() {
  try {
    const movies = yield call(MoviesService.fetchMovies);
    yield put({ type: 'MOVIES_FETCH_SUCCEEDED', movies });
  } catch (e) {
    yield put({ type: 'MOVIES_FETCH_FAILED', message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(LOAD_MOVIES, getAllMovies);
}

export default mySaga;
