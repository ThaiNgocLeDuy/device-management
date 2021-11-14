import { all } from "@redux-saga/core/effects";
import devicesSaga from "./DevicesSaga";

export default function* rootSaga() {
  yield all([devicesSaga()]);
}
