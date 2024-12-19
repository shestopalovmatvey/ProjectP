import { FC } from "react";
import styles from "./CategoryCard.module.scss";
import { Image } from "@chakra-ui/react";

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  onClick: () => void;
}

export const CategoryCard: FC<CategoryCardProps> = ({
  title,
  imageUrl,
  onClick,
}) => {
  return (
    <div className={styles.Container} onClick={onClick}>
      <Image
        rounded={"8px"}
        width={"100%"}
        height="197px"
        src={imageUrl}
        alt={title}
      />
      <p className={styles.Title}>{title}</p>
    </div>
  );
};
