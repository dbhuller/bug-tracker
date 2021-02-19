import { createSlice } from "@reduxjs/toolkit";

const bugSlice = createSlice({
  name: "bug",
  initialState: [],
  reducers: {
    getBugs: (state) => {},
    createBugs: (state, actions) => {},
    updateBug: (state, actions) => {},
    markComplete: (state, action) => {},
  },
});

export default bugSlice;
export const {
  getBugs,
  createBugs,
  updateBug,
  markComplete,
} = bugSlice.actions;
