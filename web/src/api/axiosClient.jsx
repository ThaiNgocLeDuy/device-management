import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "https://6183641991d76c00172d18fb.mockapi.io/api/v1",
  baseURL: "http://localhost:3001/",
  headers: {
    "Content-type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
