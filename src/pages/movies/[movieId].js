import React from 'react';

import Body from '../../components/body';
import { DEFAULT_SORT } from '../../components/constants';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header';
import MoviesService from '../../services/MoviesService';
import { getMovieSuccess } from '../../store/actions/header';
import { loadMoviesSuccess } from '../../store/actions/movies';
import { wrapper } from '../../store/store';

const MoviePage = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const movies = await MoviesService.fetchMovies('All', DEFAULT_SORT);
  const paths = movies.data.map((movie) => ({
    params: { movieId: movie.id.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = wrapper.getStaticProps((store) => async ({ params }) => {
  const movie = await MoviesService.getMovieById(params.movieId);
  store.dispatch(getMovieSuccess(movie));

  const movies = await MoviesService.fetchMovies('All', DEFAULT_SORT);
  store.dispatch(loadMoviesSuccess(movies.data));
});

export default MoviePage;
