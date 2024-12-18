import { ProfileHeader } from "@/shared/ui/ProfileHeader/ProfileHeader";
import styles from "./ProfilePage.module.scss";
import { ProfilePageContent } from "../ProfilePageContent/ProfilePageContent";

export const ProfilePage = () => {
  return (
    <div className={styles["Profile-Page"]}>
      <ProfileHeader />
      <ProfilePageContent />
    </div>
  );
};
