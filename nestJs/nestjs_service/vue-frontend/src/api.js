import { setUser } from "@/composables/user";
import axios from "axios";

const api = axios.create({
  baseURL: '',
  timeout: 10000
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      setUser({
        userId: null,
        token: null
      })
    }
    return Promise.reject(error);
  }
);

export default api;
