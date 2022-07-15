import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import "../../css/playerCard.css";

export default function PlayerCard(props) {
  const keys = ["a", "s", "d", "f", "g"];

  return (
    <Fragment>
      <img
        onClick={props.playCard}
        className="player__card__image"
        src={props.image}
        alt="player card"
      ></img>
      <br></br>

      <Button
        id={props.id}
        onClick={props.playCard}
        className="game__button btn-dark btn-sm"
      >
        ({keys[props.id - 1]})
      </Button>
    </Fragment>
  );
}
