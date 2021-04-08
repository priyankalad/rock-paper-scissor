import React from "react";
import { useSelector } from "react-redux";

export default function GamesWon() {
  const { totalGames, gamesWon } = useSelector((state) => state.game);
  return (
    <div className="stat">
      <p className="scr-title">Games won</p>
      <h1 className="scr-val">
        {gamesWon}/{totalGames}
      </h1>
    </div>
  );
}
