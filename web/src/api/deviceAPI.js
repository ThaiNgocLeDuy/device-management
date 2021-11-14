import axiosClient from "./axiosClient";

const deviceApi = {
  getAll() {
    const url = "/devices";
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/devices/${id}`;
    return axiosClient.get(url);
  },
  create(device) {
    const url = "/devices";
    return axiosClient.post(url, device);
  },
  update(device) {
    const url = `/devices/${device._id}`;
    return axiosClient.put(url, device);
  },
  remove(id) {
    const url = `/devices/${id}`;
    return axiosClient.delete(url);
  },
};

export default deviceApi;
