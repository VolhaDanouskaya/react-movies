import * as yup from 'yup';

export const MOVIE_FIELDS = {
  TITLE: 'title',
  RELEASE_DATE: 'release_date',
  POSTER_PATH: 'poster_path',
  GENRES: 'genres',
  OVERVIEW: 'overview',
  RUNTIME: 'runtime',
};

export const genresArray = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Drama',
  'Family',
  'Fantasy',
  'Science Fiction',
];

export const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  poster_path: yup.string().url().required('Poster url is required'),
  release_date: yup.string(),
  overview: yup.string().required('Overview is required'),
  runtime: yup.number().required('Runtime is required'),
  genres: yup.array().min(1).required('Minimum one genre should be selected'),
});
