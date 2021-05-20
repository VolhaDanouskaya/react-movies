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

const UpdateMovieDialog = ({ movie, open, onUpdate, onClose }) => {
  const [genres, setGenres] = useState(movie?.genres || []);
  const onCloseEditDialog = () => {
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
      id: movie?.id,
      title: movie?.title,
      release_date: movie?.release_date,
      poster_path: movie?.poster_path,
      overview: movie?.overview,
      runtime: movie?.runtime,
      genres: genres,
    },
    validationSchema: validationSchema,
    values: {
      genres: genres,
    },
    onSubmit: (fields) => {
      onUpdate(fields);
    },
  });

  return (
    <FormikProvider value={formik}>
      <Dialog disableEscapeKeyDown open={open} onClose={onCloseEditDialog}>
        <IconButton aria-label="close" onClick={onCloseEditDialog}>
          <CloseIcon />
        </IconButton>
        <Form>
          <DialogTitle>Edit Movie</DialogTitle>
          <DialogContent className="dialog-form-content">
            <p className="edit-field-name">Movie ID</p>
            <p className="edit-field-name" style={{ color: 'white' }}>
              {movie?.id}
            </p>
            <p className="edit-field-name">Title</p>
            <Field name="title" type="text" className="edit-field" />
            <ErrorMessage name="title" component="div" className="error" />
            <p className="edit-field-name">Release Date</p>
            <Field name="release_date" type="date" className="edit-field" />
            <ErrorMessage name="release_date" component="div" className="error" />
            <p className="edit-field-name">Movie URL</p>
            <Field name="poster_path" type="text" className="edit-field" />
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
            <Field as="textarea" name="overview" aria-label="empty textarea" className="edit-field" />
            <ErrorMessage name="overview" component="div" className="error" />
            <p className="edit-field-name">Runtime</p>
            <Field name="runtime" type="number" className="edit-field" />
            <ErrorMessage name="runtime" component="div" className="error" />
          </DialogContent>
          <DialogActions>
            <Button onClick={onCloseEditDialog} color="secondary" size="large">
              Reset
            </Button>
            <Button color="primary" size="large" type="submit">
              Save
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
    </FormikProvider>
  );
};

UpdateMovieDialog.propTypes = {
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
  onUpdate: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UpdateMovieDialog;
