import { connect } from 'react-redux'

import { loadMovies } from '../../store/actions/movies'

import Body from './Body'

const mapStateToProps = (state) => ({ movies: state.movies })

const mapDispatchToProps = {
  loadMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
