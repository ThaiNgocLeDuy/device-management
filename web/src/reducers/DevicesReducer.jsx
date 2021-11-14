import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  devices: [],
};

const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    fetchDevicesList(state, action) {
      state.loading = true;
    },
    fetchDevicesListSuccess(state, action) {
      state.devices = action.payload;
      state.loading = false;
    },
    fetchDevicesListFailed(state, action) {
      state.loading = false;
    },
    createDevice(state, action) {
      state.loading = true;
    },
    createDeviceSuccess(state, action) {
      state.loading = false;
      state.devices.push(action.payload);
    },
    createDeviceFailed(state, action) {
      state.loading = false;
    },
    updateDevice(state, action) {
      state.loading = true;
    },
    updateDeviceSuccess(state, action) {
      state.loading = false;
      const { _id, name, price, quantity, desc } = action.payload;
      const existingDevice = state.devices.find((device) => device._id === _id);
      if (existingDevice) {
        existingDevice.name = name;
        existingDevice.price = price;
        existingDevice.quantity = quantity;
        existingDevice.desc = desc;
      }
    },
    updateDeviceFailed(state, action) {
      state.loading = false;
    },
    removeDevice(state, action) {
      state.loading = false;
    },
    removeDeviceSuccess(state, action) {
      state.loading = true;
      state.devices = state.devices.filter(
        (device) => device._id !== action.payload
      );
    },
    removeDeviceFailed(state, action) {
      state.loading = false;
    },
  },
});

//selectors
export const selectDevicesList = (state) => state.devices.devices;
export const selectDevicesLoading = (state) => state.devices.loading;

//actions
export const devicesActions = devicesSlice.actions;

//reducers
const devicesReducer = devicesSlice.reducer;

export default devicesReducer;
