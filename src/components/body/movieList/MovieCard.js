import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
import './movies.scss';

const MovieCard = ({ movie }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <li className="movie-card">
      <img src={movie.poster_path} alt="" />
      <div className="movie-info">
        <div className="info-first-row">
          <p className="title">{movie.title}</p>
          <p className="movie-release-year">
            {movie.release_date.split('-')[0]}
          </p>
        </div>
        <p className="genre">{movie.genres.join(', ')}</p>
      </div>
      <IconButton
        className="card-menu-icon"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className="card-menu-item">
          edit
        </MenuItem>
        <MenuItem onClick={handleClose} className="card-menu-item">
          delete
        </MenuItem>
      </Menu>
    </li>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array,
  }).isRequired,
};

export default MovieCard;
