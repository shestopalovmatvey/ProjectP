import { FC, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./AddContentModal.module.scss";
import { ButtonMain } from "@/shared";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { createListCollection } from "@chakra-ui/react";
import { Categories, CategoryTitles } from "@/helpers/enums";

interface AddContentModalProps {
  onClose: () => void;
  isOpen: boolean;
}

export const AddContentModal: FC<AddContentModalProps> = ({
  onClose,
  isOpen,
}) => {
  const nodeRef = useRef(null);

  const categories = createListCollection({
    items: [
      { label: CategoryTitles.films, value: Categories.FILMS },
      { label: CategoryTitles.books, value: Categories.BOOKS },
      { label: CategoryTitles.musics, value: Categories.MUSICS },
      { label: CategoryTitles.games, value: Categories.GAMES },
      { label: CategoryTitles.chanel, value: Categories.CHANEL },
    ],
  });

  const onCloseModal = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
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
      nodeRef={nodeRef}
      unmountOnExit
    >
      <div className={styles.Overlay} onClick={onCloseModal} ref={nodeRef}>
        <div className={styles.Modal}>
          <div className={styles.Content}>
            <h2 className={styles["Content__title"]}>Добавление контента</h2>
            <SelectRoot
              collection={categories}
              closeOnSelect
              onValueChange={(details) => console.log("details", details)}
            >
              <SelectTrigger
                clearable
                bg={"#F2F2F7"}
                borderRadius={"8px"}
                className={styles.Select}
                classes={styles.SelectArrow}
              >
                <SelectValueText
                  padding={"12px"}
                  placeholder="Категория"
                  className={styles.SelectLabel}
                />
              </SelectTrigger>
              <SelectContent
                bg={"#F2F2F7"}
                color={"#161719"}
                padding={"10px"}
                borderRadius={"8px"}
              >
                {categories.items.map((movie) => (
                  <SelectItem
                    item={movie}
                    key={movie.value}
                    padding={"8px"}
                    className={styles.SelectOption}
                  >
                    {movie.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
            <ButtonMain variant={"subtle"}>
              <span className={styles["Content__button-title"]}>Добавить</span>
            </ButtonMain>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
