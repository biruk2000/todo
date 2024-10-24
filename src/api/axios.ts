import { RootState } from "@/redux/store";
import { Store } from "@reduxjs/toolkit";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 30000,
});

export const setupAxiosInterceptors = (store: Store<RootState>) =>
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = store.getState().auth?.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      // 401 Unauthorized
      localStorage.removeItem("token");
      //   window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
