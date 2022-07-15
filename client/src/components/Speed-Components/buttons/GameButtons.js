import React from "react";
import "../../../css/gameButtons.css";
import { Button, Row, Col } from "react-bootstrap";

export default function GameButtons(props) {
  return (
    <div className="container">
      <div hidden={props.hasWon ? true : false} className="row">
        <div className="col-lg">
          <Button
            onClick={props.dealCard}
            className="game-button btn-dark"
            hidden={!props.hasStarted ? false : true}
          >
            Start
          </Button>
        </div>
      </div>

      <Row>
        <Col xs={3} hidden={props.hasWon ? true : false}>
          <Button
            className="game-button btn-dark btn-sm"
            id="dealtohand"
            hidden={props.hasStarted ? false : true}
            onClick={props.generateNewPlayerHand}
          >
            Deal To Hand (q)
          </Button>
        </Col>

        <Col xs={3} hidden={props.hasWon ? true : false}>
          <Button
            id="dealtostack"
            className="game-button btn-dark btn-sm"
            onClick={props.isStuck ? props.dealCard : null}
            hidden={props.isStuck ? false : true}
          >
            Deal To Stack (r)
          </Button>
        </Col>

        <Col xs={3} hidden={props.hasWon ? true : false}>
          <Button
            id="dealrandomcard"
            className="game-button btn-dark btn-sm"
            onClick={props.needMoreCards ? props.giveDeckCards : null}
            hidden={props.needMoreCards ? false : true}
          >
            Deal Random Card (t)
          </Button>
        </Col>

        <Row>
          <Col>
            <Button
              className="game-button btn-dark"
              onClick={props.resetGame}
              hidden={props.hasWon ? false : true}
            >
              Play Again
            </Button>
          </Col>
        </Row>
      </Row>
    </div>
  );
}
