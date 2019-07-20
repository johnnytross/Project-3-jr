import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from 'axios'

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

  handleChange = (e) => {
    console.log(e)
    console.log(e.target)
    const {name, value} = e.target
    console.log(name)
    console.log(value)
    this.setState({[name]: value})
  }

  getRecipes = (e) =>{
    e.preventDefault();
    //axios get recipes here
    
    console.log("getRecipes: "+this.state.recipeName)
    const originSearch = this.state.recipeName;
    const search = originSearch.split(" ").join("+");
    console.log(search);

    const recipeAPI = `https://api.edamam.com/search?q=${search}&app_id=b3543550&app_key=318de1bc9554cc8c572774822aa601b4`
    console.log(recipeAPI);
    axios.get(recipeAPI)
      .then(res => this.setState({ recipe: res.data }))
      .catch(err => console.log(err));
    
  }

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-2">
            <Jumbotron>
              <h3>More stuff here...</h3>
            </Jumbotron>
            
          </Col>
          <Col size="md-8">
            <Jumbotron>
              <h1>Veganize A Recipe!</h1>
            </Jumbotron>
            <form>
              <Input name="recipeName" onChange={this.handleChange} value={this.state.recipeName} placeholder="Search by ingredients, recipe name, or keyword..." />
              <FormBtn recipeSubmit={this.getRecipes} >Search</FormBtn>
            </form>
          </Col>
          <Col size="md-2">
            <Jumbotron>
              <h3>Saved Recipes</h3>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h5>No recipes found</h5>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
