import './layout.scss';
import PropTypes from 'prop-types';
import React from 'react';

const Layout = ({ children }) => <div className="main-layout">{children}</div>;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Layout;
