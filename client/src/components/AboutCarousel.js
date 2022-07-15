import React from "react";
import "../css/about.css";
import { Carousel } from "react-bootstrap";

const AboutCarousel = () => {
  return (
    <div className="about__carousel">
      <h1 style={{ paddingBottom: "60px" }}>
        Where I've Lived
        <br />
        <img
          alt="page divider"
          src="https://freesvg.org/img/1543717711.png"
          height={50}
          width={70}
        ></img>
      </h1>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel__image"
            src="./images/arc.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>France</h3>
            <p>2014-2015</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel__image"
            src="./images/shanghai.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Shanghai</h3>
            <p>2015-2018</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel__image"
            src="./images/dragon.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Taiwan</h3>
            <p>2019-Present</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AboutCarousel;
