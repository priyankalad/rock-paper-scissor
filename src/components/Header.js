import React from "react";
import GamesWon from "./GamesWon";
import Logo from "./Logo";
import Score from "./Score";

export default function Header({ currentScore, totalGamesPlayed, winCount }) {
  return (
    <div className="header">
      <Logo />
      <GamesWon totalGamesPlayed={totalGamesPlayed} winCount={winCount} />
      <Score currentScore={currentScore} />
    </div>
  );
}
