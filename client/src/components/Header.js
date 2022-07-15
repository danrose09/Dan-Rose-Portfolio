import React from "react";
import { Row, Col, Navbar, Nav, Container } from "react-bootstrap";
import "../css/header.css";
import Stripe from "./Stripe";
const Header = () => {
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
                    <a href="#home">Home</a>
                  </Nav.Link>
                  <Nav.Link className="nav__link px-3 link__text" href="/">
                    <a href="#about">About</a>
                  </Nav.Link>
                  <Nav.Link className="nav__link px-3 link__text" href="/">
                    <a href="#projects">Projects</a>
                  </Nav.Link>
                  <Nav.Link className="nav__link link__text" href="/">
                    <a href="#resume">Resume</a>
                  </Nav.Link>
                  <Nav.Link className="nav__link link__text" href="/">
                    <a href="#contact">Contact</a>
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

export default Header;
