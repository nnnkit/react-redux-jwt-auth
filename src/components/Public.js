import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import FourNotFour from './404/404';

export default class Public extends Component {
  render() {
    return (
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route component={FourNotFour} />
      </Switch>
    );
  }
}
