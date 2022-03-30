import React, { Component } from "react";
import { Badge,Container } from "reactstrap";
import CategoriesDetails from "./CategoriesDetails";

class Categories extends Component {
  render() {
    return (
      <Container><br/><br/>
        <h1 className="text-center">
          <Badge color="primary">Categories</Badge>
        </h1><br/><br/>
        <CategoriesDetails/><br/><br/>
      </Container>
    );
  }
}

export default Categories;
