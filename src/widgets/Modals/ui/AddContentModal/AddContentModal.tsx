import { FC, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./AddContentModal.module.scss";
import { ButtonMain } from "@/shared";

interface AddContentModalProps {
  onClose: () => void;
  isOpen: boolean;
}

export const AddContentModal: FC<AddContentModalProps> = ({
  onClose,
  isOpen,
}) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={isOpen}
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
      <div className={styles.Overlay} onClick={onClose} ref={nodeRef}>
        <div className={styles.Modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.Content}>
            <h2 className={styles["Content__title"]}>Добавление контента</h2>
            <ButtonMain variant={"subtle"}>
              <span className={styles["Content__button-title"]}>Добавить</span>
            </ButtonMain>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
