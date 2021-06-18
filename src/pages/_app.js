import React from 'react';

import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Layout from '../components/layout/Layout';
import store from '../store/store';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
};

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default MyApp;
