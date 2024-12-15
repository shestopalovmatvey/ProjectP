import { FC } from "react";
import styles from "./AddContentModal.module.scss";
import { ButtonMain } from "@/shared";

interface AddContentModalProps {
  onClose: () => void;
  nodeRef: React.RefObject<HTMLDivElement>;
}

export const AddContentModal: FC<AddContentModalProps> = ({
  onClose,
  nodeRef,
}) => {
  return (
    <div className={styles.Overlay} onClick={onClose}>
      <div
        className={styles.Modal}
        onClick={(e) => e.stopPropagation()}
        ref={nodeRef}
      >
        <div className={styles.Content}>
          <h2 className={styles["Content__title"]}>Добавление контента</h2>
          <ButtonMain variant={"subtle"}>
            <span className={styles["Content__button-title"]}>Добавить</span>
          </ButtonMain>
        </div>
      </div>
    </div>
  );
};
