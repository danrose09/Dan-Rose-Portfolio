import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../css/deck.css";

export default function Deck(props) {
  return (
    <Row hidden={props.hasStarted ? false : true}>
      <Col>
        <img
          style={{ paddingBottom: "50px", marginTop: "25px" }}
          className="deck__card__image"
          src={props.image}
          alt="Deck"
        ></img>
      </Col>
    </Row>
  );
}
