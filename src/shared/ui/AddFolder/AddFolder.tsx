import styles from "./AddFolder.module.scss";
import IconPlus from "@assets/images/plus.svg?react";

export const AddFolder = () => {
  return (
    <button className={styles.AddFolder}>
      <div className={styles.Content}>
        <IconPlus width={31} height={31} />
      </div>
      <p>Создать новую папку</p>
    </button>
  );
};
