import React, { useEffect } from 'react';

import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { useHistory, useRouteMatch } from 'react-router-dom';

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
  const history = useHistory();

  useEffect(() => {
    loadMovies(currentFilter, currentSort);
  }, []);

  useEffect(() => {
    movies?.length ? history.push('/movies') : history.push('/no-movies');
  }, [movies]);

  const onFilterClick = (genre) => {
    setCurrentFilter(genre);
    loadMovies(genre, currentSort);
  };

  const onSortChange = (sort) => {
    setCurrentSort(sort);
    loadMovies(currentFilter, sort);
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
          <ErrorBoundary>
            <MovieList movies={movies} />
          </ErrorBoundary>
        </Route>
        <Route path="/no-movies">
          <div>
            <p className="no-movies">No Movies Found</p>
          </div>
        </Route>
        <Route path="*">
          <Redirect to="/pagenotfound" />
        </Route>
      </Switch>

      {/* <ErrorBoundary>
            <MovieList movies={movies} />
          </ErrorBoundary> */}
    </Container>
  );
};

Body.propTypes = {
  movies: PropTypes.arrayOf(MovieCard).isRequired,
};

const mapStateToProps = (state) => ({ movies: state.movies });

const mapDispatchToProps = (dispatch) => ({
  loadMovies: (filter, sort) => dispatch(loadMovies(filter, sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
