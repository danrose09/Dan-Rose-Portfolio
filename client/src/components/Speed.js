import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Deck from "./Speed-Components/Deck";
import deck from "../../src/deck";
import PlayerCard from "./Speed-Components/PlayerCard";
import Confetti from "react-confetti";
import Title from "./Speed-Components/Title";
import GameButtons from "./Speed-Components/buttons/GameButtons";
import Timer from "./Speed-Components/Timer";
import SpeedHeader from "./Speed-Components/SpeedHeader";
import Footer from "../components/Footer";

function useKey(key, cb) {
  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  });

  useEffect(() => {
    function handleKey(event) {
      if (event.key === key) {
        callbackRef.current(event);
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [key]);
}

function Speed() {
  //Keyboard Functionality

  function playCardOne() {
    document.getElementById("1").click();
  }
  function playCardTwo() {
    document.getElementById("2").click();
  }
  function playCardThree() {
    document.getElementById("3").click();
  }
  function playCardFour() {
    document.getElementById("4").click();
  }
  function playCardFive() {
    document.getElementById("5").click();
  }
  function randomCardtoHand() {
    document.getElementById("dealtohand").click();
  }

  function randomCardToStack() {
    document.getElementById("dealtostack").click();
  }

  function dealRandomCard() {
    document.getElementById("dealrandomcard").click();
  }

  useKey("a", playCardOne);
  useKey("s", playCardTwo);
  useKey("d", playCardThree);
  useKey("f", playCardFour);
  useKey("g", playCardFive);
  useKey("q", randomCardtoHand);
  useKey("r", randomCardToStack);
  useKey("t", dealRandomCard);

  const [fullDeck, setFullDeck] = useState(deck);
  const [newDeck] = useState(deck);
  const [card, setCard] = useState("");
  const [playerHand, setPlayerHand] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [needMoreCards, setNeedMoreCards] = useState(false);
  const [isFiveCardDeck, setIsFiveCardDeck] = useState(false);
  const [reset, setReset] = useState(false);

  //CheckIfStuck functionality

  //Check if the player is stuck and cannot play cards in hand

  useEffect(() => {
    function checkIfStuck(card, playerhand, fulldeck) {
      function checkValue(cardItem) {
        if (cardItem.Value !== 2 && cardItem.Value !== 14) {
          return (
            cardItem.Value !== card.Value - 1 &&
            cardItem.Value !== card.Value + 1
          );
        } else if (cardItem.Value === 2) {
          return card.Value !== 14 && card.Value !== 3;
        } else if (cardItem.Value === 14) {
          return card.Value !== 2 && card.Value !== 13;
        }
      }

      if (playerhand.length > 0 && fulldeck.length === 0 && isFiveCardDeck) {
        setNeedMoreCards(true);
      } else if (
        playerhand.length > 0 &&
        fulldeck.length === 0 &&
        !isFiveCardDeck
      ) {
        setNeedMoreCards(true);
      } else if (playerhand.every(checkValue) === true && !isFiveCardDeck) {
        if (fulldeck.length > 0 && playerhand.length === 5) {
          setIsStuck(true);
        }
      } else if (playerhand.every(checkValue) === true && isFiveCardDeck) {
        setIsStuck(true);
      } else {
        setIsStuck(false);
        setNeedMoreCards(false);
      }
    }
    checkIfStuck(card, playerHand, fullDeck);
  }, [playerHand, card, fullDeck, isFiveCardDeck]);

  //checkHasWon function

  //Continue to check if player has won the game

  useEffect(() => {
    function checkHasWon(fulldeck, playerhand) {
      if (fulldeck.length === 0 && playerhand.length === 0) {
        setHasWon(true);
        setHasStarted(false);

        console.log("Congrats you won!");
      } else if (playerhand.length === 0 && isFiveCardDeck) {
        setNeedMoreCards(false);
        setHasWon(true);
        setHasStarted(false);

        console.log("Congrats you won!");
      }
    }
    checkHasWon(fullDeck, playerHand);
  }, [playerHand, card, fullDeck, isFiveCardDeck]);

  //Begin game and deal random card to stack

  function dealCard() {
    if (fullDeck.length > 0) {
      setHasStarted(true);
      setReset(false);

      let randomCard = Math.floor(Math.random() * fullDeck.length);
      let newCard = fullDeck[randomCard];
      setCard(newCard);

      setFullDeck((prevDeck) => {
        return prevDeck.filter((card) => card.id !== newCard.id);
      });
    }
  }

  //Create random card from deck

  function generateNewCard() {
    let randomCard = Math.floor(Math.random() * fullDeck.length);
    let newCard = fullDeck[randomCard];

    setFullDeck((prevDeck) => {
      return prevDeck.filter((card) => card.id !== newCard.id);
    });

    return { ...newCard };
  }

  //Add card from deck to player hand

  function generateNewPlayerHand() {
    if (playerHand.length < 5 && fullDeck.length > 0) {
      setPlayerHand((prevHand) => [...prevHand, generateNewCard()]);
    }
  }

  //Play card from hand to the stack

  function playCard(playerCard, stackCard) {
    if (
      playerCard.Value === stackCard.Value + 1 ||
      playerCard.Value === stackCard.Value - 1
    ) {
      setCard(playerCard);
      setPlayerHand(
        playerHand.filter((cardItem) => {
          return cardItem.id !== playerCard.id;
        })
      );
    } else if (playerCard.Value === 2 && stackCard.Value === 14) {
      setCard(playerCard);
      setPlayerHand(
        playerHand.filter((cardItem) => {
          return cardItem.id !== playerCard.id;
        })
      );
    } else if (playerCard.Value === 14 && stackCard.Value === 2) {
      setCard(playerCard);
      setPlayerHand(
        playerHand.filter((cardItem) => {
          return cardItem.id !== playerCard.id;
        })
      );
    }
  }

  //Give deck New Cards when deck length === 0

  function giveDeckCards() {
    setIsFiveCardDeck(true);
    let randomCard = Math.floor(Math.random() * newDeck.length);
    let newCard = newDeck[randomCard];

    function dealAgain() {
      console.log("dealt again");
      let randomCard = Math.floor(Math.random() * newDeck.length);
      let newCard = newDeck[randomCard];
      function checkIfPlayed(cardItem) {
        if (cardItem.id !== newCard.id) {
          return true;
        } else {
          return false;
        }
      }

      if (playerHand.every(checkIfPlayed) === true) {
        setCard(newCard);
      } else {
        dealAgain();
      }
    }

    function checkIfPlayed(cardItem) {
      if (cardItem.id !== newCard.id) {
        return true;
      } else {
        return false;
      }
    }

    if (playerHand.every(checkIfPlayed) === true) {
      setCard(newCard);
    } else {
      dealAgain();
    }

    setFullDeck([]);
    setHasStarted(true);
    setIsStuck(false);
    setHasWon(false);
    setNeedMoreCards(false);
  }

  //Reset the Game

  function resetGame() {
    setFullDeck(deck);
    setCard("");
    setPlayerHand([]);
    setHasStarted(false);
    setIsStuck(false);
    setHasWon(false);
    setNeedMoreCards(false);
    setIsFiveCardDeck(false);
    setReset(true);
  }

  //Create Player Hand Elements

  const playerHandElements = playerHand.map((cards) => (
    <Col>
      <PlayerCard
        key={cards.id}
        image={cards.image}
        id={playerHand.indexOf(cards) + 1}
        playCard={() => {
          return playCard(cards, card);
        }}
        hasStarted={hasStarted}
      />
    </Col>
  ));

  return (
    <div id="app" className="App">
      {hasWon ? <Confetti /> : null}
      <SpeedHeader />
      <Container style={{ height: "100vh" }}>
        <Title />
        <Timer
          hasStarted={hasStarted}
          hasWon={hasWon}
          fullDeck={fullDeck}
          reset={reset}
        />

        <GameButtons
          fullDeck={fullDeck}
          generateNewPlayerHand={generateNewPlayerHand}
          dealCard={dealCard}
          hasStarted={hasStarted}
          giveDeckCards={giveDeckCards}
          resetGame={resetGame}
          isStuck={isStuck}
          needMoreCards={needMoreCards}
          hasWon={hasWon}
          isFiveCardDeck={isFiveCardDeck}
        />
        <Deck image={card.image} hasStarted={hasStarted} />
        <div className="row">
          <div className="playerhand-container">
            {<Row>{playerHandElements}</Row>}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Speed;
