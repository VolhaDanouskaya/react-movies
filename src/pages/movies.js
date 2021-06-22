import React from 'react';

import Body from '../components/body';
import { DEFAULT_SORT } from '../components/constants';
import Footer from '../components/footer/Footer';
import Header from '../components/header';
import MoviesService from '../services/MoviesService';
import { loadMoviesSuccess } from '../store/actions/movies';
import { wrapper } from '../store/store';

const MoviesPage = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const movies = await MoviesService.fetchMovies('All', DEFAULT_SORT);
  store.dispatch(loadMoviesSuccess(movies.data));
});

export default MoviesPage;
