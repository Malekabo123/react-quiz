import { createSlice } from "@reduxjs/toolkit";
const initiaCounterState = { score: 0, wrong: 0, options: [] };

const scoreSlice = createSlice({
  name: "score",
  initialState: initiaCounterState,
  reducers: {
    computeScore(state, action) {
      state.options.push({
        answer: action.payload.option,
        id: action.payload.id,
      });
      if (action.payload.checking) {
        state.score++;
      } else {
        state.wrong++;
      }
    },
  },
});

export const scoreActions = scoreSlice.actions;

export default scoreSlice.reducer;
