import axios from "axios";

export const api = axios.create({
  baseURL: "https://meisters-api.onrender.com",
});
