import React from "react";
import paperIcon from "../images/icon-paper.svg";
import rockIcon from "../images/icon-rock.svg";

export default function Game({ picked }) {
  return (
    <div className="playGame">
      <div className="pickedByPlayer">
        <img className="paper-icon" src={paperIcon} alt="paper icon" />

        <p>you picked</p>
      </div>
      <div className="pickedByHouse">
        <img className="rock-icon" src={rockIcon} alt="paper icon" />
        <p>the house picked</p>
      </div>
    </div>
  );
}
