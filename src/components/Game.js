import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import paperIcon from "../images/icon-paper.svg";
import rockIcon from "../images/icon-rock.svg";
import scissorIcon from "../images/icon-scissors.svg";
import { setWinStatus } from "../redux/gameSlice";

export default function Game() {
  const { playerPicked, housePicked, items, winStatus } = useSelector(
    (state) => state.game
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let randomlySelectedByHouse =
      items[Math.floor(Math.random() * items.length)];
    dispatch(setWinStatus(randomlySelectedByHouse["item"]));
  }, []);

  return (
    <div className="playGame">
      <div className="pickedByPlayer">
        <img
          className={playerPicked + "-icon"}
          src={
            playerPicked === "paper"
              ? paperIcon
              : playerPicked === "rock"
              ? rockIcon
              : scissorIcon
          }
          alt="player selection icon"
        />

        <p>you picked</p>
      </div>
      <div className="pickedByHouse">
        {housePicked ? (
          <img
            className={housePicked + "-icon"}
            src={
              housePicked === "paper"
                ? paperIcon
                : housePicked === "rock"
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
        <h1> {winStatus === "tie" ? winStatus : "you " + winStatus}</h1>
        <Link to="/">play again</Link>
      </div>
    </div>
  );
}
