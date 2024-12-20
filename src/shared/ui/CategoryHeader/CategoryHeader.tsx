import { Categories, CategoryTitles, ModalId } from "@/helpers/enums";
import styles from "./CategoryHeader.module.scss";
import IconBack from "@assets/images/back.svg?react";
import IconSort from "@assets/images/sort.svg?react";
import { FaRegStar } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router";
import { useAppDispatch } from "@/helpers/hooks";
import { commonActions } from "@/store/common";
import { FC } from "react";
import cls from "classnames";

interface CategoryHeaderProps {
  isCardHeader?: boolean;
}

export const CategoryHeader: FC<CategoryHeaderProps> = ({ isCardHeader }) => {
  const { category } = useParams<{ category: Categories }>();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSortClick = () => {
    dispatch(commonActions.openModal({ id: ModalId.FILTER_MODAL }));
  };

  const onBack = () => {
    if (location.pathname === `/${category}/folders`) {
      navigate("/");
    } else {
      navigate(-1);
    }
  };
  return (
    <header
      className={cls(styles["Category-header"], {
        [styles["Category-header__fixed"]]: isCardHeader,
      })}
    >
      <IconBack width={24} height={24} onClick={onBack} />
      {isCardHeader ? (
        <div className={styles.Icons}>
          <button>
            <FaRegStar width={30} height={30} />
          </button>
          <button>
            <FaRegTrashAlt width={24} height={24} />
          </button>
        </div>
      ) : (
        <>
          <h2 className={styles["Category-header__title"]}>
            {CategoryTitles[category as Categories] || "Категория"}
          </h2>
          <button onClick={onSortClick}>
            <IconSort width={24} height={24} />
          </button>{" "}
        </>
      )}
    </header>
  );
};
