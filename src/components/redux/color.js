import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "color",
  initialState: {
    mode: "light",
    colors: {
      primary: "#a9990f",
      secondary: "#0f1fa9",
      tertiary: "#0fa94c",
      fourth: "#a90f6c",
    },
  },
  reducers: {
    toDark(state, action) {
      state.mode = "dark";
      state.colors.primary = "";
      state.colors.secondary = "";
      state.colors.tertiary = "";
      state.colors.fourth = "";
    },
    toLight(state, action) {
      state.mode = "light";
      state.colors.primary = "#a9990f";
      state.colors.secondary = "#0f1fa9";
      state.colors.tertiary = "#0fa94c";
      state.colors.fourth = "#a90f6c";
    },
  },
});
export const colorActions = colorSlice.actions;
export default colorSlice;
