/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from 'next/link';
import PropTypes from 'prop-types';

import DeleteMovieDialog from '../DeleteMovieDialog';
import styles from '../movies.module.scss';
import UpdateMovieDialog from '../UpdateMovieDialog';

const MovieCard = ({ movie, updateMovie, deleteMovie }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

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

  const onDeleteMovie = (movieId) => {
    deleteMovie(movieId);
    setOpenDelete(false);
  };

  const onUpdateMovie = (m) => {
    updateMovie(m);
    setOpenEdit(false);
  };

  return (
    <li className={styles['movie-card']}>
      <Link href={`/movies/${movie?.id}`}>
        <img src={movie?.poster_path} alt="" />
      </Link>
      <div className={styles['movie-info']}>
        <div className={styles['info-first-row']}>
          <p className={styles.title}>{movie?.title}</p>
          <p className={styles['movie-release-year']}>{movie?.release_date?.split('-')[0]}</p>
        </div>
        <p className={styles.genre}>{movie?.genres?.join(', ')}</p>
      </div>
      <IconButton
        className={styles['card-menu-icon']}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={onEditMenuItemClick} className="card-menu-item">
          edit
        </MenuItem>
        <MenuItem onClick={onDeleteMenuItemClick} className="card-menu-item">
          delete
        </MenuItem>
        <UpdateMovieDialog open={openEdit} movie={movie} onUpdate={onUpdateMovie} onClose={() => setOpenEdit(false)} />
        <DeleteMovieDialog
          open={openDelete}
          movieId={movie?.id}
          onDelete={onDeleteMovie}
          onClose={() => setOpenDelete(false)}
        />
      </Menu>
    </li>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
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
  }).isRequired,
  updateMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

export default MovieCard;
