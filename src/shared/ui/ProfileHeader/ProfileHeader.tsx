import { Avatar } from "@/components/ui/avatar";
import styles from "./ProfileHeader.module.scss";
import { useAppSelector } from "@/helpers/hooks";
import { userDataSelector } from "@/store/init";
import QRCodeIcon from "@assets/images/qrCode.svg?react";
import SharedIcon from "@assets/images/shared.svg?react";

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
      <p className={styles.UserName}>{userData?.username}</p>
      <div className={styles.Container}>
        <QRCodeIcon width={24} height={24} />
        <SharedIcon width={24} height={24} />
      </div>
    </header>
  );
};
