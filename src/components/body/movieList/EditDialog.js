/* eslint-disable react/prop-types */
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
import CloseIcon from '@material-ui/icons/Close';

const EditDialog = (props) => {
  const handleCloseEditDialog = () => {
    const { onClose } = props;
    onClose();
  };

  const { movie, open } = props;
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={open}
      onClose={handleCloseEditDialog}
    >
      <IconButton aria-label="close" onClick={handleCloseEditDialog}>
        <CloseIcon />
      </IconButton>
      <div className="edit-form-content">
        <DialogTitle>Edit Movie</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <p className="edit-field-name">Movie ID</p>
            <p className="edit-field">{movie.id}</p>
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
            <Input
              type="text"
              defaultValue={movie.url}
              className="edit-field"
            />
            <p className="edit-field-name">Genre</p>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={movie.genres[0]}
              className="edit-field"
            >
              {movie.genres.map((genre) => (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              ))}
            </Select>
            <p className="edit-field-name">Overview</p>
            <Input
              type="text"
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
      </div>
      <DialogActions>
        <Button
          onClick={handleCloseEditDialog}
        >
          Reset
        </Button>
        <Button
          onClick={handleCloseEditDialog}
          autoFocus
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
