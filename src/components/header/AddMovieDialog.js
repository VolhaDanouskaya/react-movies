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

const AddMovieDialog = ({ open, onClose }) => {
  const [genres, setGenres] = React.useState([]);

  const onCloseAddDialog = () => {
    onClose();
  };

  const onChangeGenres = (event) => {
    setGenres(event.target.value);
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={open}
      onClose={onCloseAddDialog}
    >
      <IconButton aria-label="close" onClick={onCloseAddDialog}>
        <CloseIcon />
      </IconButton>
      <DialogTitle id="alert-dialog-title">Add Movie</DialogTitle>
      <DialogContent className="dialog-form-content">
        <form noValidate autoComplete="off">
          <p className="edit-field-name">Title</p>
          <Input type="text" placeholder="Movie Title" className="edit-field" />
          <p className="edit-field-name">Release Date</p>
          <Input type="date" placeholder="Select Date" className="edit-field" />
          <p className="edit-field-name">Movie URL</p>
          <Input
            type="text"
            placeholder="Movie URL here"
            className="edit-field"
          />
          <p className="edit-field-name">Genre</p>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="edit-field"
            onChange={onChangeGenres}
            value={genres}
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
            rowsMin={3}
            aria-label="empty textarea"
            placeholder="Overview Here"
            className="edit-field"
          />
          <p className="edit-field-name">Runtime</p>
          <Input
            type="text"
            placeholder="Runtime Here"
            className="edit-field"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseAddDialog} color="secondary" size="large">
          Reset
        </Button>
        <Button onClick={onCloseAddDialog} color="primary" size="large">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddMovieDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddMovieDialog;
