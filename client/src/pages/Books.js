import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
// import queryString from 'query-string';
import axios from 'axios';


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

  handleChange = (e) => {
    console.log(e)
    console.log(e.target)
    const { name, value } = e.target
    console.log(name)
    console.log(value)
    this.setState({ [name]: value })
  }

  getRecipes = (e, value) => {
    e.preventDefault();
    
    axios.get(`https://api.edamam.com/search?q=${this.state.recipe}&app_id=b3543550&app_key=318de1bc9554cc8c572774822aa601b4&health=vegan`)
      // .then(res => this.setState({ recipeName: res.data }))
      .then(res =>{console.log(res.data.hits)
        this.setState({ recipeList: res.data.hits })
      } 
      )
      .then(console.log("promise kept"))
      .catch(err => console.log(err))

      
    console.log(`https://api.edamam.com/search?q=${this.state.recipe}&app_id=b3543550&app_key=318de1bc9554cc8c572774822aa601b4&health=vegan`);

  }

  renderRecipe(res){
    
  }


  render() {
    //const {recipeList} = this.state;
    return (
      <Container fluid>
        <Row>
          
          <Col size="md-12">
            <Jumbotron>
              <h1>Veganize A Recipe!</h1>
            <br></br>
            <form>
              <Input name="recipe" onChange={this.handleChange} value={this.state.recipe} placeholder="Search by ingredients, recipe name, or keyword..." />
              <FormBtn recipeSubmit={this.getRecipes} >Search</FormBtn>
            </form>
            </Jumbotron>
          </Col>
          <Col size="md-6 md-offset-2">
            {this.state.recipeList.length ? (
              <List>
                {this.state.recipeList.map(rec => (
                  <ListItem>
                    <img src={rec.recipe.image} height="450" width="auto"></img>
                    <span class="title">{rec.recipe.label}</span>
                    {rec.recipe.url}
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h5>No recipes found. Try searching for one.</h5>
            )}
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Books;
