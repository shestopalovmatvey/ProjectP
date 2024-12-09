import { FC, useState, useEffect } from "react";
import styles from "./AddContentModal.module.scss";

interface AddContentModalProps {
  onClose: () => void;
}

export const AddContentModal: FC<AddContentModalProps> = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  useEffect(() => {
    return () => setIsClosing(false);
  }, []);

  return (
    <div
      className={`${styles.Overlay} ${isClosing ? styles.fadeOut : ""}`}
      onClick={handleClose}
    >
      <div
        className={`${styles.Modal} ${isClosing ? styles.slideDown : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.Content}>
          <h2>Добавить контент</h2>
          <p>Добавьте сюда любой контент</p>
        </div>
      </div>
    </div>
  );
};
