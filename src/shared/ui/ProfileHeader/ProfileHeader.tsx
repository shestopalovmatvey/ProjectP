import { Avatar } from "@/components/ui/avatar";
import styles from "./ProfileHeader.module.scss";

export const ProfileHeader = () => {
  return (
    <header className={styles["Profile-header"]}>
      <div className={styles.Avatar}>
        <Avatar
          name="user avatar"
          src="https://bit.ly/dan-abramov"
          shape="full"
          size={"full"}
        />
      </div>
    </header>
  );
};
