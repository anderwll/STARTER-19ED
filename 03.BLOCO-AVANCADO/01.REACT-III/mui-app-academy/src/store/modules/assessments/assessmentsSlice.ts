import { createSlice } from "@reduxjs/toolkit";
import { Assessment } from "../../../utils/types/assessment";
import {
  createAssessmentAsyncThunk,
  deleteAssessmentAsyncThunk,
  findAllAssessmentsAsyncThunk,
  updateAssessmentAsyncThunk,
} from "./assessments.action";

interface InitialState {
  count: number; // Total de registro (paginação)
  assessments: Array<Assessment>;
  message: string;
  ok: boolean;
  loading: boolean;
  loadingList: boolean;
}

const initialState: InitialState = {
  assessments: [],
  count: 0,
  loading: false,
  loadingList: false,
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

        if (action.payload.ok) {
          state.assessments.push(action.payload.data);
        }
      })
      .addCase(createAssessmentAsyncThunk.rejected, (state) => {
        state.loading = false;
        state.ok = false;
      });

    // FIND ALL
    builder
      .addCase(findAllAssessmentsAsyncThunk.pending, (state) => {
        state.loadingList = true;
      })
      .addCase(findAllAssessmentsAsyncThunk.fulfilled, (state, action) => {
        state.loadingList = false;
        state.message = action.payload.message;
        state.ok = action.payload.ok;

        if (action.payload.ok) {
          // data => { count, assessments }
          state.assessments = action.payload.data.assessments;
          state.count = action.payload.data.count;
        }
      })
      .addCase(findAllAssessmentsAsyncThunk.rejected, (state) => {
        state.loadingList = false;
        state.ok = false;
      });

    // UPDATE
    builder
      .addCase(updateAssessmentAsyncThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAssessmentAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.ok = action.payload.ok;
        state.message = action.payload.message;

        // Evitar um req, encontrar a avaliação na lista, e vamos sub pelo o que a api retornar
        if (action.payload.ok) {
          const index = state.assessments.findIndex(
            (ass) => ass.id === action.payload.data.id
          );

          if (index !== -1) {
            state.assessments[index] = {
              ...state.assessments[index],
              ...action.payload.data,
            };

            console.log(action.payload.data); // { ... }
          }
        }
      })
      .addCase(updateAssessmentAsyncThunk.rejected, (state) => {
        state.loading = false;
        state.ok = false;
      });

    // DELTE
    builder
      .addCase(deleteAssessmentAsyncThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAssessmentAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.ok = action.payload.ok;
        state.message = action.payload.message;

        if (action.payload.ok) {
          console.log(action.payload);
          const index = state.assessments.findIndex(
            (ass) => ass.id === action.payload.data.id
          );

          if (index !== -1) {
            state.assessments.splice(index, 1);
          }
        }
      })
      .addCase(deleteAssessmentAsyncThunk.rejected, (state) => {
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
