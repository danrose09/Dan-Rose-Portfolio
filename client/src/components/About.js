import React from "react";
import "../css/about.css";
import { Container, Row, Col } from "react-bootstrap";
import AboutCarousel from "./AboutCarousel";

const About = () => {
  return (
    <div className="about__section" id="about">
      <h1 style={{ color: "#041c32" }} className="about__title">
        About
        <br />
        <img
          alt="page divider"
          src="https://freesvg.org/img/1543717711.png"
          height={50}
          width={70}
        ></img>
      </h1>

      <Container fluid className="about__container">
        <Row className="mx-md-5 align-items-center">
          <Col xl={5} lg={5} md={12} sm={12} className="align-self-center">
            <div className="about__info pt-3">
              <p className="">
                One year ago, while researching the top fastest growing careers,
                I stumbled across computer programming. I tried HTML and CSS
                first, moved on to Python, and then to Javascript a couple
                months later. It was when I learned Javascript that my vague
                notions of becoming a "programmer" turned into something more
                tangible. I wanted to be a full stack web developer.
              </p>
              <br />
              <p>
                Since then I've focused on creating responsive MERN stack web
                applications. I love putting everything together. Whether it's
                making API calls from the front end, routing the back end, or
                using logic to manage state in React.
              </p>
            </div>
          </Col>
          <Col className="text-start px-md-5">
            <div>
              <Row className="py-2">
                <Col xs={2}>
                  <span class="fa-brands fa-html5 skills__icon fa-2x"></span>
                </Col>

                <Col className="pt-1">
                  <div className="skills d-flex align-items-center html me-3 skills__bar">
                    HTML
                  </div>
                </Col>
              </Row>
              <Row className="py-2">
                <Col xs={2}>
                  <span class="fa-brands fa-css3-alt skills__icon fa-2x"></span>
                </Col>
                <Col className="pt-1">
                  <div className="skills__bar skills d-flex align-items-center css me-3">
                    CSS
                  </div>
                </Col>
              </Row>
              <Row className="py-2">
                <Col xs={2}>
                  <span class="fa-brands fa-js skills__icon fa-2x"></span>
                </Col>
                <Col className="pt-1">
                  <div className="skills__bar skills d-flex align-items-center js me-3">
                    JS
                  </div>
                </Col>
              </Row>
              <Row className="py-2">
                <Col xs={2}>
                  <span class="skills__icon fa-brands fa-react fa-2x"></span>
                </Col>
                <Col className="pt-1">
                  <div className="skills__bar skills d-flex align-items-center bootstrap me-3">
                    React
                  </div>
                </Col>
              </Row>
              <Row className="py-2">
                <Col xs={2}>
                  <span class="fa-brands fa-python skills__icon fa-2x"></span>
                </Col>
                <Col className="pt-1">
                  <div className="skills__bar skills d-flex align-items-center react me-3">
                    Python
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row></Row>
      </Container>
      <AboutCarousel />
    </div>
  );
};

export default About;
