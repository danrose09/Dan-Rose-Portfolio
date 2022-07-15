import React, { useEffect, useState } from "react";

export default function Timer(props) {
  const [time, setTime] = useState(0);

  const timer = {
    minutes: ("0" + Math.floor((time / 60000) % 60)).slice(-2),
    seconds: ("0" + Math.floor((time / 1000) % 60)).slice(-2),
    miliseconds: ("0" + ((time / 10) % 100)).slice(-2),
  };

  const [highScore, setHighScore] = useState({
    rank: props.hasStarted ? 1 : null,
    miliseconds: props.hasStarted ? timer.miliseconds : null,
    seconds: props.hasStarted ? timer.seconds : null,
    minutes: props.hasStarted ? timer.minutes : null,
    user: "Test",
  });

  useEffect(() => {
    setHighScore({
      rank: 1,
      miliseconds: timer.miliseconds,
      seconds: timer.seconds,
      minutes: timer.minutes,
      user: "Test",
    });
  }, [time, timer.miliseconds, timer.seconds, timer.minutes]);

  //Rest the timer
  useEffect(() => {
    setTime(0);
  }, [props.reset]);

  const yourTimeElement = (
    <div>
      <h1>
        Your Time: <span> {timer.minutes}:</span>
        <span> {timer.seconds}:</span>
        <span> {timer.miliseconds}</span>
      </h1>
    </div>
  );

  useEffect(() => {
    function incrementTime() {
      setTime((prevTime) => {
        return prevTime + 10;
      });
    }

    let interval = null;
    if (props.hasStarted && !props.hasWon) {
      interval = setInterval(incrementTime, 10);
    } else if (props.hasWon) {
      clearInterval(interval);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [props.hasStarted, props.hasWon]);

  return (
    <div className="timer">
      {props.hasWon ? yourTimeElement : null}
      <div hidden={props.hasWon ? true : false}>
        <span> {timer.minutes}:</span>
        <span> {timer.seconds}:</span>
        <span> {timer.miliseconds}</span>
      </div>
      <div className="row">
        <div
          className="col-lg-12 highScores-container"
          hidden={props.hasWon ? false : true}
        ></div>
      </div>
    </div>
  );
}
