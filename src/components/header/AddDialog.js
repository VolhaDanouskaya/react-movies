/* eslint-disable react/prop-types */
import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
// import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CloseIcon from '@material-ui/icons/Close';

const AddDialog = (props) => {
  const handleCloseAddDialog = () => {
    props.onClose();
  };

  const { open } = props;
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={open}
      onClose={handleCloseAddDialog}
    >
      <IconButton aria-label="close" onClick={handleCloseAddDialog}>
        <CloseIcon />
      </IconButton>
      <DialogTitle id="alert-dialog-title">Add Movie</DialogTitle>
      <DialogContent>
        <form noValidate autoComplete="off">
          <p className="edit-field-name">Title</p>
          <Input
            type="text"
            defaultValue="Movie Title"
            className="edit-field"
          />
          <p className="edit-field-name">Release Date</p>
          <Input
            type="date"
            defaultValue="Select Date"
            className="edit-field"
          />
          <p className="edit-field-name">Movie URL</p>
          <Input
            type="text"
            defaultValue="Movie URL here"
            className="edit-field"
          />
          <p className="edit-field-name">Genre</p>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="Select Genre"
            className="edit-field"
          />
          <p className="edit-field-name">Overview</p>
          <Input
            type="text"
            defaultValue="Overview Here"
            className="edit-field"
          />
          <p className="edit-field-name">Runtime</p>
          <Input
            type="text"
            defaultValue="Runtime Here"
            className="edit-field"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleCloseAddDialog}
        >
          Reset
        </Button>
        <Button
          onClick={handleCloseAddDialog}
          autoFocus
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddDialog;
