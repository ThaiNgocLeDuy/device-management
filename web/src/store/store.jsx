import createSagaMiddleware from "@redux-saga/core";
import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import DevicesReducer from "reducers/DevicesReducer";
import rootSaga from "saga/rootSaga";

const rootReducer = combineReducers({
  devices: DevicesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
