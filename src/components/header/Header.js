import React, { useState } from 'react';

import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Switch, Route, useHistory } from 'react-router-dom';

import AddMovieDialog from './AddMovieDialog';
import styles from './header.module.scss';
import MovieDetails from './movieDetails';
import SearchBar from './searchBar/SearchBar';

const Header = ({ addMovie }) => {
  const [openAdd, setOpenAdd] = useState(false);
  const history = useHistory();
  const isServer = typeof window === 'undefined';

  const onAddMovieClick = () => {
    setOpenAdd(true);
  };

  const onAddMovie = (movie) => {
    addMovie(movie);
    setOpenAdd(false);
  };
  return (
    <Container className={styles.header} fixed>
      <Switch>
        <Route path="/movies/:movieId">
          <div className={styles.subheader}>
            <img src="/images/logo.png" className={styles.logo} alt="logo" />
            <IconButton onClick={() => history.push('/')}>
              <SearchIcon fontSize="large" />
            </IconButton>
          </div>
          {isServer ? (
            useRouter().pathname.includes('movieId') ? (
              <MovieDetails />
            ) : null
          ) : (
            <MovieDetails />
          )}
        </Route>
        <Route path="/">
          <div className={styles.subheader}>
            <img src="/images/logo.png" className={styles.logo} alt="logo" />
            <Button
              variant="contained"
              size="large"
              onClick={onAddMovieClick}
              className={styles['button-add-movie']}
            >
              + Add Movie
            </Button>
            <AddMovieDialog
              open={openAdd}
              onAdd={onAddMovie}
              onClose={() => setOpenAdd(false)}
            />
          </div>
          {isServer ? (
            useRouter().pathname.includes('movieId') ? null : (
              <SearchBar />
            )
          ) : (
            <SearchBar />
          )}
        </Route>
      </Switch>
    </Container>
  );
};

Header.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default Header;
