import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { users } from "../../../mock/users";
import { api, ResponseAPI } from "../../../configs/services/api.service";
import { LoginRequest } from "../../../utils/types/auth";

/**
 *  createAsyncThunk(nome, callback): Promise
 *
 * nome: typePrefix
 * callback: payloadCreator
 *
 *  (arg, thunkAPI) => {}
 *  arg: paramentro/dados
 *  thunkAPI: objeto que contem algumas funcionalidades/ferramentas
 */

export const loginAsyncThunk = createAsyncThunk(
  "userLogged/loginAsyncThunk",
  async (data: LoginRequest) => {
    const { email, password } = data;

    // Logica para fazer login na nossa api (chamar a api): Promise
    const response = await api.post("/login", { email, password });

    // console.log(response);

    return response.data; // Data da requisição { ok, message, data }
  }
);

// Nome OK
// Valor inicial OK
// Ações (functions/reducer)

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
  extraReducers(builder) {
    /**
     *  builder.addCase(actionCreator, reducer)
     *
     * actionCreator: Qual função createAsyncThuck e ciclo de estado eu quero controlar
     * reducer: callback = Tenho acesso ao meu state
     */

    // Caso para pendente
    builder
      .addCase(loginAsyncThunk.pending, () => {
        // state => estado atual { id, name.... }
        // action.payload => dados retornado da minha função asyncThuck
        console.log("Estou em estado de pending na função loginAsyncThunk");
      })
      .addCase(
        loginAsyncThunk.fulfilled,
        (state, action: PayloadAction<ResponseAPI>) => {
          console.log("Estou em estado de fulfilled na função loginAsyncThunk");
          console.log({ state, payload: action.payload });

          state.id = action.payload.data.student.id;
          state.name = action.payload.data.student.name;
          state.email = action.payload.data.student.email;
        }
      )
      .addCase(loginAsyncThunk.rejected, () => {
        console.log("Estou em estado de rejected na função loginAsyncThunk");
      });
  },
});

export const { login, logout } = userLoggedSlice.actions;
export const userLoggedReducer = userLoggedSlice.reducer;
