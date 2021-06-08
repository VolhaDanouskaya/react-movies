import { connect } from 'react-redux';

import { deleteMovie, updateMovie } from '../../../../store/actions/movies';

import MovieCard from './MovieCard';

const mapDispatchToProps = {
  updateMovie,
  deleteMovie,
};

export default connect(null, mapDispatchToProps)(MovieCard);
