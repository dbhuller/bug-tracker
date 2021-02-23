import { createSlice } from "@reduxjs/toolkit";
import { retrieveBugs } from "../bugController";

const bugSlice = createSlice({
  name: "bug",
  initialState: [],
  reducers: {
    getBugs: (state) => {
      retrieveBugs();
    },
    createBugs: (state, actions) => {},
    updateBug: (state, actions) => {},
    markComplete: (state, action) => {},
  },
});

export default bugSlice.reducer;
export const {
  getBugs,
  createBugs,
  updateBug,
  markComplete,
} = bugSlice.actions;
