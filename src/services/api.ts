import axios from "axios";

export const api = axios.create({
  baseURL: "https://swiftask-api.onrender.com",
});
