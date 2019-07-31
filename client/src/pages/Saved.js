import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

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




  render() {
    
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h3>Saved Recipes</h3>
            </Jumbotron>
          </Col>
          <Col size="md-6 md-offset-2">
            {this.state.books.length ? (
               <List>
                {this.state.books.map(book => (
                    <ListItem>
                      {/* <strong>
                       User name: {book.userName} 
                       <br></br>Recipe name: {book.recipeName} 
                       <br></br>Recipe link: {book.recipeLink} 
                       <br></br>Recipe Image: {book.recipeImage}
                      </strong> */}
                      <img src={book.recipeImage} alt={book.recipeName} height="450" width="auto"></img>
                      <br></br>
                      <span class="title">{book.recipeName}</span>
                      <p>Recipe link: {book.recipeLink}  <br></br>
                      Recipe Image: {book.recipeImage}
                      </p>
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

export default Saved;