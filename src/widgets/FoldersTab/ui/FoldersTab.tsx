import { AddFolder } from "@/shared";
import styles from "./FoldersTab.module.scss";

export const FoldersTab = () => {
  return (
    <div className={styles.FoldersList}>
      <AddFolder />
    </div>
  );
};
