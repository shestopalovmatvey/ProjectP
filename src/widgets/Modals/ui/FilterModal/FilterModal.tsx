import { FC, useEffect, useRef, useState } from "react";
import styles from "./FilterModal.module.scss";
import IconClose from "@assets/images/close.svg?react";
import IconSort from "@assets/images/sort.svg?react";
import { useAppDispatch } from "@/helpers/hooks";
import { commonActions } from "@/store/common";
import { Radio, RadioGroup } from "@/components/ui/radio";
import { Stack } from "@chakra-ui/react";
import { SortCategory } from "@/helpers/enums";
import { CSSTransition } from "react-transition-group";

interface FilterModalProps {
  onClose: () => void;
  isOpen: boolean;
}

export const FilterModal: FC<FilterModalProps> = ({ onClose, isOpen }) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<SortCategory>(SortCategory.DATE_ADDED);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (nodeRef.current && !nodeRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.pointerEvents = "none";
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.pointerEvents = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const onSortClick = () => {
    dispatch(commonActions.closeModal());
  };
  return (
    <CSSTransition
      in={isOpen}
      timeout={400}
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        exit: styles.exit,
        exitActive: styles.exitActive,
      }}
      unmountOnExit
    >
      <div className={styles.Overlay}>
        <div className={styles.Modal} ref={nodeRef}>
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
              colorPalette={"gray"}
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
    </CSSTransition>
  );
};
