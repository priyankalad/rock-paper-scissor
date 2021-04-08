import { createSlice } from "@reduxjs/toolkit";

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState: {
    totalGames: 0,
    gamesWon: 0,
    score: 0,
  },
  reducers: {
    incrementTotalGame: (state) => ({
      ...state,
      totalGames: state.totalGames + 1,
    }),
    incrementGamesWon: (state, action) => ({
      ...state,
      gamesWon:
        action.payload === "win"
          ? (state.gamesWon = state.gamesWon + 1)
          : state.gamesWon,
    }),
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

export const {
  incrementTotalGame,
  incrementGamesWon,
  calculateScore,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
