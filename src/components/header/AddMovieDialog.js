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
import PropTypes from 'prop-types';
import { Field, Form, FormikProvider, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
import * as yup from 'yup';

const genresArray = ['Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 'Family', 'Fantasy', 'Science Fiction'];

const AddMovieDialog = ({ open, onAdd, onClose }) => {
  const [genres, setGenres] = useState([]);

  const onCloseAddDialog = () => {
    onClose();
  };

  const onChangeGenres = (value, setFieldValue) => {
    setGenres(value);
    setFieldValue('genres', value);
  };

  const validationSchema = yup.object({
    title: yup.string().required('Title is required'),
    poster_path: yup.string().url().required('Poster url is required'),
    release_date: yup.string(),
    overview: yup.string().required('Overview is required'),
    runtime: yup.number().required('Runtime is required'),
    genres: yup.array().min(1).required('Minimum one genre should be selected'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      release_date: '',
      poster_path: '',
      genres: genres,
      overview: '',
      runtime: '',
    },
    validationSchema: validationSchema,
    values: {
      genres: genres,
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
        <Form>
          <DialogTitle id="alert-dialog-title">Add Movie</DialogTitle>
          <DialogContent className="dialog-form-content">
            <p className="edit-field-name">Title</p>
            <Field type="text" name="title" placeholder="Movie Title" className="edit-field" />
            <ErrorMessage name="title" component="div" className="error" />
            <p className="edit-field-name">Release Date</p>
            <Field type="date" name="release_date" placeholder="Select Date" className="edit-field" />
            <ErrorMessage name="release_date" component="div" className="error" />
            <p className="edit-field-name">Movie URL</p>
            <Field type="text" name="poster_path" placeholder="Movie URL here" className="edit-field" />
            <ErrorMessage name="poster_path" component="div" className="error" />
            <p className="edit-field-name">Genre</p>
            <Select
              type="text"
              name="genres"
              className="edit-field"
              value={genres}
              onChange={(event) => onChangeGenres(event.target.value, formik.setFieldValue)}
              multiple
            >
              {genresArray.map((genre) => (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              ))}
            </Select>
            <ErrorMessage name="genres" component="div" className="error" />
            <p className="edit-field-name">Overview</p>
            <Field as="textarea" name="overview" placeholder="Overview Here" className="edit-field" />
            <ErrorMessage name="overview" component="div" className="error" />
            <p className="edit-field-name">Runtime</p>
            <Field type="number" name="runtime" placeholder="Runtime Here" className="edit-field" />
            <ErrorMessage name="runtime" component="div" className="error" />
          </DialogContent>
          <DialogActions>
            <Button onClick={onCloseAddDialog} color="secondary" size="large">
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
};

export default AddMovieDialog;
