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
interface AddContentModalProps {
  onClose: () => void;
  isOpen: boolean;
}

export const AddContentModal: FC<AddContentModalProps> = ({
  onClose,
  isOpen,
}) => {
  const nodeRef = useRef(null);

  const frameworks = createListCollection({
    items: [
      { label: "React.js", value: "react" },
      { label: "Vue.js", value: "vue" },
      { label: "Angular", value: "angular" },
      { label: "Svelte", value: "svelte" },
    ],
  });

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
      <div className={styles.Overlay} onClick={onClose} ref={nodeRef}>
        <div className={styles.Modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.Content}>
            <h2 className={styles["Content__title"]}>Добавление контента</h2>
            <SelectRoot collection={frameworks} size="sm" width="320px">
              <SelectTrigger clearable>
                <SelectValueText placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                {frameworks.items.map((movie) => (
                  <SelectItem item={movie} key={movie.value}>
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
