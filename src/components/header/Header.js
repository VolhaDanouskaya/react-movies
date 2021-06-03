import { Container } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import React, { useState } from 'react'

import SearchBar from './searchBar/SearchBar'
import AddMovieDialog from './AddMovieDialog'
import MovieDetails from './movieDetails'

import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import { Switch, Route, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

/* eslint-disable import/no-absolute-path */
import logo from '/public/images/logo.png'
import './header.scss'

const Header = ({ addMovie }) => {
  const [openAdd, setOpenAdd] = useState(false)
  const history = useHistory()

  const onAddMovieClick = () => {
    setOpenAdd(true)
  }

  const onAddMovie = (movie) => {
    addMovie(movie)
    setOpenAdd(false)
  }

  return (
    <Container className="header" fixed>
      <Switch>
        <Route path="/movies/:movieId">
          <div className="subheader">
            <img className="logo" src={logo} alt="" />
            <IconButton onClick={() => history.push('/')}>
              <SearchIcon fontSize="large" />
            </IconButton>
          </div>
          <MovieDetails />
        </Route>
        <Route path="/">
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
            <AddMovieDialog
              open={openAdd}
              onAdd={onAddMovie}
              onClose={() => setOpenAdd(false)}
            />
          </div>
          <SearchBar />
        </Route>
      </Switch>
    </Container>
  )
}

Header.propTypes = {
  addMovie: PropTypes.func.isRequired
}

export default Header
