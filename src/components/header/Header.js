import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import React, { useState, useContext } from 'react';

import SearchBar from './searchBar/SearchBar';
import AddMovieDialog from './AddMovieDialog';
import MovieDetails from './movieDetails/MovieDetails';
import HeaderContext from './HeaderContext';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

/* eslint-disable import/no-absolute-path */
import logo from '/public/images/logo.png';
import './header.scss';

const Header = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [headerMovieId, setHeaderMovieId] = useContext(HeaderContext);

  const onAddMovieClick = () => {
    setOpenAdd(true);
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
            <Button
              id="button-add-movie"
              variant="contained"
              size="large"
              onClick={onAddMovieClick}
            >
              + Add Movie
            </Button>
            <AddMovieDialog open={openAdd} onClose={() => setOpenAdd(false)} />
          </>
        )}
      </div>
      {headerMovieId ? <MovieDetails movieId={headerMovieId} /> : <SearchBar />}
    </Container>
  );
};

export default Header;
