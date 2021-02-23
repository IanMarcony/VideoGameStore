import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Interna from '../pages/Interna';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/interna/:idgame+/:namegame+" component={Interna} />
      </Switch>
    </Router>
  );
};

export default Routes;
