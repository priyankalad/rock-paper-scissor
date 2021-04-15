import React from "react";
import { useSelector } from "react-redux";

export default function Score() {
  const { score, totalGames, gamesWon } = useSelector((state) => state.game);
  return (
    <div className="stat">
      <div class="stat__games-won">
        <p className="stat__title">Games won</p>
        <h1 className="stat__value">
          {gamesWon}/{totalGames}
        </h1>
      </div>
      <div class="stat__score">
        <p className="stat__title">score</p>
        <h1 className="stat__value">{score}</h1>
      </div>
    </div>

    // <div className="stat">
    //   <p className="scr-title">Games won</p>
    //   <h1 className="scr-val">
    //     {gamesWon}/{totalGames}
    //   </h1>
    // </div>
  );
}
