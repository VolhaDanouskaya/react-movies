import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CloseIcon from '@material-ui/icons/Close';
import { Field, Form, FormikProvider, ErrorMessage, useFormik } from 'formik';
import PropTypes from 'prop-types';

import { genresArray, validationSchema, MOVIE_FIELDS } from '../constants';

const AddMovieDialog = ({ open, onAdd, onClose }) => {
  const [genres, setGenres] = useState([]);

  const onCloseAddDialog = () => {
    onClose();
  };

  const onChangeGenres = (value, setFieldValue) => {
    setGenres(value);
    setFieldValue('genres', value);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      release_date: '',
      poster_path: '',
      genres,
      overview: '',
      runtime: '',
    },
    validationSchema,
    values: {
      genres,
    },
    onSubmit: (fields) => {
      onAdd(fields);
    },
  });

  return (
    <FormikProvider value={formik}>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={onCloseAddDialog}>
        <IconButton aria-label="close" onClick={onCloseAddDialog}>
          <CloseIcon />
        </IconButton>
        <Form title="add-movie">
          <DialogTitle id="alert-dialog-title">Add Movie</DialogTitle>
          <DialogContent className="dialog-form-content">
            <p className="edit-field-name">Title</p>
            <Field
              type="text"
              name={MOVIE_FIELDS.TITLE}
              placeholder="Movie Title"
              className="edit-field"
              title="title"
            />
            <ErrorMessage name={MOVIE_FIELDS.TITLE} component="div" className="error" />
            <p className="edit-field-name">Release Date</p>
            <Field
              type="date"
              name={MOVIE_FIELDS.RELEASE_DATE}
              placeholder="Select Date"
              className="edit-field"
              title="release_date"
            />
            <ErrorMessage name={MOVIE_FIELDS.RELEASE_DATE} component="div" className="error" />
            <p className="edit-field-name">Movie URL</p>
            <Field
              type="text"
              name={MOVIE_FIELDS.POSTER_PATH}
              placeholder="Movie URL here"
              className="edit-field"
              title="poster_path"
            />
            <ErrorMessage name={MOVIE_FIELDS.POSTER_PATH} component="div" className="error" />
            <p className="edit-field-name">Genre</p>
            <Select
              type="text"
              name={MOVIE_FIELDS.GENRES}
              className="edit-field"
              value={genres}
              onChange={(event) => onChangeGenres(event.target.value, formik.setFieldValue)}
              multiple
              title="genres"
            >
              {genresArray.map((genre) => (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              ))}
            </Select>
            <ErrorMessage name={MOVIE_FIELDS.GENRES} component="div" className="error" />
            <p className="edit-field-name">Overview</p>
            <Field
              as="textarea"
              name={MOVIE_FIELDS.OVERVIEW}
              placeholder="Overview Here"
              className="edit-field"
              title="overview"
            />
            <ErrorMessage name={MOVIE_FIELDS.OVERVIEW} component="div" className="error" />
            <p className="edit-field-name">Runtime</p>
            <Field
              type="number"
              name={MOVIE_FIELDS.RUNTIME}
              placeholder="Runtime Here"
              className="edit-field"
              title="runtime"
            />
            <ErrorMessage name={MOVIE_FIELDS.RUNTIME} component="div" className="error" />
          </DialogContent>
          <DialogActions>
            <Button onClick={onCloseAddDialog} color="secondary" size="large" title="reset">
              Reset
            </Button>
            <Button type="submit" color="primary" size="large">
              Submit
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
    </FormikProvider>
  );
};

AddMovieDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default AddMovieDialog;
