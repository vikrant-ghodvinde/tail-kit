import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    darkMode: false,
  },
  reducers: {
    setTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setTheme } = appSlice.actions;
export default appSlice.reducer;
