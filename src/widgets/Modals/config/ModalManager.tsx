import { ModalId } from "@/helpers/enums";
import { useAppDispatch, useAppSelector } from "@/helpers/hooks";
import { activeModalIdSelector, commonActions } from "@/store/common";
import { AddContentModal } from "../ui/AddContentModal/AddContentModal";
import { CSSTransition } from "react-transition-group";
import styles from "./ModalManager.module.scss";
import { useRef } from "react";
import { FilterModal } from "../ui/FilterModal/FilterModal";

export const ModalManager = () => {
  const activeModalId = useAppSelector(activeModalIdSelector);
  const dispatch = useAppDispatch();
  const nodeRef = useRef(null);

  const onClose = () => {
    dispatch(commonActions.closeModal());
  };

  return (
    <>
      <CSSTransition
        in={activeModalId === ModalId.ADD_CONTENT_MODAL}
        timeout={400}
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
        nodeRef={nodeRef}
        unmountOnExit
      >
        <AddContentModal onClose={onClose} nodeRef={nodeRef} />
      </CSSTransition>
      <CSSTransition
        in={activeModalId === ModalId.FILTER_MODAL}
        timeout={300}
        classNames={{
          enter: styles.enterFilter,
          enterActive: styles.enterActiveFilter,
          exit: styles.exitFilter,
          exitActive: styles.exitActiveFilter,
        }}
        nodeRef={nodeRef}
        unmountOnExit
      >
        <FilterModal onClose={onClose} nodeRef={nodeRef} />
      </CSSTransition>
    </>
  );
};
