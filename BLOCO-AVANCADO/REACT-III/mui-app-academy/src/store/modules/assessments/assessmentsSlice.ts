import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Assessment, CreateAssessment } from "../../../utils/types/assessment";

// Nome
// Valor inicial
// Ações

interface InitialState {
  data: Array<Assessment>;
  errors: string;
}

const initialState: InitialState = {
  data: [], // lista de avaliações
  errors: "", // algum error que eu quero exibir
};

const assessmentsSlice = createSlice({
  name: "assessments",
  initialState,
  reducers: {
    createAssessment(state, action: PayloadAction<CreateAssessment>) {
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
      return state;
    },
  },
});

// setListAssessments({ ...listAssessments, data: [] });
// setListAssessments({ ...listAssessments, errors: "meu aeurnauin" });

export const { createAssessment } = assessmentsSlice.actions;
export const assessmentsReduce = assessmentsSlice.reducer;
