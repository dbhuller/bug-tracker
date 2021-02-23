import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({ name: "Deep Bhuller" });
      state.push({ name: "John Smith" });
    },
  },
});

export default userSlice.reducer;
export const { getUser } = userSlice.actions;
