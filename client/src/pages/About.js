import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";


class About extends Component {
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h3>About</h3>
              <h6>Veganize allows you to search for vegan versions of your favorite recipes. Using Edamam's recipe API, Veganize will give you 
                a number of options tailored to your search terms, and includes ingredients, nutrition facts, and allergen information about each recipe.
                Our group chose to build this app due to a shared interest in healthy and sustainable eating. Though none of us are vegan, we share a mutual interest in
                the nutritional and ethical implications of reducing personal consumption of animal products.
              </h6>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;