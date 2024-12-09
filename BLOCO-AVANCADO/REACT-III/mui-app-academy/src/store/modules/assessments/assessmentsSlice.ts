import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Assessment,
  CreateAssessment,
  UpdateAssessment,
} from "../../../utils/types/assessment";

// Nome
// Valor inicial
// Ações

interface InitialState {
  data: Array<Assessment>;
  errors: string;
  success: boolean;
  editAssessment: Assessment;
}

const initialState: InitialState = {
  data: [], // lista de avaliações
  errors: "", // algum error que eu quero exibir
  success: false, // indicador de sucesso
  editAssessment: {} as Assessment, // avaliação que está sendo editada
};

const assessmentsSlice = createSlice({
  name: "assessments",
  initialState,
  reducers: {
    setEditAssessment(state, action: PayloadAction<Assessment>) {
      console.log(action.payload);

      state.editAssessment = action.payload;
      return state;
    },
    createAssessment(state, action: PayloadAction<CreateAssessment>) {
      state.errors = "";
      state.success = false;

      // criar a nova avaliação
      const newAssessment: Assessment = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        description: action.payload.description,
        grade: action.payload.grade,
        createdAt: new Date(),
      };

      // jogar para lista (data)
      state.data.push(newAssessment);
      // state.data = [...state.data, newAssessment]

      state.errors = "";
      state.success = true;
      return state;
    },
    updateAssessment(state, action: PayloadAction<UpdateAssessment>) {
      state.errors = "";
      state.success = false;

      const index = state.data.findIndex((ass) => ass.id === action.payload.id);

      if (index === -1) {
        state.errors = "Assessment not found!";
        return state;
      }

      // state.data[index].title = title || state.data[index].title;
      // state.data[index].description =
      //   description || state.data[index].description;
      // state.data[index].grade = grade || state.data[index].grade;

      state.data[index] = {
        ...state.data[index],
        ...action.payload,
      };

      state.errors = "";
      state.success = true;
      state.editAssessment = {} as Assessment;

      return state;
    },
  },
});

// setListAssessments({ ...listAssessments, data: [] });
// setListAssessments({ ...listAssessments, errors: "meu aeurnauin" });

export const { setEditAssessment, createAssessment, updateAssessment } =
  assessmentsSlice.actions;
export const assessmentsReduce = assessmentsSlice.reducer;
