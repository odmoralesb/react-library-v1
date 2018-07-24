import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


import Layout from './Layout';
import Home from './Home';
import Contact from './Contact';


import Book from './Home/Book';

import NotFound from './404';

const Routes = () => (
  <Layout>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/book/:id" exact component={Book} />
        <Route path="/contact" exact component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Layout>
);

export default Routes;
