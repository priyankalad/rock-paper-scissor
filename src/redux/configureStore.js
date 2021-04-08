import { configureStore, combineReducers } from "@reduxjs/toolkit";

import statisticsReducer from "./statisticsSlice";
import gameReducer from "./gameSlice";

let reducer = combineReducers({
  statistics: statisticsReducer,
  game: gameReducer,
});

export default configureStore({
  reducer: reducer,
});
