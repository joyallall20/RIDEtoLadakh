import axios from "axios";

export const AxiosInstence = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 50000,
  headers: { "Content-Type": "application/json" },
});

AxiosInstence.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

AxiosInstence.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized request. Redirecting to login...");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
