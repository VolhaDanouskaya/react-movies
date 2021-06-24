import React from 'react';

import PropTypes from 'prop-types';
import './layout.scss';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

// PATTERN: Layout component
const Layout = ({ children }) => <div className="main-layout">{children}</div>;

Layout.propTypes = propTypes;

export default Layout;
