import React from "react";
import "../../css/speedHeader.css";
import { Row, Col, Navbar, Nav, Container } from "react-bootstrap";
import Stripe from "../Stripe";

const SpeedHeader = () => {
  return (
    <header className="sticky-top">
      <Row style={{ margin: "0" }}>
        <Col className="text-center">
          <Navbar variant="dark" expand="sm">
            <Container className="navbar__container">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto nav">
                  <Nav.Link className="nav__link px-3 link__text" href="/">
                    <a href="/">Home</a>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Stripe />
    </header>
  );
};

export default SpeedHeader;
