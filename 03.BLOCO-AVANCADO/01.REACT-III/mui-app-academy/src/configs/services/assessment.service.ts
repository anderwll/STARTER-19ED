import {
  CreateAssessmentRequest,
  DeleteAssessmentRequest,
  QueryAssessmentRequest,
  UpdateAssessmentRequest,
} from "../../utils/types/assessment";
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

export async function findAllAssessmentsService(
  query: QueryAssessmentRequest & { token: string }
): Promise<ResponseAPI> {
  const { token } = query;
  const params = new URLSearchParams();

  if (query.page) {
    params.set("page", String(query.page));
  }

  if (query.take) {
    params.set("take", String(query.take));
  }

  // `/assessments?page=${query.page}&take=${query.take}
  try {
    const response = await api.get("/assessments", {
      headers: {
        Authorization: token,
      },
      params,
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

export async function updateAssessmentService(
  data: UpdateAssessmentRequest & { token: string }
): Promise<ResponseAPI> {
  try {
    const { id, token, ...restData } = data;

    const response = await api.put(`/assessments/${id}`, restData, {
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

export async function deleteAssessmentService(
  data: DeleteAssessmentRequest & { token: string }
): Promise<ResponseAPI> {
  const { id, token } = data;

  try {
    const response = await api.delete(`/assessments/${id}`, {
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
