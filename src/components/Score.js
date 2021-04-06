import React from "react";

export default function Score({ currentScore }) {
  return (
    <div className="stat">
      <p className="scr-title">score</p>
      <h1 className="scr-val">{currentScore}</h1>
    </div>
  );
}
