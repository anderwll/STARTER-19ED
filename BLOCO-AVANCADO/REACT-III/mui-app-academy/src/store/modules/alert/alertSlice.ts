import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Alert = {
  open: boolean;
  type: "success" | "error";
  message: string;
};

const initialState: Alert = {
  open: false,
  type: "success",
  message: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert(state, action: PayloadAction<Omit<Alert, "open">>) {
      state.open = true;
      state.message = action.payload.message;
      state.type = action.payload.type;

      return state;
    },
    hiddenAlert(state) {
      return { ...state, open: false };
    },
  },
});

export const alertReducer = alertSlice.reducer;
export const { showAlert, hiddenAlert } = alertSlice.actions;
