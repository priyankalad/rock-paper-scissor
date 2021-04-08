import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "statistics",
  initialState: {
    totalGames: 0,
    gamesWon: 0,
    score: 0,
    playerPicked: "",
    housePicked: "",
    winStatus: "",
    items: [
      { item: "paper", beats: "rock" },
      { item: "rock", beats: "scissors" },
      { item: "scissors", beats: "paper" },
    ],
    isPlayerWin: false,
  },
  reducers: {
    pickForPlayer: (state, action) => ({
      ...state,
      playerPicked: action.payload,
      totalGames: state.totalGames + 1,
    }),
    pickForHouse: (state, action) => ({
      ...state,
      housePicked: action.payload,
    }),
    setWinStatus: (state, action) => {
      console.log(action);
      let updatedState = { ...state };
      updatedState.housePicked = action.payload;
      const { housePicked, playerPicked } = updatedState;

      let itemByPlayer = state.items.find((i) => i.item === playerPicked);
      if (housePicked === playerPicked) {
        updatedState.winStatus = "tie";
      } else if (itemByPlayer["beats"] === housePicked) {
        updatedState.gamesWon = state.gamesWon + 1;
        updatedState.score = state.score + 1;
        updatedState.winStatus = "win";
      } else {
        updatedState.winStatus = "lose";
        updatedState.score = state.score - 1;
      }

      return updatedState;
    },

    calculateScore: (state, action) => ({
      ...state,
      score:
        action.payload === "win"
          ? (state.score = state.score + 1)
          : action.payload === "lose"
          ? (state.score = state.score - 1)
          : state.score,
    }),
  },
});

export const { pickForPlayer, pickForHouse, setWinStatus } = gameSlice.actions;

export default gameSlice.reducer;
