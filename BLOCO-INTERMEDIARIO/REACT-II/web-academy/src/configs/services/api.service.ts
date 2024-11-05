import axios from "axios";

const baseURL = import.meta.env.BASE_URL;

export const api = axios.create({
  baseURL,
});
