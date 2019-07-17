import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from './components/Posts';
import Products from './components/Products';

export default (
  <Switch>
    <Route path="/posts" component={Posts} />
    <Route path="/products" component={Products} />
  </Switch>
);
