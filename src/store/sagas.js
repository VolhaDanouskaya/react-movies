// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';
import { call, put, takeEvery } from 'redux-saga/effects';
import MoviesService from '../services/MoviesService';
import './actions/types';
import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCCESS,
  LOAD_MOVIES_FAIL,
  ADD_MOVIE,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAIL,
  DELETE_MOVIE,
  DELETE_MOVIE_FAIL,
  DELETE_MOVIE_SUCCESS,
  UPDATE_MOVIE,
  UPDATE_MOVIE_FAIL,
  UPDATE_MOVIE_SUCCESS,
} from './actions/types';

function* getAllMovies({ filter, sort }) {
  try {
    const movies = yield call(MoviesService.fetchMovies, filter, sort);
    yield put({ type: LOAD_MOVIES_SUCCCESS, movies: movies.data });
  } catch (e) {
    yield put({ type: LOAD_MOVIES_FAIL, message: e.message });
  }
}

function* addMovie({ movie }) {
  try {
    const addedMovie = yield call(MoviesService.addMovie, movie);
    yield put({ type: ADD_MOVIE_SUCCESS, movie: addedMovie });
  } catch (e) {
    yield put({ type: ADD_MOVIE_FAIL, message: e.message });
  }
}

function* updateMovie({ movie }) {
  try {
    yield call(MoviesService.updateMovie, movie);
    yield put({ type: UPDATE_MOVIE_SUCCESS, movie });
  } catch (e) {
    yield put({ type: UPDATE_MOVIE_FAIL, message: e.message });
  }
}

function* deleteMovie({ id }) {
  try {
    yield call(MoviesService.deleteMovie, id);
    yield put({ type: DELETE_MOVIE_SUCCESS, id });
  } catch (e) {
    yield put({ type: DELETE_MOVIE_FAIL, message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(LOAD_MOVIES, getAllMovies);
  yield takeEvery(ADD_MOVIE, addMovie);
  yield takeEvery(UPDATE_MOVIE, updateMovie);
  yield takeEvery(DELETE_MOVIE, deleteMovie);
}

export default mySaga;
