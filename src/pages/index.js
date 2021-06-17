import React from 'react';

import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch, StaticRouter } from 'react-router-dom';

import Body from '../components/body';
import PageNotFound from '../components/error/PageNotFound';
import Footer from '../components/footer/Footer';
import Header from '../components/header';
import Layout from '../components/layout/Layout';
import store from '../store/store';

const isServer = typeof window === 'undefined';

const App = () => {
  if (isServer) {
    return (
      <StaticRouter>
        <Layout>
          <Provider store={store}>
            <Header />
            <Body />
            <Footer />
          </Provider>
        </Layout>
      </StaticRouter>
    );
  }
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/pagenotfound">
            <PageNotFound />
          </Route>
          <Route path="/">
            <Provider store={store}>
              <Header />
              <Body />
              <Footer />
            </Provider>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
