import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { Col, Button,Card, CardText, CardBody, CardTitle, Badge, Row, Container} from "reactstrap";
import { Link } from "react-router-dom";
class CategoriesDetails extends Component {
    componentDidMount() {
        this.props.actions.getCategories();
      }
    
      selectCategory = (category) => {
        this.props.actions.changeCategory(category);
        this.props.actions.getProducts(category.id);
      };
  render() {
    return (
      <Container>
          <Row  className="d-flex">
        {this.props.categories.map((category) => (
              <Col xs="6">
          <Card key={category.id}>
            <CardBody>
              <CardTitle>
                <Badge color="primary">{category.categoryName}</Badge>
              </CardTitle>
              <CardText>
              {category.categoryName} lorem ipsum dolor sit amet consectetur adipisicing {category.id} elit.
                Quisquam seoUrl-{category.seoUrl} accusantium minus quos nesciunt.
              </CardText>
              <Link to="/products"><Button>Go Products</Button></Link>
            </CardBody>
          </Card><br/></Col>
         
        ))}
         </Row>
      </Container>
    )
  }
}
function mapStateToProps(state) {
    return {
      currentCategory: state.changeCategoryReducer,
      categories: state.categoryListReducer,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        getCategories: bindActionCreators(
          categoryActions.getCategories,
          dispatch
        ),
        changeCategory: bindActionCreators(
          categoryActions.changeCategory,
          dispatch
        ),
      },
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CategoriesDetails);
  