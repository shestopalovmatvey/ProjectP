import { ProfileHeader } from "@/shared/ui/ProfileHeader/ProfileHeader";
import styles from "./ProfilePage.module.scss";

export const ProfilePage = () => {
  return (
    <div className={styles["Profile-Page"]}>
      <ProfileHeader />
    </div>
  );
};
