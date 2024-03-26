import axios from "axios";

const productionURL = "https://gec-spectrum-backend-2024.2.sg-1.fl0.io/api/v1/";
const baseURL = "http://localhost:8000/api";

export const axiosInstance = axios.create({
  baseURL: productionURL,
});
