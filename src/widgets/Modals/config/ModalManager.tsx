import { ModalId } from "@/helpers/enums";
import { useAppDispatch, useAppSelector } from "@/helpers/hooks";
import { activeModalIdSelector, commonActions } from "@/store/common";
import { AddContentModal } from "../ui/AddContentModal/AddContentModal";
import { CSSTransition } from "react-transition-group";
import styles from "./ModalManager.module.scss";
import { useRef } from "react";

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
        timeout={300}
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
    </>
  );
};
