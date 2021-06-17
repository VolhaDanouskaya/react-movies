import React from 'react';

import PropTypes from 'prop-types';

import Layout from '../components/layout/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default MyApp;
