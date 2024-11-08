import {
  Assessment,
  CreateAssessmentRequest,
  UpdateAssessmentRequest,
} from "../../types/assessment.type";
import { api, ResponseApi } from "./api.service";

export async function getAssessments(token: string) {
  try {
    // http://localhost:3000
    const response = await api.get<ResponseApi<Assessment[]>>("/assessments", {
      headers: {
        Authorization: token,
      },
    });

    return {
      ok: response.data.ok,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error: any) {
    return {
      ok: error.response.data.ok,
      message: `Erro: ${error.response.data.message}`,
    };
  }
}

export async function createAssessment(
  token: string,
  dataBody: CreateAssessmentRequest
) {
  try {
    const response = await api.post<ResponseApi<Assessment>>(
      "/assessments",
      dataBody,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return {
      ok: response.data.ok,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error: any) {
    return {
      ok: error.response.data.ok,
      message: `Erro: ${error.response.data.message}`,
    };
  }
}

export async function updateAssessment(
  token: string,
  { id, ...dataBody }: UpdateAssessmentRequest
) {
  try {
    const response = await api.put<ResponseApi<Assessment>>(
      `/assessments/${id}`,
      dataBody,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return {
      ok: response.data.ok,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error: any) {
    return {
      ok: error.response.data.ok,
      message: `Erro: ${error.response.data.message}`,
    };
  }
}
