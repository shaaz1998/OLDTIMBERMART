import React from 'react';
import '../../App.css';
import Footer from '../Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function About() {
  return (
    <Router>
        <Footer />
        <Switch>          
          <Route path='/Footer' component={Footer} />
        </Switch>
      </Router>
  );
}
