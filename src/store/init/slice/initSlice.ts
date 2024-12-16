import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitSchema, UserData } from "../types/initTypes";
import { LoadingState } from "@/helpers/enums";
import { initializeApp } from "../actions/initializeApp";

const initialState: InitSchema = {
  initLoadingState: LoadingState.INITIAL,
  userData: null,
};

const initSlice = createSlice({
  name: "@init",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initializeApp.pending, (state) => {
        state.initLoadingState = LoadingState.LOADING;
      })
      .addCase(
        initializeApp.fulfilled,
        (state, action: PayloadAction<UserData>) => {
          state.initLoadingState = LoadingState.LOADED;
          state.userData = action.payload;
        },
      )
      .addCase(initializeApp.rejected, (state) => {
        state.initLoadingState = LoadingState.FAILED;
      });
  },
});

export const { actions: initActions, reducer: initReducer } = initSlice;
