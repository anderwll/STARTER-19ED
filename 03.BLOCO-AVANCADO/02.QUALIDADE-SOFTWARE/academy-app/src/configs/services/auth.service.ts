import { LoginRequest } from "../../utils/types/auth";
import { api, ResponseAPI } from "./api.service";

export async function loginService(
  data: Omit<LoginRequest, "remember">
): Promise<ResponseAPI> {
  try {
    const response = await api.post("/login", data);

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
