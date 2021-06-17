import React from 'react';

import { Provider } from 'react-redux';

import Body from '../../components/body';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header';
import store from '../../store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Body />
      <Footer />
    </Provider>
  );
};

export default App;
