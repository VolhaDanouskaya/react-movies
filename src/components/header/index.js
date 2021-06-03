import { connect } from 'react-redux';

import { addMovie } from '../../store/actions/movies';

import Header from './Header';

const mapDispatchToProps = {
  addMovie,
};

export default connect(null, mapDispatchToProps)(Header);
