import { FC, useState } from "react";
import styles from "./FilterModal.module.scss";
import IconClose from "@assets/images/close.svg?react";
import IconSort from "@assets/images/sort.svg?react";
import { useAppDispatch } from "@/helpers/hooks";
import { commonActions } from "@/store/common";
import { Radio, RadioGroup } from "@/components/ui/radio";
import { Stack } from "@chakra-ui/react";
import { SortCategory } from "@/helpers/enums";

interface FilterModalProps {
  onClose: () => void;
  nodeRef: React.RefObject<HTMLDivElement>;
}

export const FilterModal: FC<FilterModalProps> = ({ onClose, nodeRef }) => {
  const [value, setValue] = useState<SortCategory>(SortCategory.DATE_ADDED);
  const dispatch = useAppDispatch();

  const onSortClick = () => {
    dispatch(commonActions.closeModal());
  };
  return (
    <div className={styles.Overlay} onClick={onClose}>
      <div
        className={styles.Modal}
        onClick={(e) => e.stopPropagation()}
        ref={nodeRef}
      >
        <div className={styles.Content}>
          <div className={styles["Content-header"]}>
            <button onClick={onSortClick} className={styles.ButtonSvg}>
              <IconClose width={24} height={24} />
            </button>
            <h2 className={styles["Content__title"]}>Фильтр</h2>
            <button onClick={onSortClick} className={styles.ButtonSvg}>
              <IconSort width={24} height={24} />
            </button>
          </div>
          <RadioGroup
            value={value}
            variant={"solid"}
            colorPalette={"#4F5155"}
            onValueChange={(e) => setValue(e.value as SortCategory)}
          >
            <Stack gap="12px" className={styles["Radio-Container"]}>
              <Radio
                value={SortCategory.DATE_ADDED}
                className={
                  value === SortCategory.DATE_ADDED ? styles.active : ""
                }
              >
                По дате добавления
              </Radio>
              <Radio
                value={SortCategory.ALPHABET_ASC}
                className={
                  value === SortCategory.ALPHABET_ASC ? styles.active : ""
                }
              >
                По алфавиту А-Я
              </Radio>
              <Radio
                value={SortCategory.RATING}
                className={value === SortCategory.RATING ? styles.active : ""}
              >
                По рейтингу
              </Radio>
              <Radio
                value={SortCategory.RELEASE_DATE}
                className={
                  value === SortCategory.RELEASE_DATE ? styles.active : ""
                }
              >
                По дате выхода
              </Radio>
            </Stack>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
