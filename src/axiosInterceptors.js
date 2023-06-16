import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ecom-backend-ht6t.onrender.com/api/v1",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(localStorage.getItem("token"));

    if (accessToken) {
      if (config.headers) config.headers.token = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
