import React from "react";
import { Container } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import sales1 from "../../imgs/sales1.jpg";
import sales2 from "../../imgs/sales2.jpg";
import sales3 from "../../imgs/sales3.png";
import sales4 from "../../imgs/sales4.jpg";
const Statistics = () => {
  return (
    <div className="py-5" style={{backgroundImage: "linear-gradient(to bottom right, aqua,aquamarine,blue, aquamarine, aqua)"}}>
        <Container>
      <h1 className="text-center" style={{color:"white"}}>Statistics</h1>
      <Carousel>
        <Carousel.Item>
          <img
            height="400px"
            className="d-block w-100"
            src={sales1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="bg-primary">1234</h3>
            <p className="bg-primary p-2">Product sales for a day.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="400px"
            className="d-block w-100"
            src={sales2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="bg-primary">7063</h3>
            <p className="bg-primary p-2">Product sales for a week.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="400px"
            className="d-block w-100"
            src={sales3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="bg-primary">29021</h3>
            <p className="bg-primary p-2">
            Product sales for a month.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="400px"
            className="d-block w-100"
            src={sales4}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3 className="bg-primary">3603291</h3>
            <p className="bg-primary p-2">
            Product sales for a year
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
    </div>
  );
};
export default Statistics;
