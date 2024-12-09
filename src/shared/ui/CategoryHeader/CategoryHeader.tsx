import { Categories, CategoryTitles } from "@/helpers/enums";
import styles from "./CategoryHeader.module.scss";
import IconBack from "@assets/images/back.svg?react";
import IconSort from "@assets/images/sort.svg?react";
import { useNavigate, useParams } from "react-router";

export const CategoryHeader = () => {
  const { category } = useParams<{ category: Categories }>();
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/");
  };
  return (
    <header className={styles["Category-header"]}>
      <IconBack width={24} height={24} onClick={onBack} />
      <h2 className={styles["Category-header__title"]}>
        {CategoryTitles[category as Categories] || "Категория"}
      </h2>
      <IconSort width={24} height={24} />
    </header>
  );
};
