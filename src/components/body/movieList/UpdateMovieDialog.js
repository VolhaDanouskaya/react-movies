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

import { genresArray, validationSchema, MOVIE_FIELDS } from '../../constants';

import styles from './movies.module.scss';

const UpdateMovieDialog = ({ movie, open, onUpdate, onClose }) => {
  const [genres, setGenres] = useState(movie?.genres || []);
  const onCloseEditDialog = () => {
    onClose();
  };

  const onChangeGenres = (value, setFieldValue) => {
    setGenres(value);
    setFieldValue('genres', value);
  };

  const formik = useFormik({
    initialValues: {
      id: movie?.id,
      title: movie?.title,
      release_date: movie?.release_date,
      poster_path: movie?.poster_path,
      overview: movie?.overview,
      runtime: movie?.runtime,
      genres,
    },
    validationSchema,
    values: {
      genres,
    },
    onSubmit: (fields) => {
      onUpdate(fields);
    },
  });

  return (
    <FormikProvider value={formik}>
      <Dialog
        disableEscapeKeyDown
        open={open}
        onClose={onCloseEditDialog}
        className={styles['.MuiPaper-root.MuiMenu-paper.MuiPopover-paper']}
      >
        <IconButton aria-label="close" onClick={onCloseEditDialog}>
          <CloseIcon />
        </IconButton>
        <Form>
          <DialogTitle>Edit Movie</DialogTitle>
          <DialogContent className={styles['dialog-form-content']}>
            <p className={styles['edit-field-name']}>Movie ID</p>
            <p className={styles['edit-field-name']} style={{ color: 'white' }}>
              {movie?.id}
            </p>
            <p className={styles['edit-field-name']}>Title</p>
            <Field name={MOVIE_FIELDS.TITLE} type="text" className={styles['edit-field']} />
            <ErrorMessage name={MOVIE_FIELDS.TITLE} component="div" className="error" />
            <p className={styles['edit-field-name']}>Release Date</p>
            <Field name={MOVIE_FIELDS.RELEASE_DATE} type="date" className={styles['edit-field']} />
            <ErrorMessage name={MOVIE_FIELDS.RELEASE_DATE} component="div" className="error" />
            <p className={styles['edit-field-name']}>Movie URL</p>
            <Field name={MOVIE_FIELDS.POSTER_PATH} type="text" className={styles['edit-field']} />
            <ErrorMessage name={MOVIE_FIELDS.POSTER_PATH} component="div" className="error" />
            <p className={styles['edit-field-name']}>Genre</p>
            <Select
              type="text"
              name={MOVIE_FIELDS.GENRES}
              className={styles['edit-field']}
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
            <ErrorMessage name={MOVIE_FIELDS.GENRES} component="div" className="error" />
            <p className={styles['edit-field-name']}>Overview</p>
            <Field
              as="textarea"
              name={MOVIE_FIELDS.OVERVIEW}
              aria-label="empty textarea"
              className={styles['edit-field']}
            />
            <ErrorMessage name={MOVIE_FIELDS.OVERVIEW} component="div" className="error" />
            <p className={styles['edit-field-name']}>Runtime</p>
            <Field name={MOVIE_FIELDS.RUNTIME} type="number" className={styles['edit-field']} />
            <ErrorMessage name={MOVIE_FIELDS.RUNTIME} component="div" className="error" />
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
