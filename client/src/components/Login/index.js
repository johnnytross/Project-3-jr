import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = { email: '', password: '' };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    //grabbing values from state and storing it in 3 variables
    const { email, password } = this.state;
    //storing name email and password inside of an object
    const user = { email, password };

    axios.post('api/auth', user).then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('email', res.data.user);

      window.location.href = 'http://localhost:3000/';
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            name='email'
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            name='password'
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default Login;
