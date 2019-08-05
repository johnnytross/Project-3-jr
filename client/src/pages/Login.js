import React, { Component } from 'react';
import LoginForm from '../components/Login';
import { Container } from '../components/Grid';

class Login extends Component {
  render() {
    return (
      <Container fluid>
        <LoginForm />
      </Container>
    );
  }
}

export default Login;
