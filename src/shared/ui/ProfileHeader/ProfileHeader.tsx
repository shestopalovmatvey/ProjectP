import { Avatar } from "@/components/ui/avatar";
import styles from "./ProfileHeader.module.scss";
import { useAppSelector } from "@/helpers/hooks";
import { userDataSelector } from "@/store/init";

export const ProfileHeader = () => {
  const userData = useAppSelector(userDataSelector);
  return (
    <header className={styles["Profile-header"]}>
      <div className={styles.Avatar}>
        <Avatar
          name="user avatar"
          src={userData?.photo_url}
          shape="full"
          size={"full"}
        />
      </div>
      <span className={styles.UserName}>asfasfasfasf</span>
    </header>
  );
};
