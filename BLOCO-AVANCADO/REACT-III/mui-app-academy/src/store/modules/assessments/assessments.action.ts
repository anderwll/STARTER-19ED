import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { createAssessmentService } from "../../../configs/services/assessment.service";
import { CreateAssessmentRequest } from "../../../utils/types/assessment";
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
