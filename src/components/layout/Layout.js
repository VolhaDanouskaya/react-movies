import React from 'react';

import PropTypes from 'prop-types';

import styles from './layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles['main-layout']}>{children}</div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Layout;
