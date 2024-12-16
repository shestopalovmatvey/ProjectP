import { StateSchema } from "@/app/providers/StoreProvider";

export const userDataSelector = (state: StateSchema) => state.init.userData;

export const initLoadingStateSelector = (state: StateSchema) =>
  state.init.initLoadingState;
