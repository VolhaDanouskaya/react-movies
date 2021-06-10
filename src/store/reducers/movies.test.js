import {
  movieMock,
  movieMock1Updated,
  movieMock2,
  movies,
  message,
} from '../../../test/mocks';
import * as actions from '../actions/movies';
import * as types from '../actions/types';

import moviesReducer from './movies';

describe('test movies reducer', () => {
  test('expect the initial state', () => {
    expect(moviesReducer(null, {})).toEqual(null);
  });

  test('test non existent action', () => {
    const action = {
      type: 'ACTION',
    };
    expect(moviesReducer(null, action)).toEqual(null);
  });

  test('expect movies added to state', () => {
    const action = {
      type: types.LOAD_MOVIES_SUCCCESS,
      movies,
    };
    expect(moviesReducer(undefined, action)).toEqual(movies);
  });

  test('expect new movie added to state', () => {
    const action = {
      type: types.ADD_MOVIE_SUCCESS,
      movie: movieMock2,
    };
    const newState = [...movies, movieMock2];
    expect(moviesReducer(movies, action)).toEqual(newState);
  });

  test('expect updated movie added to state', () => {
    const action = {
      type: types.UPDATE_MOVIE_SUCCESS,
      movie: movieMock1Updated,
    };
    const updatedMovies = [movieMock1Updated, movieMock2];
    const initMovies = [movieMock, movieMock2];
    expect(moviesReducer(initMovies, action)).toEqual(updatedMovies);
  });

  test('expect deleted movie removed from state', () => {
    const action = {
      type: types.DELETE_MOVIE_SUCCESS,
      id: 123123,
    };
    expect(moviesReducer(movies, action)).toEqual([]);
  });
});

describe('test movies reducer actions', () => {
  test('expect load movies action', () => {
    const expectedAction = {
      type: types.LOAD_MOVIES_SUCCCESS,
      movies,
    };
    expect(actions.loadMoviesSuccess(movies)).toEqual(expectedAction);
  });

  test('expect add movie action', () => {
    const expectedAction = {
      type: types.ADD_MOVIE_SUCCESS,
      movie: movieMock,
    };
    expect(actions.addMovieSuccess(movieMock)).toEqual(expectedAction);
  });

  test('expect update movie action', () => {
    const expectedAction = {
      type: types.UPDATE_MOVIE_SUCCESS,
      movie: movieMock,
    };
    expect(actions.updateMovieSuccess(movieMock)).toEqual(expectedAction);
  });

  test('expect delete movie action', () => {
    const movieId = 123123;
    const expectedAction = {
      type: types.DELETE_MOVIE_SUCCESS,
      id: movieId,
    };
    expect(actions.deleteMovieSuccess(movieId)).toEqual(expectedAction);
  });

  test('expect load fail action', () => {
    const expectedAction = {
      type: types.LOAD_MOVIES_FAIL,
      message,
    };
    expect(actions.loadMoviesFail(message)).toEqual(expectedAction);
  });

  test('expect add fail action', () => {
    const expectedAction = {
      type: types.ADD_MOVIE_FAIL,
      message,
    };
    expect(actions.addMovieFail(message)).toEqual(expectedAction);
  });

  test('expect update fail action', () => {
    const expectedAction = {
      type: types.UPDATE_MOVIE_FAIL,
      message,
    };
    expect(actions.updateMovieFail(message)).toEqual(expectedAction);
  });

  test('expect delete fail action', () => {
    const expectedAction = {
      type: types.DELETE_MOVIE_FAIL,
      message,
    };
    expect(actions.deleteMovieFail(message)).toEqual(expectedAction);
  });
});
