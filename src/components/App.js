import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Game from "./Game";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [totalGamesPlayed, setTotalGamesPlayed] = useState(0);
  const [winCount, setWinCount] = useState(0);
  const [playerSelection, setPlayerSelection] = useState("");
  const [items, setItems] = useState([
    { item: "paper", beats: "rock" },
    { item: "rock", beats: "scissors" },
    { item: "scissors", beats: "paper" },
  ]);

  function handlePlayerSelection(selection) {
    if (selection) {
      setPlayerSelection(selection);
      setTotalGamesPlayed(totalGamesPlayed + 1);
    }
  }

  function handleScoreCalc(result) {
    console.log("Inside handleScoreCalc: " + result);
    let updatedScore = currentScore;
    if (result === "win") {
      updatedScore = updatedScore + 1;
    } else if (result === "lose") {
      updatedScore = updatedScore - 1;
    }
    console.log(" updated score: " + updatedScore);
    console.log("type of updated score: " + typeof updatedScore);
    setCurrentScore((prevScore) => prevScore + 1);
  }

  return (
    <div className="app-container">
      <Header
        currentScore={currentScore}
        totalGamesPlayed={totalGamesPlayed}
        winCount={winCount}
      />
      <>
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Main playerSelectionHandler={handlePlayerSelection} />
            )}
          />
          <Route
            path="/newgame"
            component={() => (
              <Game
                playerSelection={playerSelection}
                items={items}
                handleScoreCalc={handleScoreCalc}
              />
            )}
          />
        </Switch>
      </>

      <Footer />
    </div>
  );
}

export default App;
