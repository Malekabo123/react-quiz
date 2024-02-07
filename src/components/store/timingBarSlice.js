import { createSlice } from "@reduxjs/toolkit";
const initiaCounterState = { class: "progress" };

const timingBarSlice = createSlice({
  name: "timingBar",
  initialState: initiaCounterState,
  reducers: {
    changeClass(state, action) {
      state.class = action.payload;
    },
  },
});

export const timingBarActions = timingBarSlice.actions;

export default timingBarSlice.reducer;
