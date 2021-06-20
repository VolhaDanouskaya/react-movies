import React from 'react';

import Body from '../components/body/Body';
import Footer from '../components/footer/Footer';
import Header from '../components/header';
import { loadMovies } from '../store/actions/movies';
import { wrapper } from '../store/store';
import { connect } from 'react-redux';
import MoviesService from '../services/MoviesService';

const MoviesPage = ({ movies }) => {
  return (
    <>
      <Header />
      <Body movies={movies} />
      <Footer />
    </>
  );
};

// MoviesPage.getInitialProps = wrapper.getInitialPageProps((store) => () => {
//   console.log();
//   return store.dispatch(loadMovies());
// });

MoviesPage.getInitialProps = async () => {
  const movies = await MoviesService.fetchMovies();
  return { movies: movies.data };
};

export default MoviesPage;
