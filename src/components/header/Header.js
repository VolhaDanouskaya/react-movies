import React, { useState } from 'react';

import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Switch, Route, useHistory } from 'react-router-dom';

import AddMovieDialog from './AddMovieDialog';
import styles from './header.module.scss';
import MovieDetails from './movieDetails';
import SearchBar from './searchBar/SearchBar';

const Header = ({ addMovie }) => {
  const [openAdd, setOpenAdd] = useState(false);
  const history = useHistory();

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
            <Image src="/public/images/logo.png" className={styles.logoFooter} width="150" height="50" />
            <IconButton onClick={() => history.push('/')}>
              <SearchIcon fontSize="large" />
            </IconButton>
          </div>
          <MovieDetails />
        </Route>
        <Route path="/">
          <div className={styles.subheader}>
            <Image src="/public/images/logo.png" className={styles.logoFooter} width="150" height="50" />
            <Button id="button-add-movie" variant="contained" size="large" onClick={onAddMovieClick}>
              + Add Movie
            </Button>
            <AddMovieDialog open={openAdd} onAdd={onAddMovie} onClose={() => setOpenAdd(false)} />
          </div>
          <SearchBar />
        </Route>
      </Switch>
    </Container>
  );
};

Header.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default Header;
