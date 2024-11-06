import { LoginRequest } from "../../types/auth.type";
import { api, ResponseApi } from "./api.service";

export async function login(data: LoginRequest) {
  try {
    const response = await api.post<ResponseApi<{ token: string }>>(
      "/login",
      data
    );

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
