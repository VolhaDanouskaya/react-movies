import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

const genresArray = ['Adventure', 'Comedy', 'Drama', 'Fantasy'];

const EditMovieDialog = ({ movie, open, onClose }) => {
  const [genres, setGenres] = React.useState(movie.genres);

  const onCloseEditDialog = () => {
    onClose();
  };

  const onChangeGenres = (event) => {
    setGenres(event.target.value);
  };

  return (
    <Dialog disableEscapeKeyDown open={open} onClose={onCloseEditDialog}>
      <IconButton aria-label="close" onClick={onCloseEditDialog}>
        <CloseIcon />
      </IconButton>
      <DialogTitle>Edit Movie</DialogTitle>
      <DialogContent className="dialog-form-content">
        <form noValidate autoComplete="off">
          <p className="edit-field-name">Movie ID</p>
          <p className="edit-field-name" style={{ color: 'white' }}>{movie.id}</p>
          <p className="edit-field-name">Title</p>
          <Input
            type="text"
            defaultValue={movie.title}
            className="edit-field"
          />
          <p className="edit-field-name">Release Date</p>
          <Input
            type="date"
            defaultValue={movie.release_date}
            className="edit-field"
          />
          <p className="edit-field-name">Movie URL</p>
          <Input type="text" defaultValue={movie.url} className="edit-field" />
          <p className="edit-field-name">Genre</p>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="edit-field"
            value={genres}
            onChange={onChangeGenres}
            multiple
          >
            {genresArray.map((genre) => (
              <MenuItem key={genre} value={genre}>
                {genre}
              </MenuItem>
            ))}
          </Select>
          <p className="edit-field-name">Overview</p>
          <TextareaAutosize
            aria-label="empty textarea"
            rowsMin={3}
            defaultValue={movie.overview}
            className="edit-field"
          />
          <p className="edit-field-name">Runtime</p>
          <Input
            type="text"
            defaultValue={movie.runtime}
            className="edit-field"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseEditDialog} color="secondary" size="large">
          Reset
        </Button>
        <Button onClick={onCloseEditDialog} color="primary" size="large">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

EditMovieDialog.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    vote_average: PropTypes.number,
    tagline: PropTypes.string,
    url: PropTypes.string,
    vote_count: PropTypes.number,
    overview: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditMovieDialog;
