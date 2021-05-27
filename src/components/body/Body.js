import React, { useEffect } from 'react';

import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import useSessionStorage from '../../hooks/useSessionStorage';
import { loadMovies } from '../../store/actions/movies';
import ErrorBoundary from '../error/ErrorBoundary';

import GenresFilter from './GenresFilter';
import MovieCard from './movieList/MovieCard';
import MovieList from './movieList/MovieList';
import MoviesSorter from './MoviesSorter';
import './body.scss';

const Body = ({ movies, loadMovies }) => {
  const [currentFilter, setCurrentFilter] = useSessionStorage('filter');
  const [currentSort, setCurrentSort] = useSessionStorage('sort');
  const location = useLocation();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();

  useEffect(() => {
    loadMovies(currentFilter, currentSort, query.get('search'));
  }, []);

  useEffect(() => {
    if (location.search && location.search.trim()) {
      loadMovies(currentFilter, currentSort, query.get('search'));
    }
  }, [location.search]);

  const onFilterClick = (genre) => {
    setCurrentFilter(genre);
    loadMovies(genre, currentSort, query.get('search'));
  };

  const onSortChange = (sort) => {
    setCurrentSort(sort);
    loadMovies(currentFilter, sort, query.get('search'));
  };

  return (
    <Container className="body" fixed>
      <div className="submenu">
        <GenresFilter onFilterClick={onFilterClick} selectedFilter={currentFilter} />
        <MoviesSorter onSortChange={onSortChange} selectedSort={currentSort} />
      </div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/movies" />
        </Route>
        <Route path="/movies">
          {!movies?.length ? (
            <div>
              <p className="no-movies">No Movies Found</p>
            </div>
          ) : (
            <ErrorBoundary>
              <MovieList movies={movies} />
            </ErrorBoundary>
          )}
        </Route>
        <Route path="*">
          <Redirect to="/pagenotfound" />
        </Route>
      </Switch>
    </Container>
  );
};

Body.propTypes = {
  movies: PropTypes.arrayOf(MovieCard).isRequired,
  loadMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ movies: state.movies });

const mapDispatchToProps = (dispatch) => ({
  loadMovies: (filter, sort, query) => dispatch(loadMovies(filter, sort, query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
