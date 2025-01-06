import { createSlice } from "@reduxjs/toolkit";

// CONTADOR

// Nome
// Valor Inicial (value)
// Actions (functions) // incrementar, decrementar

interface InitialState {
  value: number;
}

const initialState: InitialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter", // Mapea internamente
  initialState: initialState, // useState(initialState)
  // Actions
  reducers: {
    incrementar: (state) => {
      state.value += 1;
      return state;
    },
    decrementar(state) {
      state.value -= 1;
      return state;
    },
    reset() {
      return initialState;
    },
  },
});

// export const incrementar = counterSlice.actions.incrementar
export const { decrementar, incrementar, reset } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
