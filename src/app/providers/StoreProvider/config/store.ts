import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { commonReducer } from "@/store/common";

const rootReducer = combineReducers({
  common: commonReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
