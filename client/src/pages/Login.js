import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
// import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from '../components/Grid';
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from '../components/Form';
import axios from 'axios';

class Login extends Component {
  state = {
    books: []
  };

  handleChange = e => {
    console.log(e);
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size='md-12'>
            <Jumbotron>
              <h3>Login</h3>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size='md-6'>
            <Input />
            <Input />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
