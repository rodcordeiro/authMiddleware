import axios, { AxiosInstance } from "axios";
import { config as Enviroment } from "dotenv";
Enviroment();

const api: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
});

export default api;
