import { CreateAssessmentRequest } from "../../utils/types/assessment";
import { api, ResponseAPI } from "./api.service";

export async function createAssessmentService(
  data: CreateAssessmentRequest & { token: string }
): Promise<ResponseAPI> {
  try {
    const { token, ...restData } = data;

    const response = await api.post("/assessments", restData, {
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
      message: error.response.data.message,
    };
  }
}
