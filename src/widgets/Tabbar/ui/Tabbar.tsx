import { FC, useState } from "react";
import Home from "@assets/images/home.svg?react";
import Profile from "@assets/images/profile.svg?react";
import Plus from "@assets/images/plus.svg?react";
import styles from "./Tabbar.module.scss";
import { useAppDispatch, useAppSelector } from "@/helpers/hooks";
import { activeModalIdSelector, commonActions } from "@/store/common";
import { ModalId } from "@/helpers/enums";
import { IconButton } from "@/shared";

export const Tabbar: FC = () => {
  const activeModalId = useAppSelector(activeModalIdSelector);
  const dispatch = useAppDispatch();
  const [isClosing, setIsClosing] = useState(false);

  const toggleModal = () => {
    if (activeModalId === ModalId.ADD_CONTENT_MODAL) {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
      }, 300);
      dispatch(commonActions.closeModal());
    } else {
      dispatch(commonActions.openModal({ id: ModalId.ADD_CONTENT_MODAL }));
    }
  };

  return (
    <nav className={styles["Tab-bar"]}>
      <IconButton text="Главная" to="/">
        <Home width={25} height={25} />
      </IconButton>
      <button
        className={`${styles.Plus} ${
          activeModalId === ModalId.ADD_CONTENT_MODAL && !isClosing
            ? styles.PlusActive
            : ""
        }`}
        onClick={toggleModal}
      >
        <Plus width={21} height={21} />
      </button>
      <IconButton text="Профиль" to="/profile">
        <Profile width={25} height={25} />
      </IconButton>
    </nav>
  );
};
