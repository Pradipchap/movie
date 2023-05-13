import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "color",
  initialState: {
    mode:
      localStorage.getItem("mode") === "dark"
        ? localStorage.getItem("mode")
        : "light",
    colors: {
      primary: "#002253",
      secondary: "#020873",
      tertiary: "#0fa94c",
      fourth: "#a90f6c",
      text: "black",
    },
  },
  reducers: {
    toDark(state, action) {
      state.mode = "dark";
      state.colors.primary = "#1c1d21";
      state.colors.secondary = "#21201c";
      state.colors.tertiary = "#4f3f37";
      state.colors.fourth = "#3b4f37";
      state.colors.text = "white";
      document.body.style.backgroundColor = "#1c1d21";
    },
    toLight(state, action) {
      state.mode = "light";

      state.colors.primary = "#002253";
      state.colors.secondary = "#002253";
      state.colors.tertiary = "#0fa94c";
      state.colors.fourth = "#a90f6c";
      state.colors.text = "black";
      document.body.style.backgroundColor = "#fff";
    },
  },
});
export const colorActions = colorSlice.actions;
export default colorSlice;
