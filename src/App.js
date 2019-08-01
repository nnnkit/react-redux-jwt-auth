import React, {Component, lazy, Suspense} from 'react';
import Header from './components/Header';
import UserContext from './context/userContext';
import Loading from './components/Spinner';
import {connect} from 'react-redux';

import Public from './components/Public';
import Protected from './components/Protected';

// const Protected = lazy(() => import('./components/Protected'));
// const Public = lazy(() => import('./components/Public'));
class App extends Component {
  componentDidMount() {
    if (localStorage.userToken) {
      this.props.dispatch({type: 'TRUE'});
      const token = localStorage.userToken;
      fetch('https://conduit.productionready.io/api/user', {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Token ${token}`,
        },
      })
        .then(res => res.json())
        .then(userInfo => {
          this.props.dispatch({type: 'FALSE'});
          this.props.dispatch({type: 'USER_LOGIN', value: userInfo});
        });
    }
  }

  setUser = user => {
    this.setState({user});
  };
  render() {
    return this.props.isLoading ? (
      <Loading />
    ) : (
      <div>
        <Header />
        {this.props.currentUser.isLoggedIn ? <Protected /> : <Public />}
      </div>
    );
  }
}

export default connect(state => state)(App);
