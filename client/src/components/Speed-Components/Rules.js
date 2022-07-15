import React from "react";
import { Button } from "react-bootstrap";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../../css/rules.css";

const Rules = () => (
  <Popup
    trigger={<Button className="btn-dark"> Rules</Button>}
    position="right center"
  >
    <div className="rules">Your Rules here</div>
  </Popup>
);

export default Rules;
