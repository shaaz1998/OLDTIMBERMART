import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default function Products() {
  return (
    <Router>
        <CardItem />
        <Switch>
          
          <Route path='/CardItem' component={CardItem} />
        </Switch>
      </Router>
  );
}
