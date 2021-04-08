import React from "react";
import GamesWon from "./GamesWon";
import Logo from "./Logo";
import Score from "./Score";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <GamesWon />
      <Score />
    </div>
  );
}
