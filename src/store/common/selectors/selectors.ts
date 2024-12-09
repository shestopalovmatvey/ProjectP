import { StateSchema } from "@/app/providers/StoreProvider";

export const activeModalIdSelector = (state: StateSchema) =>
  state.common.activeModalId;
