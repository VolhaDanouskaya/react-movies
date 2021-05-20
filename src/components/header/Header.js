import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import React, { useState } from 'react';

import { connect } from 'react-redux';

import SearchBar from './searchBar/SearchBar';
import AddMovieDialog from './AddMovieDialog';
import MovieDetails from './movieDetails/MovieDetails';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { addMovie } from '../../store/actions/movies';
import setHeaderMovie from '../../store/actions/header';

import PropTypes from 'prop-types';

/* eslint-disable import/no-absolute-path */
import logo from '/public/images/logo.png';
import './header.scss';

const Header = ({ addMovie, setHeaderMovieId, headerMovieId }) => {
  const [openAdd, setOpenAdd] = useState(false);

  const onAddMovieClick = () => {
    setOpenAdd(true);
  };

  const onAddMovie = (movie) => {
    addMovie(movie);
    setOpenAdd(false);
  };

  return (
    <Container className={`header ${headerMovieId ? 'dark' : ''}`} fixed>
      <div className="subheader">
        <img className="logo" src={logo} alt="" />
        {headerMovieId ? (
          <IconButton onClick={() => setHeaderMovieId(null)}>
            <SearchIcon fontSize="large" />
          </IconButton>
        ) : (
          <>
            <Button id="button-add-movie" variant="contained" size="large" onClick={onAddMovieClick}>
              + Add Movie
            </Button>
            <AddMovieDialog open={openAdd} onAdd={onAddMovie} onClose={() => setOpenAdd(false)} />
          </>
        )}
      </div>
      {headerMovieId ? <MovieDetails movieId={headerMovieId} /> : <SearchBar />}
    </Container>
  );
};

Header.defaultProps = {
  headerMovieId: null,
};

Header.propTypes = {
  headerMovieId: PropTypes.number,
};

const mapStateToProps = (state) => ({
  headerMovieId: state.header,
});

const mapDispatchToProps = (dispatch) => ({
  addMovie: (movie) => dispatch(addMovie(movie)),
  setHeaderMovieId: (id) => dispatch(setHeaderMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
