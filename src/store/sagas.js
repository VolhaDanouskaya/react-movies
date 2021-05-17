// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';
import { call, put, takeEvery } from 'redux-saga/effects';
import MoviesService from '../services/MoviesService';
import './actions/types';
import { LOAD_MOVIES, ADD_MOVIE, DELETE_MOVIE, UPDATE_MOVIE } from './actions/types';
import {
  loadMoviesSuccess,
  loadMoviesFail,
  addMovieSuccess,
  addMovieFail,
  updateMovieSuccess,
  updateMovieFail,
  deleteMovieSuccess,
  deleteMovieFail,
} from './actions/movies';

function* getAllMovies({ filter, sort }) {
  try {
    const movies = yield call(MoviesService.fetchMovies, filter, sort);
    yield put(loadMoviesSuccess(movies.data));
  } catch (e) {
    yield put(loadMoviesFail(e.message));
  }
}

function* addMovie({ movie }) {
  try {
    const addedMovie = yield call(MoviesService.addMovie, movie);
    yield put(addMovieSuccess(addedMovie));
  } catch (e) {
    yield put(addMovieFail(e.message));
  }
}

function* updateMovie({ movie }) {
  try {
    yield call(MoviesService.updateMovie, movie);
    yield put(updateMovieSuccess(movie));
  } catch (e) {
    yield put(updateMovieFail(e.message));
  }
}

function* deleteMovie({ id }) {
  try {
    yield call(MoviesService.deleteMovie, id);
    yield put(deleteMovieSuccess(id));
  } catch (e) {
    yield put(deleteMovieFail(e.message));
  }
}

function* moviesSagas() {
  yield takeEvery(LOAD_MOVIES, getAllMovies);
  yield takeEvery(ADD_MOVIE, addMovie);
  yield takeEvery(UPDATE_MOVIE, updateMovie);
  yield takeEvery(DELETE_MOVIE, deleteMovie);
}

export default moviesSagas;
