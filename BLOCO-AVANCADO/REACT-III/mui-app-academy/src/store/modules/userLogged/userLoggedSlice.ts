import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseAPI } from "../../../configs/services/api.service";
import { LoginRequest } from "../../../utils/types/auth";
import { loginService } from "../../../configs/services/auth.service";

// Nome OK
// Valor inicial OK
// Ações (functions/reducer)

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
    const { email, password, remember } = data;

    // Logica para fazer login na nossa api (chamar a api): Promise
    const response = await loginService({ email, password });

    if (!response.ok) {
      console.log("Deu ruim");
      // dispatch(showMessage(response.message));
    }

    const responseWithRemenber = {
      ...response, // { ok, message }
      data: {
        ...response.data, //  { token }
        student: {
          ...response.data.student, // { id, name....}
          remember,
        },
      },
    };

    return responseWithRemenber; // Data da requisição { ok, message, data }
  }
);

interface InitialState {
  ok: boolean;
  message: string;
  token: string;
  student: {
    id: string;
    name: string;
    email: string;
    remember: boolean;
  };
}

const initialState: InitialState = {
  ok: false,
  message: "",
  token: "",
  student: {
    email: "",
    id: "",
    name: "",
    remember: false,
  },
};

const userLoggedSlice = createSlice({
  name: "userLogged",
  initialState: initialState,
  reducers: {
    // login(estadoAtual, action => type e o payload) {},
    // login(state, action: PayloadAction<LoginRequest>) {
    //   const { email, password, remember } = action.payload;

    //   const userFound = users.find(
    //     (user) => user.email === email && user.senha === password
    //   );

    //   if (!userFound) {
    //     state.errors = "Invalid email or password!!";
    //     return state;
    //   }

    //   state.id = userFound.id;
    //   state.name = userFound.name;
    //   state.email = userFound.email;
    //   state.remember = remember;
    //   state.errors = "";

    //   return state;
    // },
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

          state.ok = action.payload.ok;
          state.message = action.payload.message;

          // Só posso atribuir token e student quando o ok for true
          if (action.payload.ok) {
            state.token = action.payload.data.token;
            state.student = action.payload.data.student;
          }
        }
      )
      .addCase(loginAsyncThunk.rejected, (state) => {
        console.log("Estou em estado de rejected na função loginAsyncThunk");
        state.ok = false;
        state.message = "Error login";
      });
  },
});

export const { logout } = userLoggedSlice.actions;
export const userLoggedReducer = userLoggedSlice.reducer;
