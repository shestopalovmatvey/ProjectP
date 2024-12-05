import { FC } from "react";
import Home from "@assets/images/home.svg?react";
import Profile from "@assets/images/profile.svg?react";
import Plus from "@assets/images/plus.svg?react";
import styles from "./Tabbar.module.scss";
import { IconButton } from "@/shared/ui";

export const Tabbar: FC = () => {
  return (
    <nav className={styles["Tab-bar"]}>
      <IconButton text="Главная" to="/">
        <Home width={25} height={25} />
      </IconButton>
      <div className={styles.Plus}>
        <Plus width={21} height={21} />
      </div>
      <IconButton text="Профиль" to="/profile">
        <Profile width={25} height={25} />
      </IconButton>
    </nav>
  );
};
