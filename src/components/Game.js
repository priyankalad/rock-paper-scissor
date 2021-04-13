import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import paperIcon from "../images/icon-paper.svg";
import rockIcon from "../images/icon-rock.svg";
import rockWhiteIcon from "../images/icon-rock-white.svg";
import scissorIcon from "../images/icon-scissors.svg";
import { setWinStatus } from "../redux/gameSlice";

export default function Game() {
  const { playerPicked, housePicked, items, winStatus } = useSelector(
    (state) => state.game
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const [reachedTime, setReachedTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      let randomlySelectedByHouse =
        items[Math.floor(Math.random() * items.length)];
      dispatch(setWinStatus(randomlySelectedByHouse["item"]));
      setReachedTime(true);
    }, 1800);
  }, [dispatch, items]);

  function handleClick() {
    history.push("/");
  }

  return reachedTime ? (
    <div className="playGame">
      <div className="pickedByPlayer">
        {/* {playerPicked + "-icon"+{(winStatus==="win")?" win-"+playerPicked}} */}
        <img
          className={
            winStatus === "win"
              ? playerPicked + "-icon win-" + playerPicked
              : playerPicked + "-icon"
          }
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
            className={
              winStatus === "lose"
                ? housePicked + "-icon win-" + housePicked
                : housePicked + "-icon"
            }
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
        <button onClick={handleClick}>play again</button>
      </div>
    </div>
  ) : (
    <div className="playGameNeutral">
      <div className="pickedByPlayerNeutral">
        <img
          className={playerPicked + "-icon-neutral"}
          src={rockWhiteIcon}
          alt="player selection icon"
        />
      </div>
      <div className="pickedByHouseNeutral">
        <img
          className={housePicked + "-icon-neutral"}
          src={rockWhiteIcon}
          alt="house selection icon"
        />
      </div>
    </div>
  );
}
