import axios from "axios";

const productionURL = "https://gecspectrum.discloud.app/api/v1/";
const baseURL = "http://localhost:8000/api";

export const axiosInstance = axios.create({
  baseURL: productionURL,
});
