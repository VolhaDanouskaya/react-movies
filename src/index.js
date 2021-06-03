import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Body from './components/body';
import PageNotFound from './components/error/PageNotFound';
import Footer from './components/footer/Footer';
import Header from './components/header';
import Layout from './components/layout/Layout';
import store from './store/store';

const App = () => (
  <Router>
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
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
