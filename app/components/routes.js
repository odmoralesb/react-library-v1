import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


import Layout from './Layout';
import Home from './Home';
import NotFound from './404';

const Routes = () => (
  <Layout>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Layout>
);

export default Routes;
