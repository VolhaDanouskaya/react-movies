import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import SearchBar from './searchBar/SearchBar';
import AddMovieDialog from './AddMovieDialog';
import MovieDetails from './movieDetails/MovieDetails';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import useSessionStorage from '../../hooks/useSessionStorage';
import { addMovie, loadMovies } from '../../store/actions/movies';

import { Switch, Route, useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

/* eslint-disable import/no-absolute-path */
import logo from '/public/images/logo.png';
import './header.scss';

const Header = ({ addMovie, searchMovies }) => {
  const [openAdd, setOpenAdd] = useState(false);
  const [currentFilter] = useSessionStorage('filter');
  const [currentSort] = useSessionStorage('sort');
  const history = useHistory();

  const { headerMovieId } = useParams();
  // const [movieId, setMovieId] = useState(headerMovieId);

  const onAddMovieClick = () => {
    setOpenAdd(true);
  };

  const onAddMovie = (movie) => {
    addMovie(movie);
    setOpenAdd(false);
  };

  const onSearchMovies = (query) => {
    searchMovies(currentFilter, currentSort, query);
  };

  // useEffect(() => {
  //   setMovieId(headerMovieId);
  // }, [headerMovieId]);
  console.log('header' + headerMovieId);
  return (
    <Container className={`header ${headerMovieId ? 'dark' : ''}`} fixed>
      {/**<div className="subheader">
        <img className="logo" src={logo} alt="" />
        <Switch>
          <Route path="/movies/:headerMovieId">
            <IconButton onClick={() => history.pushState('/')}>
              <SearchIcon fontSize="large" />
            </IconButton>
          </Route>
          <Route path="/">
            <Button id="button-add-movie" variant="contained" size="large" onClick={onAddMovieClick}>
              + Add Movie
            </Button>
            <AddMovieDialog open={openAdd} onAdd={onAddMovie} onClose={() => setOpenAdd(false)} />
          </Route>
        </Switch>
  </div>**/}
      <Switch>
        <Route path="/movies/:headerMovieId">
          <MovieDetails movieId={Number(headerMovieId)} />
        </Route>
        <Route path="/">
          <SearchBar onSearch={onSearchMovies} />
        </Route>
      </Switch>
    </Container>
  );
};

// Header.defaultProps = {
//   headerMovieId: null,
// };

// Header.propTypes = {
//   headerMovieId: PropTypes.number,
// };

// const mapStateToProps = (state) => ({
//   headerMovieId: state.header,
// });

const mapDispatchToProps = (dispatch) => ({
  addMovie: (movie) => dispatch(addMovie(movie)),
  searchMovies: (currentFilter, currentSort, query) => dispatch(loadMovies(currentFilter, currentSort, query)),
});

export default connect(null, mapDispatchToProps)(Header);
