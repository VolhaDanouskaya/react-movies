import React, { useState } from 'react';

import ReactDOM from 'react-dom';

import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeaderContext from './components/header/HeaderContext';
import Layout from './components/layout/Layout';

const App = () => {
  const [headerMovieId, setHeaderMovieId] = useState(null);
  return (
    <Layout>
      <HeaderContext.Provider value={[headerMovieId, setHeaderMovieId]}>
        <Header />
        <Body />
        <Footer />
      </HeaderContext.Provider>
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
