import { Categories, CategoryTitles, ModalId } from "@/helpers/enums";
import styles from "./CategoryHeader.module.scss";
import IconBack from "@assets/images/back.svg?react";
import IconSort from "@assets/images/sort.svg?react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch } from "@/helpers/hooks";
import { commonActions } from "@/store/common";

export const CategoryHeader = () => {
  const { category } = useParams<{ category: Categories }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSortClick = () => {
    dispatch(commonActions.openModal({ id: ModalId.FILTER_MODAL }));
  };

  const onBack = () => {
    navigate("/");
  };
  return (
    <header className={styles["Category-header"]}>
      <IconBack width={24} height={24} onClick={onBack} />
      <h2 className={styles["Category-header__title"]}>
        {CategoryTitles[category as Categories] || "Категория"}
      </h2>
      <button onClick={onSortClick}>
        <IconSort width={24} height={24} />
      </button>
    </header>
  );
};
