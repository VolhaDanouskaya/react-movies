import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Layout from './components/layout/Layout';
import store from './store/store';

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

ReactDOM.render(<App />, document.getElementById('root'));
