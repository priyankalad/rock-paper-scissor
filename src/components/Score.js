import React from "react";
import { useSelector } from "react-redux";

export default function Score() {
  const { score } = useSelector((state) => state.game);
  return (
    <div className="stat">
      <p className="scr-title">score</p>
      <h1 className="scr-val">{score}</h1>
    </div>
  );
}
