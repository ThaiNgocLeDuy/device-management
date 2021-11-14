import api from "api/axiosClient";

const getAll = () => {
  return api.get("/devices");
};
