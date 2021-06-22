import React from 'react';

import Body from '../components/body';
import Footer from '../components/footer/Footer';
import Header from '../components/header';
import MoviesService from '../services/MoviesService';
import { loadMovies } from '../store/actions/movies';
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

MoviesPage.getInitialProps = wrapper.getInitialPageProps((store) => () => {
  store.dispatch(loadMovies());
});

// MoviesPage.getInitialProps = async () => {
//   const movies = await MoviesService.fetchMovies();
//   return { movies: movies.data };
// };

export default MoviesPage;
