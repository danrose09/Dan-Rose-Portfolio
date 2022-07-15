import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Title() {
  return (
    <Row>
      <Col>
        <h1 style={{ paddingTop: "10px" }} className="title">
          Speed
        </h1>
      </Col>
    </Row>
  );
}
