import React from "react";
import Logo from "./Logo";
import Score from "./Score";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Score />
    </div>
  );
}
