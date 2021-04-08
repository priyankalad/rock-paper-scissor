import { createSlice } from "@reduxjs/toolkit";

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState: {
    totalGames: 0,
    gamesWon: 0,
    score: 0,
  },
  reducer: {
    incrementTotalGame: (state) => {
      state.totalGames += 1;
    },
    incrementGamesWon: (state, action) => {
      if (action.payload === "win") {
        state.gamesWon += 1;
      }
    },
    calculateScore: (state, action) => {
      if (action.payload === "win") {
        state.score += 1;
      } else if (action.payload === "lose") {
        state.score -= 1;
      }
    },
  },
});

export const {
  incrementTotalGame,
  incrementGamesWon,
  calculateScore,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
