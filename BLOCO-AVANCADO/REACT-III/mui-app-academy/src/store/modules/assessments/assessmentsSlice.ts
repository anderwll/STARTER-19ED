import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  Assessment,
  CreateAssessmentRequest,
} from "../../../utils/types/assessment";
import { createAssessmentService } from "../../../configs/services/assessment.service";
import { RootState } from "../..";
import { showAlert } from "../alert/alertSlice";

export const createAssessmentAsyncThunk = createAsyncThunk(
  "assessments/create",
  async (data: CreateAssessmentRequest, { getState, dispatch }) => {
    // receber dos dados OK
    const { userLogged } = getState() as RootState;

    // chamar a api (service)
    const response = await createAssessmentService({
      ...data,
      token: userLogged.token,
    });

    // validar se erro/exibir um alert
    if (!response.ok) {
      dispatch(
        showAlert({
          message: response.message,
          type: "error",
        })
      );

      return response;
    }

    dispatch(
      showAlert({
        message: response.message,
        type: "success",
      })
    );

    // dispatch(getAssessments)
    // retornar os dados (payload)
    return response;
  }
);

interface InitialState {
  count: number; // Total de registro (paginação)
  assessments: Array<Assessment>;
  message: string;
  ok: boolean;
  loading: boolean;
}

const initialState: InitialState = {
  assessments: [],
  count: 0,
  loading: false,
  message: "",
  ok: false,
};

const assessmentsSlice = createSlice({
  name: "assessments",
  initialState,
  reducers: {
    createAssessment() {
      // state.errors = "";
      // state.success = false;
      // // criar a nova avaliação
      // const newAssessment: Assessment = {
      //   id: crypto.randomUUID(),
      //   title: action.payload.title,
      //   description: action.payload.description,
      //   grade: action.payload.grade,
      //   createdAt: new Date(),
      // };
      // // jogar para lista (data)
      // state.data.push(newAssessment);
      // // state.data = [...state.data, newAssessment]
      // state.errors = "";
      // state.success = true;
      // return state;
    },
    updateAssessment() {
      // state.errors = "";
      // state.success = false;
      // const index = state.data.findIndex((ass) => ass.id === action.payload.id);
      // if (index === -1) {
      //   state.errors = "Assessment not found!";
      //   return state;
      // }
      // // state.data[index].title = title || state.data[index].title;
      // // state.data[index].description =
      // //   description || state.data[index].description;
      // // state.data[index].grade = grade || state.data[index].grade;
      // state.data[index] = {
      //   ...state.data[index],
      //   ...action.payload,
      // };
      // state.errors = "";
      // state.success = true;
      // return state;
    },
    deleteAssessment() {
      // // Acha index => splice
      // // filter !=
      // state.errors = "";
      // state.success = false;
      // const index = state.data.findIndex((ass) => ass.id === action.payload); // "120asmdioasmdias1-023S"
      // if (index === -1) {
      //   state.errors = "Not found";
      //   state.success = false;
      //   return state;
      // }
      // state.data.splice(index, 1);
      // // state.data.filter((ass) => ass.id !== action.payload);
      // /**
      //  *  [1, 2, 3, 4]
      //  *
      //  *  filtrar(ass => ass != 3)
      //  *
      //  *  [1, 2, 4]
      //  *
      //  *
      //  * [1, 2, 3, 4]
      //  *
      //  * procurar(ass => ass = 3)
      //  *
      //  * splice(2, 1)
      //  *
      //  * [1, 2, 4]
      //  */
      // state.errors = "";
      // state.success = true;
      // return state;
    },
  },

  // Ciclos = pending , fullfiled, rejected
  extraReducers(builder) {
    // CREATE
    builder
      .addCase(createAssessmentAsyncThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createAssessmentAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.ok = action.payload.ok;
        state.message = action.payload.message;
      })
      .addCase(createAssessmentAsyncThunk.rejected, (state) => {
        state.loading = false;
        state.ok = false;
      });
  },
});

// setListAssessments({ ...listAssessments, data: [] });
// setListAssessments({ ...listAssessments, errors: "meu aeurnauin" });

export const { createAssessment, updateAssessment, deleteAssessment } =
  assessmentsSlice.actions;
export const assessmentsReduce = assessmentsSlice.reducer;
