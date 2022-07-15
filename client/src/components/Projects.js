import React from "react";
import { Link } from "react-router-dom";
import "../css/projects.css";
import { Card, Button, Row, Col } from "react-bootstrap";

const Projects = () => {
  return (
    <div className="projects__section">
      <h1
        style={{ paddingTop: "60px", marginBottom: "60px", color: "#041c32" }}
        id="projects"
      >
        Projects
        <br />
        <img
          alt="page divider"
          src="https://freesvg.org/img/1543717711.png"
          height={50}
          width={70}
        ></img>
      </h1>
      {/* <i class="fa-solid fa-folder fa-2x" style={{ marginBottom: "50px" }}></i> */}
      <div className="projects__card">
        <Row>
          <Col lg={4} md={6}>
            <Link
              to="/speed"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card
                bg="dark"
                className="mx-auto mb-5"
                style={{ width: "18rem", color: "white" }}
              >
                <div className="image__container">
                  <Card.Img
                    variant="top"
                    src="./images/cards.jpg"
                    style={{ maxHeight: "40vh" }}
                    className="card__image"
                  ></Card.Img>
                </div>
                <Card.Body>
                  <Card.Title style={{ color: "#e94560" }}>
                    The Game of Speed
                  </Card.Title>
                  <Card.Text style={{ color: "grey" }}>
                    A single player version of the popular card game Speed.
                  </Card.Text>
                  <Button
                    style={{ width: "50%" }}
                    className="card__button"
                    variant="outline-primary"
                  >
                    Play
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg={4} md={6}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=C2T7qG3gIWI&t=338s"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card
                bg="dark"
                className="mx-auto mb-5 mb-lg-0"
                style={{ width: "18rem" }}
              >
                <div className="image__container">
                  <Card.Img
                    variant="top"
                    src="./images/motorcycle.jpg"
                    style={{ maxHeight: "40vh" }}
                  ></Card.Img>
                </div>
                <Card.Body className="card__body">
                  <Card.Title style={{ color: "#e94560" }}>
                    Isla Formosa
                  </Card.Title>
                  <Card.Text style={{ color: "grey" }}>
                    Check out Taiwan on two wheels.
                  </Card.Text>
                  <Button
                    style={{ width: "50%" }}
                    className="card__button"
                    variant="outline-primary"
                  >
                    Watch
                  </Button>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col lg={4} md={6}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/danrose09/"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card
                bg="dark"
                className="mx-auto mb-5 mb-lg-0"
                style={{ width: "18rem" }}
              >
                <div className="image__container">
                  <Card.Img
                    variant="top"
                    src="./images/github2.jpg"
                    style={{ maxHeight: "40vh" }}
                  ></Card.Img>
                </div>
                <Card.Body className="card__body">
                  <Card.Title style={{ color: "#e94560" }}>Github</Card.Title>
                  <Card.Text style={{ color: "grey" }}>
                    Take a look at my most recent projects and works in
                    progress.
                  </Card.Text>
                  <Button
                    style={{ width: "50%" }}
                    className="card__button"
                    variant="outline-primary"
                  >
                    Navigate
                  </Button>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Projects;
