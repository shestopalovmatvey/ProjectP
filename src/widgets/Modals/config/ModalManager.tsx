import { ModalId } from "@/helpers/enums";
import { useAppDispatch, useAppSelector } from "@/helpers/hooks";
import { activeModalIdSelector, commonActions } from "@/store/common";
import { AddContentModal } from "../ui/AddContentModal/AddContentModal";
import { FilterModal } from "../ui/FilterModal/FilterModal";

export const ModalManager = () => {
  const activeModalId = useAppSelector(activeModalIdSelector);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(commonActions.closeModal());
  };

  return (
    <>
      <AddContentModal
        onClose={onClose}
        isOpen={activeModalId === ModalId.ADD_CONTENT_MODAL}
      />
      <FilterModal
        onClose={onClose}
        isOpen={activeModalId === ModalId.FILTER_MODAL}
      />
    </>
  );
};
