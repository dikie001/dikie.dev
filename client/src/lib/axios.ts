import axios from "axios";

export const api = axios.create({
  baseURL: `api/${import.meta.env.VITE_API_URL}`,
});
