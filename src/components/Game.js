import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import paperIcon from "../images/icon-paper.svg";
import rockIcon from "../images/icon-rock.svg";
import scissorIcon from "../images/icon-scissors.svg";

export default function Game(props) {
  let { playerSelection, items, handleScoreCalc } = props;
  const [houseSelection, setHouseSelection] = useState("");
  const [resultText, setResultText] = useState("");

  useEffect(() => {
    console.log("Inside useeffect ");
    let randomlySelectedByHouse =
      items[Math.floor(Math.random() * items.length)];
    setHouseSelection(randomlySelectedByHouse["item"]);
  }, []);

  useEffect(() => {
    console.log(
      "Inside useeffect called with dependencies: " +
        houseSelection +
        "---" +
        resultText +
        "---"
    );
    if (houseSelection) {
      let itemByPlayer = items.find((i) => i.item === playerSelection);
      if (playerSelection === houseSelection) {
        setResultText("tie");
      } else if (itemByPlayer["beats"] === houseSelection) {
        setResultText("win");
      } else {
        setResultText("lose");
      }
    }
    if (resultText) {
      handleScoreCalc(resultText);
    }
  }, [houseSelection, resultText]);

  return (
    <div className="playGame">
      <div className="pickedByPlayer">
        <img
          className={playerSelection + "-icon"}
          src={
            playerSelection === "paper"
              ? paperIcon
              : playerSelection === "rock"
              ? rockIcon
              : scissorIcon
          }
          alt="player selection icon"
        />

        <p>you picked</p>
      </div>
      <div className="pickedByHouse">
        {houseSelection ? (
          <img
            className={houseSelection + "-icon"}
            src={
              houseSelection === "paper"
                ? paperIcon
                : houseSelection === "rock"
                ? rockIcon
                : scissorIcon
            }
            alt="house selection icon"
          />
        ) : (
          <></>
        )}
        <p>the house picked</p>
      </div>
      <div className="result-container">
        <h1> {resultText === "tie" ? resultText : "you " + resultText}</h1>
        <Link to="/">play again</Link>
      </div>
    </div>
  );
}
