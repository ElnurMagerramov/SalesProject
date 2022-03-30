import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import product1 from '../../imgs/product1.jpg'
function MiddleAbout() {
  return (
    <div className="bg-light text-center py-5">
      <Container>
        <br />
        <h1>About us</h1>
        <br />
        <Row>
            <Col xs="6">
            <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          vero accusantium minus quos nesciunt.Quaerat cumque officia itaque
          quasi velit, sequi ratione veniam dignissimos exercitationem soluta
          nihil commodi voluptatibus a? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laboriosam similique iure est cum, ad deleniti
          nesciunt corporis molestiae molestias placeat excepturi ea sit, esse
          facilis culpa. Iste delectus voluptatibus fugit? Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Quisquam vero accusantium minus
          quos nesciunt. Quaerat cumque officia itaque quasi velit, sequi
          ratione veniam dignissimos exercitationem soluta nihil commodi
          voluptatibus a?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Laboriosam similique iure est cum, ad deleniti nesciunt corporis
          molestiae molestias placeat excepturi ea sit, esse facilis culpa. Iste
          delectus voluptatibus fugit? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quisquam vero accusantium minus quos nesciunt.
          Quaerat cumque officia itaque quasi velit, sequi ratione veniam
          dignissimos exercitationem soluta nihil commodi voluptatibus a?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          similique iure est cum, ad deleniti nesciunt corporis molestiae
          molestias placeat excepturi ea sit, esse facilis culpa. Iste delectus
          voluptatibus fugit? Quaerat cumque officia itaque quasi velit, sequi
          ratione veniam dignissimos exercitationem soluta nihil commodi
          voluptatibus a? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Laboriosam similique iure est cum, ad deleniti nesciunt corporis
          molestiae molestias placeat excepturi ea sit, esse facilis culpa. Iste
          delectus voluptatibus fugit? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. <Link to="/about">For more click here</Link>
        </p>
            </Col>
            <Col xs="6">
            <img src={product1} className="col-12"  alt="product1"/>
            </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}
export default MiddleAbout;
