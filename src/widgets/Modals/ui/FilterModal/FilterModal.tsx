import { FC, useState } from "react";
import styles from "./FilterModal.module.scss";
import IconClose from "@assets/images/close.svg?react";
import IconSort from "@assets/images/sort.svg?react";
import { useAppDispatch } from "@/helpers/hooks";
import { commonActions } from "@/store/common";
import { Radio, RadioGroup } from "@/components/ui/radio";
import { Stack } from "@chakra-ui/react";

interface FilterModalProps {
  onClose: () => void;
  nodeRef: React.RefObject<HTMLDivElement>;
}

export const FilterModal: FC<FilterModalProps> = ({ onClose, nodeRef }) => {
  const [value, setValue] = useState("1");
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
            onValueChange={(e) => setValue(e.value)}
          >
            <Stack gap="12px">
              <Radio value="1">По дате добавления</Radio>
              <Radio value="2">По алфавиту А-Я</Radio>
              <Radio value="3">По рейтингу</Radio>
              <Radio value="4">По дате выхода </Radio>
            </Stack>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
