import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import DeleteBtn from '../components/DeleteBtn';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, FormBtn } from '../components/Form';
import axios from 'axios';
import DefaultMsg from '../components/DefaultMsg';
import Collapsible from 'react-collapsible';


class Books extends Component {
  state = {
    books: [],
    recipeList: [],
    isSaved: false
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

    axios
      .get(
        `https://api.edamam.com/search?q=${
          this.state.recipe
        }&app_id=b3543550&app_key=318de1bc9554cc8c572774822aa601b4&health=vegan`
      )
      // .then(res => this.setState({ recipeName: res.data }))
      .then(res => {
        console.log(res.data.hits);
        this.setState({ recipeList: res.data.hits });
      })
      .then(console.log('promise kept'))
      .catch(err => console.log(err));

    console.log(
      `https://api.edamam.com/search?q=${
        this.state.recipe
      }&app_id=b3543550&app_key=318de1bc9554cc8c572774822aa601b4&health=vegan`
    );

    // axios
    //   .get(
    //     `https://api.edamam.com/search?q=${
    //       this.state.recipe
    //     }&app_id=b3543550&app_key=318de1bc9554cc8c572774822aa601b4&health=vegan`
    //   )
    //   .then(res => this.setState({ recipe: res.data }))
    //   .catch(err => console.log(err));

    
  };

  savedRecipe = () => {
    // if(this.state.isSaved === true){
    //   this.setState({
    //     isSaved: false
    //   })
    // } else {
    //   this.setState({
    //     isSaved: true
    //   })
    // }
    // const { isSaved} =this.state

    this.setState({isSaved: !this.state.isSaved})
  }

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
                <FormBtn onClick={this.getRecipes}>Search</FormBtn>
              </form>
            </Jumbotron>
          </Col>
          <Col size='md-3' />
          <Col size='md-6'>
            {this.state.recipeList.length ? (
              <List>
                {this.state.recipeList.map(rec => (
                  <ListItem>
                    <Collapsible trigger={rec.recipe.label}>
                    <DeleteBtn isSaved={this.state.isSaved} savedRecipe={this.savedRecipe} />
                    <br />
                    <br />
                    <a href={rec.recipe.url} target='_blank' rel="noopener noreferrer">
                      <img
                        src={rec.recipe.image}
                        height='450'
                        width='auto'
                        alt={rec.recipe.label}
                      />
                    </a>
                    <br />
                    <span className='title text-center'>
                      {rec.recipe.label}
                    </span>
                    <br />
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

export default Books;
