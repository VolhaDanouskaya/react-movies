import { connect } from 'react-redux';

import { getMovie } from '../../../store/actions/header';

import MovieDetails from './MovieDetails';

const mapStateToProps = (state) => ({ movie: state.movie });

const mapDispatchToProps = (dispatch) => ({
  getMovieById: (id) => dispatch(getMovie(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
