import deviceApi from "api/deviceAPI";
import { devicesActions } from "reducers/DevicesReducer";
import { call, put, takeLatest } from "redux-saga/effects";

function* fetchDevicesList(action) {
  try {
    const response = yield call(deviceApi.getAll, action.payload);
    yield put(devicesActions.fetchDevicesListSuccess(response));
  } catch (error) {
    yield put(devicesActions.fetchDevicesListFailed());
  }
}

function* createDevice(action) {
  try {
    const response = yield call(deviceApi.create, action.payload);
    yield put(devicesActions.createDeviceSuccess(response));
    yield put(devicesActions.fetchDevicesList());
  } catch (error) {
    yield put(devicesActions.createDeviceFailed());
  }
}

function* updateDevice(action) {
  try {
    const response = yield call(deviceApi.update, action.payload);
    yield put(devicesActions.updateDeviceSuccess(response));
    yield put(devicesActions.fetchDevicesList());
  } catch (error) {
    yield put(devicesActions.updateDeviceFailed());
  }
}

function* removeDevice(action) {
  try {
    const response = yield call(deviceApi.remove, action.payload);
    yield put(devicesActions.removeDeviceSuccess(response));
    yield put(devicesActions.fetchDevicesList());
  } catch (error) {
    yield put(devicesActions.removeDeviceFailed());
  }
}

export default function* devicesSaga() {
  yield takeLatest(devicesActions.fetchDevicesList, fetchDevicesList);
  yield takeLatest(devicesActions.createDevice, createDevice);
  yield takeLatest(devicesActions.updateDevice, updateDevice);
  yield takeLatest(devicesActions.removeDevice, removeDevice);
}
