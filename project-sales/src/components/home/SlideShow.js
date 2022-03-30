import React, { Component } from "react";
// import { Carousel, CarouselCaption, CarouselItem } from "reactstrap";
import slide3 from "../../imgs/slide1.jpg"
import slide2 from "../../imgs/slide2.jpg"
import slide1 from "../../imgs/slide3.png"
import Carousel from 'react-bootstrap/Carousel'
export default class SlideShow extends Component {
  render() {
    return (
        <Carousel fade interval={2000}>
  <Carousel.Item>
    <img height="700px"
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height="700px"
      className="d-block w-100"
      src={slide2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height="700px"
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
  }
}
