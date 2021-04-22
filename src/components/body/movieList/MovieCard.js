import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';

import DeleteMovieDialog from './DeleteMovieDialog';
import EditMovieDialog from './EditMovieDialog';

import './movies.scss';

const MovieCard = ({ movie }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onEditMenuItemClick = () => {
    handleClose();
    setOpenEdit(true);
  };

  const onDeleteMenuItemClick = () => {
    handleClose();
    setOpenDelete(true);
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
        <MenuItem onClick={onEditMenuItemClick} className="card-menu-item">
          edit
        </MenuItem>
        <MenuItem onClick={onDeleteMenuItemClick} className="card-menu-item">
          delete
        </MenuItem>
        <EditMovieDialog
          open={openEdit}
          movie={movie}
          onClose={() => setOpenEdit(false)}
        />
        <DeleteMovieDialog
          open={openDelete}
          movieId={movie.id}
          onClose={() => setOpenDelete(false)}
        />
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
    vote_average: PropTypes.number,
    tagline: PropTypes.string,
    vote_count: PropTypes.number,
    overview: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
