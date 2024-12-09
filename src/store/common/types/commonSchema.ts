import { ModalId } from "@/helpers/enums";
import { Values } from "@/helpers/types";

export interface CommonSchema {
  activeModalId: ModalId | null;
  activeModalParams: Values<ModalParams> | null;
}

export interface ModalParams {
  [ModalId.EXAMPLE_MODAL]: {
    tabs: string;
  };
}
