import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import DefaultMsg from "../components/DefaultMsg";
import Collapsible from 'react-collapsible';
const user = localStorage.getItem('email');


class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    if (localStorage.getItem("token")){
      this.loadBooks()
    }
    
  }

  loadBooks = () => {
    console.log(user)
    API.getBooks(user)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  savedRecipe = () => {
    this.setState({isSaved: !this.state.isSaved})
  }



  render() {
    
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Saved Recipes</h1>
            </Jumbotron>
          </Col>
          
          <Col size="md-4">
            {this.state.books.length ? (
               <List>
                {this.state.books.map(book => (
                    <ListItem>
                      <Collapsible trigger={book.recipeName}>
                      <DeleteBtn isSaved={this.state.isSaved} savedRecipe={this.savedRecipe} />
                      <br />
                      <br />
                      <a href={book.recipeLink} target='_blank' rel="noopener noreferrer">
                        <img
                          src={book.recipeImage} 
                          alt={book.recipeName} 
                          height="auto" 
                          width="300">
                        </img>
                      </a>                   
                      <br />
                      <span className="title">{book.userName}</span>
                      <br />
                      <span className="title">{book.recipeName}</span>
                      <br />
                      <span className="title">{book.healthLabels}</span>
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