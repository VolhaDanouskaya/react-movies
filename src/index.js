import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line sort-imports-es6-autofix/sort-imports-es6
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Layout from './components/layout/Layout';

const App = () => (
  <Layout>
    <Header />
    <Body />
    <Footer />
  </Layout>
);

ReactDOM.render(<App />, document.getElementById('root'));
