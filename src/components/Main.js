import React from "react";
import triangle from "../images/bg-triangle.svg";
import paperIcon from "../images/icon-paper.svg";
import rockIcon from "../images/icon-rock.svg";
import scissorsIcon from "../images/icon-scissors.svg";

export default function Main() {
  return (
    <div className="main">
      <img className="bgTriange" src={triangle} alt="Triangle" />

      <div className="icons">
        <img className="paper-icon" src={paperIcon} alt="paper icon" />

        <img className="scissors-icon" src={scissorsIcon} alt="scissors icon" />

        <img className="rock-icon" src={rockIcon} alt="rock icon" />
      </div>
    </div>
  );
}
