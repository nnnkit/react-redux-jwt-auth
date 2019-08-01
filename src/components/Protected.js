import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import NewArticle from './NewArticle';
import SingleArticle from './SingleArticle';
import FourNotFour from './404/404';

export default class Protected extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/new" component={NewArticle} />
          <Route path="/articles/:slug" component={SingleArticle} />
          <Route component={FourNotFour} />
        </Switch>
      </>
    );
  }
}
