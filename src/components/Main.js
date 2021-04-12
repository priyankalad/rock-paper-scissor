import React from "react";
import { useHistory } from "react-router-dom";
import triangle from "../images/bg-triangle.svg";
import paperIcon from "../images/icon-paper.svg";
import rockIcon from "../images/icon-rock.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import { useDispatch } from "react-redux";
import { pickForPlayer } from "../redux/gameSlice";

export default function Main() {
  let history = useHistory();
  let dispatch = useDispatch();

  function handleClick(item) {
    dispatch(pickForPlayer(item));
    history.push("/newgame");
  }

  return (
    <div className="main">
      <img className="bgTriange" src={triangle} alt="Triangle" />

      <div className="icons">
        <button className="paper-icon" onClick={() => handleClick("paper")}>
          <img src={paperIcon} alt="paper icon" />
        </button>
        <button
          className="scissors-icon"
          onClick={() => handleClick("scissors")}
        >
          <img src={scissorsIcon} alt="scissors icon" />
        </button>
        <button className="rock-icon" onClick={() => handleClick("rock")}>
          <img src={rockIcon} alt="rock icon" />
        </button>
      </div>
    </div>
  );
}
