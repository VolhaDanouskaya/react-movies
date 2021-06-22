import React from 'react';

import PropTypes from 'prop-types';

import Layout from '../components/layout/Layout';
import { wrapper } from '../store/store';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default wrapper.withRedux(MyApp);
