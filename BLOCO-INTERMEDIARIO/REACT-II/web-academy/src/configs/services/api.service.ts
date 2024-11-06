import axios from "axios";

export interface ResponseApi<T> {
  ok: boolean;
  message: string;
  data?: T; // [], {}
}

const baseURL = "http://localhost:3000";

export const api = axios.create({
  baseURL,
});
