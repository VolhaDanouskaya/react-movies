import React from 'react';

import { Provider } from 'react-redux';

import Body from '../components/body';
import Footer from '../components/footer/Footer';
import Header from '../components/header';
import Layout from '../components/layout/Layout';
import store from '../store/store';

const App = () => {
  return (
    <Layout>
      <Provider store={store}>
        <Header />
        <Body />
        <Footer />
      </Provider>
    </Layout>
  );
};

export default App;
