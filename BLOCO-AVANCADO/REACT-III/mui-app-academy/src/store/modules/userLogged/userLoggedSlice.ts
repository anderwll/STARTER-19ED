import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { users } from "../../../mock/users";

// Nome OK
// Valor inicial OK
// Ações (functions/reducer)

interface LoginRequest {
  email: string;
  password: string;
  remember: boolean;
}

interface InitialState {
  id: string;
  name: string;
  email: string;
  remember: boolean;
  errors: string;
}

const initialState: InitialState = {
  id: "",
  name: "",
  email: "",
  remember: false,
  errors: "",
};

const userLoggedSlice = createSlice({
  name: "userLogged",
  initialState: initialState,
  reducers: {
    // login(estadoAtual, action => type e o payload) {},
    login(state, action: PayloadAction<LoginRequest>) {
      const { email, password, remember } = action.payload;

      const userFound = users.find(
        (user) => user.email === email && user.senha === password
      );

      if (!userFound) {
        state.errors = "Invalid email or password!!";
        return state;
      }

      state.id = userFound.id;
      state.name = userFound.name;
      state.email = userFound.email;
      state.remember = remember;
      state.errors = "";
      return state;
    },
    // Logout
    logout() {
      return initialState;
    },
  },
});

export const { login, logout } = userLoggedSlice.actions;
export const userLoggedReducer = userLoggedSlice.reducer;
