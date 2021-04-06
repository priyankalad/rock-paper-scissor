import React from "react";
import { Link } from "react-router-dom";
import triangle from "../images/bg-triangle.svg";
import paperIcon from "../images/icon-paper.svg";
import rockIcon from "../images/icon-rock.svg";
import scissorsIcon from "../images/icon-scissors.svg";

export default function Main({ playerSelectionHandler }) {
  return (
    <div className="main">
      <img className="bgTriange" src={triangle} alt="Triangle" />

      <div className="icons">
        <Link
          to="/newgame"
          className="paper-icon"
          onClick={() => playerSelectionHandler("paper")}
        >
          <img src={paperIcon} alt="paper icon" />
        </Link>
        <Link
          to="/newgame"
          className="scissors-icon"
          onClick={() => playerSelectionHandler("scissors")}
        >
          <img src={scissorsIcon} alt="scissors icon" />
        </Link>
        <Link
          to="/newgame"
          className="rock-icon"
          onClick={() => playerSelectionHandler("rock")}
        >
          <img src={rockIcon} alt="rock icon" />
        </Link>
      </div>
    </div>
  );
}
