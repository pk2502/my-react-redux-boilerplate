import axios from "axios";
import { getToken } from "./token_helper";

export const BASE_API_URL = "http://localhost:8000";

const token = getToken();

const axiosAPI = axios.create({ baseURL: BASE_API_URL });

if (token) {
  axiosAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

axiosAPI.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config = {}) {
  return await axiosAPI
    .get(url, { ...config })
    .then((response) => response.data);
}

export async function post(url, data, config = {}) {
  return await axiosAPI
    .get(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function put(url, data, config = {}) {
  return await axiosAPI
    .get(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url, config = {}) {
  return await axiosAPI
    .get(url, { ...config })
    .then((response) => response.data);
}
