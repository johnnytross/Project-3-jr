<<<<<<< HEAD
import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
// import DeleteBtn from '../components/DeleteBtn';
import { Col, Row, Container } from '../components/Grid';
// import { List, ListItem } from '../components/List';
import { Input, TextArea, FormBtn } from '../components/Form';
=======
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
>>>>>>> fd4d5ddc5874a30c4633d887fcd1fbb81572b7b3
import axios from 'axios';
import DefaultMsg from "../components/DefaultMsg";


class Books extends Component {
  state = {
    books: [],
    recipeList: []
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

  getRecipes = e => {
    e.preventDefault();
<<<<<<< HEAD
=======
    
    axios.get(`https://api.edamam.com/search?q=${this.state.recipe}&app_id=b3543550&app_key=318de1bc9554cc8c572774822aa601b4&health=vegan`)
      // .then(res => this.setState({ recipeName: res.data }))
      .then(res =>{console.log(res.data.hits)
        this.setState({ recipeList: res.data.hits })
      } 
      )
      .then(console.log("promise kept"))
      .catch(err => console.log(err))

      
    console.log(`https://api.edamam.com/search?q=${this.state.recipe}&app_id=b3543550&app_key=318de1bc9554cc8c572774822aa601b4&health=vegan`);
>>>>>>> fd4d5ddc5874a30c4633d887fcd1fbb81572b7b3

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


  render() {
    //const {recipeList} = this.state;
    return (
      <Container fluid>
        <Row>
          <Col size='md-12'>
            <Jumbotron>
              <h1>Veganize A Recipe!</h1>
              <br />
              <form>
                <Input
                  name='recipe'
                  onChange={this.handleChange}
                  value={this.state.recipe}
                  placeholder='Search by ingredients, recipe name, or keyword...'
                />
                <FormBtn recipeSubmit={this.getRecipes}>Search</FormBtn>
              </form>
            </Jumbotron>
          </Col>
<<<<<<< HEAD
=======
          <Col size="md-3"></Col>
          <Col size="md-6">
            {this.state.recipeList.length ? (
              <List>
                {this.state.recipeList.map(rec => (
                  <ListItem>
                    <DeleteBtn />
                    <br></br>
                    <br></br>
                    <a href={rec.recipe.url}>
                      <img src={rec.recipe.image} height="450" width="auto" alt={rec.recipe.label}></img>
                    </a>
                    <br></br>
                    <span class="title">{rec.recipe.label}</span>
                    <br></br>
                  </ListItem>
                ))}
              </List>
            ) : (
              <DefaultMsg />
            )}
          </Col>

>>>>>>> fd4d5ddc5874a30c4633d887fcd1fbb81572b7b3
        </Row>
      </Container>
    );
  }
}

export default Books;
