import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import DefaultMsg from "../components/DefaultMsg";

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
          <Col size="md-3"></Col>
          <Col size="md-6">
            {this.state.books.length ? (
               <List>
                {this.state.books.map(book => (
                    <ListItem>
                      <DeleteBtn />
                      <br />
                      <br />
                      <a href={book.recipeLink} target='_blank'>
                        <img
                          src={book.recipeImage} 
                          alt={book.recipeName} 
                          height="450" 
                          width="auto">
                        </img>
                      </a>                   
                      <br />
                      <span class="title">{book.recipeName}</span>                  
                    </ListItem>
                ))}
              </List>
            ) : (
              <DefaultMsg />
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;