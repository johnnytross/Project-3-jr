import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from 'axios'

class Saved extends Component {
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

  handleChange = (e) => {
    console.log(e)
    console.log(e.target)
    const { name, value } = e.target
    console.log(name)
    console.log(value)
    this.setState({ [name]: value })
  }

  getRecipes = (e) => {
    e.preventDefault();


    console.log("getRecipes: " + this.state.recipe)
    axios.get(`https://api.edamam.com/search?q=${this.state.recipe}&app_id=b3543550&app_key=318de1bc9554cc8c572774822aa601b4`)
      .then(res => this.setState({ recipe: res.data }))
      .catch(err => console.log(err));

    console.log(this.state.recipe)

  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h3>Saved Recipes</h3>
            </Jumbotron>
            <div class="recipeList">
            {this.state.books.length ? (
               <ul class="collection">
                {this.state.books.map(book => (
                  <li class="collection-item avatar">
                    
                      {/* <strong>
                       User name: {book.userName} 
                       <br></br>Recipe name: {book.recipeName} 
                       <br></br>Recipe link: {book.recipeLink} 
                       <br></br>Recipe Image: {book.recipeImage}
                      </strong> */}
                      <img src={book.recipeImage} alt={book.recipeName} height="450"></img>
                      <br></br>
                      <span class="title">{book.recipeName}</span>
                      <p>Recipe link: {book.recipeLink}  <br></br>
                      Recipe Image: {book.recipeImage}
                      </p>
                    
                    <DeleteBtn />
                    </li>
                ))}
              </ul>
            ) : (
                <h5>No recipes found</h5>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;