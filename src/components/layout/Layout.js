import React from 'react'

import PropTypes from 'prop-types'
import './layout.scss'

const Layout = ({ children }) => <div className="main-layout">{children}</div>

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
}

export default Layout
