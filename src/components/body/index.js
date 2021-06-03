import { connect } from 'react-redux';

import { loadMovies } from '../../store/actions/movies';

import Body from './Body';

const mapStateToProps = (state) => ({ movies: state.movies });

const mapDispatchToProps = (dispatch) => ({
  loadMovies: (filter, sort, query) => dispatch(loadMovies(filter, sort, query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
