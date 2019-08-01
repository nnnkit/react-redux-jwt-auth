import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from './../store';
import {userLogin} from './../actions';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };
  handleSubmit = () => {
    fetch('https://conduit.productionready.io/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: this.state}),
    })
      .then(res => res.json())
      .then(userInfo => {
        this.props.dispatch(userLogin(userInfo));
        localStorage.userToken = userInfo.user.token;
        this.props.history.push('/');
      })
      .catch(err => console.log(err, 'error'));
  };
  render() {
    const {email, password} = this.state;
    return (
      <div className="column is-half is-offset-one-quarter">
        <h1>Sign In</h1>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>
        <button className="button is-primary" onClick={this.handleSubmit}>
          Sign In
        </button>
      </div>
    );
  }
}

export default connect()(Login);
