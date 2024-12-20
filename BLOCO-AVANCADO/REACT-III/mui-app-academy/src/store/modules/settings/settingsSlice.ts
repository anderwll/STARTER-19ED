import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  mode: "light" | "dark";
}

const initialState: InitialState = {
  mode: "light",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = settingsSlice.actions;
export const settingsReduce = settingsSlice.reducer;
