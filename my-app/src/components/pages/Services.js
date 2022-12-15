import React from 'react';
import '../../App.css';
import Cards from '../Cards';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Services() {
  return (
    <Router>
        <Cards/>
        <Switch>
          
          <Route path='/Cards' component={Cards} />
        </Switch>
      </Router>
  );
}
