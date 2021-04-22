import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import React from 'react';

import SearchBar from './searchBar/SearchBar';
import AddMovieDialog from './AddMovieDialog';

/* eslint-disable import/no-absolute-path */
import logo from '/public/images/logo.png';
import './header.scss';

const Header = () => {
  const [openAdd, setOpenAdd] = React.useState(false);

  const onAddMovieClick = () => {
    setOpenAdd(true);
  };

  return (
    <Container className="header" fixed>
      <div className="subheader">
        <img className="logo" src={logo} alt="" />
        <Button
          id="button-add-movie"
          variant="contained"
          size="large"
          onClick={onAddMovieClick}
        >
          + Add Movie
        </Button>
        <AddMovieDialog open={openAdd} onClose={() => setOpenAdd(false)} />
      </div>
      <SearchBar />
    </Container>
  );
};

export default Header;
