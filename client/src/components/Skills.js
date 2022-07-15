import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../css/about.css";
import {} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="skills__section">
      <h1 className="skills__title">Skills</h1>
      <i class="fa-solid fa-computer fa-2x" style={{ color: "#413F42" }}></i>
      <Container fluid className="skills__container">
        <Row>
          <Col>
            <i class="fa-brands fa-html5 fa-5x skills__icons"></i>
          </Col>
          <Col>
            <i class="fa-brands fa-css3-alt fa-5x skills__icons"></i>
          </Col>
          <Col>
            <i class="fa-brands fa-js fa-5x skills__icons"></i>
          </Col>
          <Col>
            <i class="fa-brands fa-react fa-5x skills__icons"></i>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 style={{ color: "#413f42", paddingTop: "60px" }}>
              What I'm learning
              <hr></hr>
            </h2>
            <img src="./images/Redux.png" alt="Redux logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
