import { connect } from 'react-redux';

import { getMovie } from '../../../store/actions/header';

import MovieDetails from './MovieDetails';

const mapStateToProps = (state) => ({ movie: state.movie });

const mapDispatchToProps = {
  getMovie,
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
