import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const DeleteDialog = (props) => {
  const handleCloseDeleteDialog = () => {
    props.onClose();
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={props.open}
      onClose={handleCloseDeleteDialog}
      maxWidth="lg"
    >
      <IconButton aria-label="close" onClick={handleCloseDeleteDialog}>
        <CloseIcon />
      </IconButton>
      <DialogTitle id="alert-dialog-title">Delete Movie</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this movie?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleCloseDeleteDialog}
          color="primary"
          autoFocus
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
