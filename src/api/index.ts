import axios from "axios";
import { BASE_URL } from "../constant";

const TOKEN = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";

export default axiosInstance;
