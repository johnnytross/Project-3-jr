import React, { Component } from 'react';
import LoginForm from '../components/Login';

class Login extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size='md-12'>
            <Jumbotron>
              <h3>Login</h3>
              <br />
              <Row>
                <Col size='md-3' />
                <Col size='md-6'>
                  <Input />
                  <Input />
                  <br />
                  <input
                    className='btn btn-success btn-success btn-lg'
                    type='submit'
                    value='Submit'
                  />
                </Col>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
