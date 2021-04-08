import { configureStore } from "@reduxjs/toolkit";
import statisticsReducer from "./statisticsSlice";

export default configureStore({
  reducer: {
    statistics: statisticsReducer,
  },
});
