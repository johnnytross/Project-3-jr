import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

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
              <Input name="recipe" placeholder="Search by ingredients, recipe name, or keyword..." />
              <FormBtn>Search</FormBtn>
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
