import React, { useEffect } from 'react';

import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import useSessionStorage from '../../hooks/useSessionStorage';
import ErrorBoundary from '../error/ErrorBoundary';

import GenresFilter from './GenresFilter';
import MovieList from './movieList/MovieList';
import MoviesSorter from './MoviesSorter';
import './body.scss';

const Body = ({ movies, loadMovies }) => {
  const [currentFilter, setCurrentFilter] = useSessionStorage('filter');
  const [currentSort, setCurrentSort] = useSessionStorage('sort');
  const searchQuery = useLocation().search;
  const query = new URLSearchParams(searchQuery).get('search');

  useEffect(() => {
    loadMovies(currentFilter, currentSort, query);
  }, [currentFilter, currentSort, query, loadMovies]);

  const onFilterClick = (genre) => {
    setCurrentFilter(genre);
  };

  const onSortChange = (sort) => {
    setCurrentSort(sort);
  };

  return (
    <Container className="body" fixed>
      <div className="submenu">
        <GenresFilter
          onFilterClick={onFilterClick}
          selectedFilter={currentFilter}
        />
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
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      genres: PropTypes.arrayOf(PropTypes.string),
      vote_average: PropTypes.number,
      tagline: PropTypes.string,
      vote_count: PropTypes.number,
      overview: PropTypes.string,
      budget: PropTypes.number,
      revenue: PropTypes.number,
      runtime: PropTypes.number,
    })
  ).isRequired,
  loadMovies: PropTypes.func.isRequired,
};

export default Body;
