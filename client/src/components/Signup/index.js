import React from 'react';
import axios from 'axios';
import Jumbotron from '../Jumbotron';

// This file exports the Input, TextArea, and FormBtn components
class Signup extends React.Component {
  state = { name: '', email: '', password: '' };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const user = { name, email, password };
    axios.post('api/users', user).then(res => {
      //localStorage.setItem('token', res.data.token);
    });
  };

  render() {
    return (
      <Jumbotron>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            value={this.state.name}
            onChange={this.handleChange}
            name='name'
          />
        </label>
        <br></br>
        <label>
          Email:
          <input
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            name='email'
          />
        </label>
        <br></br>
        <label>
          Password:
          <input
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            name='password'
          />
        </label>
        <br></br>
        <input className='btn btn-success btn-success btn-lg' type='submit' value='Submit' />
      </form>
      </Jumbotron>
    );
  }
}

export default Signup;
