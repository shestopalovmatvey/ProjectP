import { ModalId } from "@/helpers/enums";
import { Values } from "@/helpers/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommonSchema, ModalParams } from "../types/commonSchema";

const initialState: CommonSchema = {
  activeModalId: null,
  activeModalParams: null,
};

const commonSlice = createSlice({
  name: "@common",
  initialState,
  reducers: {
    openModal: (
      state,
      {
        payload: { id, params },
      }: PayloadAction<{ id: ModalId; params?: Values<ModalParams> }>,
    ) => {
      state.activeModalId = id;
      if (params) {
        state.activeModalParams = params;
      }
    },
    closeModal: (state) => {
      state.activeModalId = null;
      state.activeModalParams = null;
    },
  },
});

export const { actions: commonActions, reducer: commonReducer } = commonSlice;
