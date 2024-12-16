import { combineReducers } from "@reduxjs/toolkit";
import { userLoggedReducer } from "./userLogged/userLoggedSlice";
import { assessmentsReduce } from "./assessments/assessmentsSlice";
import { assessmentDetailReducer } from "./assessmentDetail/assessmentDetailSlice";
import { alertReducer } from "./alert/alertSlice";

export const rootReducer = combineReducers({
  // Todos os novos estados globais criado, devem ser chamados aqui...
  userLogged: userLoggedReducer,
  assessments: assessmentsReduce,
  assessmentDetail: assessmentDetailReducer,
  alert: alertReducer,
});
