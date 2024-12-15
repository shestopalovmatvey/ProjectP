import { ModalId } from "@/helpers/enums";
import { Values } from "@/helpers/types";

export interface CommonSchema {
  activeModalId: ModalId | null;
  activeModalParams: Values<ModalParams> | null;
}

export interface ModalParams {
  [ModalId.ADD_CONTENT_MODAL]: {
    tabs?: string;
  };
}
