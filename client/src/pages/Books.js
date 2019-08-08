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
        const recipes = res.data.hits
        recipes.forEach(recipe=>(recipe.isSaved=false))
        this.setState({ recipeList: recipes });
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

  savedRecipe = (i, recipe) => {
    //console.log(recipeList)
    const {recipeList} = this.state
    const payload = {
      userName: 'johnny', //TODO: grab email from JWT 
      recipeName: recipe.recipe.label,
      recipeLink: recipe.recipe.url,
      recipeImage: recipe.recipe.image,
    }
    //console.log(payload)
    API.saveBook(payload).then(res =>{
      console.log(res)
    }).catch(err => console.log(err));
    // // axios.post post request here with username and all other info needed for post route
    // // axios.post("/api/books", payload).then(res => {
    // //   console.log(res)
    // // })
    recipeList[i].isSaved = !recipeList[i].isSaved
    this.setState({recipeList})
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
          <Col size='md-6'>
            {this.state.recipeList.length ? (
              <List>
                {this.state.recipeList.map((rec, i) => (
                  <ListItem className="collapseLabel" key={i}>
                    <Collapsible  trigger={rec.recipe.label} >

                    <DeleteBtn isSaved={rec.isSaved} savedRecipe={()=>{this.savedRecipe(i,rec)}} />
                    <br />
                    <br />
                    <a href={rec.recipe.url} target='_blank' rel="noopener noreferrer">
                      <img
                        src={rec.recipe.image}
                        alt={rec.recipe.label}
                        height="auto" 
                        width="300"></img>
                      
                    </a>
                    <br />
                    <span className='title'>
                      <h2>Health Label</h2>
                    </span>
                    <span>{rec.recipe.healthLabels.join(", ")}</span>
                    <br />
                    <span className='title'>
                      <h2>Cautions</h2>
                    </span>
                    <span>{rec.recipe.cautions.join(", ")}</span>
                    <br />
                    <span className='title'>
                      <h2>Ingredients</h2>
                    </span>
                    <span>{rec.recipe.ingredientLines.join(", ")}</span>
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
