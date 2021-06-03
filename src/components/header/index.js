import { connect } from 'react-redux';

import { addMovie } from '../../store/actions/movies';

import Header from './Header';

const mapDispatchToProps = (dispatch) => ({
  addMovie: (movie) => dispatch(addMovie(movie)),
});

export default connect(null, mapDispatchToProps)(Header);
