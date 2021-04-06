import React from "react";

export default function GamesWon({ totalGamesPlayed, winCount }) {
  return (
    <div className="stat">
      <p className="scr-title">Games won</p>
      <h1 className="scr-val">
        {winCount}/{totalGamesPlayed}
      </h1>
    </div>
  );
}
