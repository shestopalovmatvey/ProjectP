import { ModalId } from "@/helpers/enums";
import { useAppDispatch, useAppSelector } from "@/helpers/hooks";
import { activeModalIdSelector, commonActions } from "@/store/common";
import { AddContentModal } from "../ui/AddContentModal/AddContentModal";

export const ModalManager = () => {
  const activeModalId = useAppSelector(activeModalIdSelector);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(commonActions.closeModal());
  };

  switch (activeModalId) {
    case ModalId.ADD_CONTENT_MODAL:
      return <AddContentModal onClose={onClose} />;
    default:
      return null;
  }
};
