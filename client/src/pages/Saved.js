import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import DefaultMsg from "../components/DefaultMsg";
import Collapsible from 'react-collapsible';

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
              <h1>Saved Recipes</h1>
            </Jumbotron>
          </Col>
          
          <Col size="md-12">
            {this.state.books.length ? (
               <List>
                {this.state.books.map(book => (
                    <ListItem>
                      <Collapsible trigger={book.recipeName}>
                      <DeleteBtn />
                      <br />
                      <br />
                      <a href={book.recipeLink} target='_blank' rel="noopener noreferrer">
                        <img
                          src={book.recipeImage} 
                          alt={book.recipeName} 
                          height="450" 
                          width="auto">
                        </img>
                      </a>                   
                      <br />
                      <span class="title">{book.recipeName}</span>
                      </Collapsible>                 
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