<<<<<<< HEAD
import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import DeleteBtn from '../components/DeleteBtn';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, TextArea, FormBtn } from '../components/Form';
=======
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
// import queryString from 'query-string';
>>>>>>> f858a8a05ac3610a456c2696902245fe60948896
import axios from 'axios';

class Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  handleChange = e => {
    console.log(e);
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  };

<<<<<<< HEAD
  getRecipes = e => {
    e.preventDefault();

    console.log('getRecipes: ' + this.state.recipe);
    axios
      .get(
        `https://api.edamam.com/search?q=${
          this.state.recipe
        }&app_id=b3543550&app_key=318de1bc9554cc8c572774822aa601b4&health=vegan`
      )
      .then(res => this.setState({ recipe: res.data }))
      .catch(err => console.log(err));

    console.log(this.state.recipe);
  };
=======
  getRecipes = (e, value) => {
    e.preventDefault();
    
    axios.get(`https://api.edamam.com/search?q=${this.state.recipe}&app_id=b3543550&app_key=318de1bc9554cc8c572774822aa601b4&health=vegan`)
      // .then(res => this.setState({ recipeName: res.data }))
      .then(res => console.log(res.data.hits))
      .catch(err => console.log(err))

      
    console.log(`https://api.edamam.com/search?q=${this.state.recipe}&app_id=b3543550&app_key=318de1bc9554cc8c572774822aa601b4&health=vegan`);

  }

>>>>>>> f858a8a05ac3610a456c2696902245fe60948896

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size='md-12'>
            <Jumbotron>
              <h1>Veganize A Recipe!</h1>

      
            <br></br>
            <form>
              <Input name="recipe" onChange={this.handleChange} value={this.state.recipe} placeholder="Search by ingredients, recipe name, or keyword..." />
              <FormBtn recipeSubmit={this.getRecipes}>Search</FormBtn>
            </form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
