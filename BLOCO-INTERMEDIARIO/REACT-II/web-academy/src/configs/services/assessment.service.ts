import { Assessment } from "../../types/assessment.type";
import { api, ResponseApi } from "./api.service";

export async function getAssessments(token: string) {
  try {
    // http://localhost:3000/assessments
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
