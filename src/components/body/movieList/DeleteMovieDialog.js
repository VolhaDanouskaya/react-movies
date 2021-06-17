import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

const DeleteMovieDialog = ({ open, movieId, onClose, onDelete }) => {
  const onCloseDeleteDialog = () => {
    onClose();
  };

  return (
    <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={onCloseDeleteDialog} maxWidth="lg">
      <IconButton aria-label="close" onClick={onCloseDeleteDialog}>
        <CloseIcon />
      </IconButton>
      <DialogTitle id="alert-dialog-title">Delete Movie</DialogTitle>
      <DialogContent className="dialog-form-content">
        <DialogContentText id="alert-dialog-description">Are you sure you want to delete this movie?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onDelete(movieId)} color="primary" size="large">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteMovieDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
};

export default DeleteMovieDialog;
