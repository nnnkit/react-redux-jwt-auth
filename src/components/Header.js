import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {
  handleLogout = () => {
    delete localStorage.userToken;
    this.props.history.push('/');
    this.props.dispatch({type: 'USER_LOGOUT'});
  };
  render() {
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <NavLink className="navbar-item" to="/">
              <h4>JWT Authentication</h4>
            </NavLink>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                {this.props.currentUser ? (
                  <div className="buttons">
                    <NavLink
                      to="/"
                      exact
                      className="button"
                      activeClassName="is-primary"
                    >
                      <strong>Home</strong>
                    </NavLink>
                    <NavLink
                      to="/new"
                      className="button"
                      activeClassName="is-primary"
                    >
                      New Article
                    </NavLink>
                    <NavLink
                      onClick={this.handleLogout}
                      className="button"
                      activeClassName="is-primary"
                    >
                      Logout
                    </NavLink>
                  </div>
                ) : (
                  <div className="buttons">
                    <NavLink
                      to="/signup"
                      className="button"
                      activeClassName="is-primary"
                    >
                      <strong>Sign Up</strong>
                    </NavLink>
                    <NavLink
                      to="/login"
                      className="button"
                      activeClassName="is-primary"
                    >
                      Log In
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapState(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default withRouter(connect(mapState)(Header));
