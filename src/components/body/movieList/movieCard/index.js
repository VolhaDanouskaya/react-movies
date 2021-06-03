import { connect } from 'react-redux';

import { deleteMovie, updateMovie } from '../../../../store/actions/movies';

import MovieCard from './MovieCard';

const mapDispatchToProps = (dispatch) => ({
  updateMovie: (movie) => dispatch(updateMovie(movie)),
  deleteMovie: (id) => dispatch(deleteMovie(id)),
});

export default connect(null, mapDispatchToProps)(MovieCard);
