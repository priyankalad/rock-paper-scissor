import React from "react";
import Logo from "./Logo";
import GameStat from "./GameStat";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <GameStat />
    </div>
  );
}
