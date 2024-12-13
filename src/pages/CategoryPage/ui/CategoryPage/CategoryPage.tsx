import { CategoryHeader } from "@/shared";
import styles from "./CategoryPage.module.scss";
import { CategoryPageContent } from "../CategoryPageContent/CategoryPageContent";

export const CategoryPage = () => {
  return (
    <div className={styles["Category-Page"]}>
      <CategoryHeader />
      <CategoryPageContent />
    </div>
  );
};
