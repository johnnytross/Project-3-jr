import React, { Component } from 'react';
// import LoginForm from '../components/Login';
import Jumbotron from '../components/Jumbotron';
// import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from '../components/Grid';
// import { List, ListItem } from "../components/List";
import { Input } from '../components/Form';
// import axios from 'axios';

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
