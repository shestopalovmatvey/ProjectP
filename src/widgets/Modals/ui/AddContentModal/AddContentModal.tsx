import { FC } from "react";
import styles from "./AddContentModal.module.scss";

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
          <h2>Добавить контент</h2>
          <p>Добавьте сюда любой контент</p>
        </div>
      </div>
    </div>
  );
};
