import React from "react";
import Header from "./Header";
import Main from "./Main";
import Game from "./Game";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Header />
      <>
        <Switch>
          <Route path="/" exact component={() => <Main />} />
          <Route path="/newgame" component={() => <Game />} />
        </Switch>
      </>

      <Footer />
    </div>
  );
}

export default App;
