import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { commonReducer } from "@/store/common";
import { initReducer } from "@/store/init";

const rootReducer = combineReducers({
  common: commonReducer,
  init: initReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
