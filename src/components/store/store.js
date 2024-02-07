import { configureStore } from "@reduxjs/toolkit";
import timingBarReducer from "./timingBarSlice";
import scoreReducer from "./scoreSlice";

const store = configureStore({
  reducer: { timingBar: timingBarReducer, score: scoreReducer },
});

export default store;
