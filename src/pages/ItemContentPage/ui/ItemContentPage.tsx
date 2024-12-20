import { CategoryHeader } from "@/shared";
import { useParams } from "react-router";
import styles from "./ItemContentPage.module.scss";
import { Image } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { useRef } from "react";

export const ItemContentPage = () => {
  const { contentId } = useParams();

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  // TODO:
  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleFocus = () => {
    textareaRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className={styles.Container}>
      <CategoryHeader isCardHeader />
      <Image
        className={styles.Image}
        objectFit={"fill"}
        width={"100%"}
        height="285px"
        src={
          "https://s3-alpha-sig.figma.com/img/4053/8a48/123941159de84596f5b3a786cdc0029a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D9usWMzOeMlLYjLuxopTDDBV8gq-W17N46hXxO1QGHUeCR9oqKp27E3l9uXaF8olHIaibEhJG8-9WaW0bbdMQNiNULo4Fi149heObdBpVV-o8DD~qZP1xTFqC~m4oKPYCj5vJ4K~VZCQwg2qFQgjjxiHNvzUsp5LFrpkcVlhF-zpa3HJdVIUUkEdQlXbxi-RGa28pWEaRM-jUw2Uj3tFqFx8NQeWwt66BIYHsOKLYilQxgs-EPSYKn9f6itzs60Gbp5tJs5GaHnRi4Z9z2n1phzTVTIadg701lpWhG7BcAB44RhsLcXJFLv~-Hb~Yttq0YN98PZ~RUbrLPUy7x-SSg__"
        }
        alt={contentId}
      />
      <div className={styles.Details}>
        <div className={styles["Details_Header"]}>
          <h2 className={styles.Title}>Дюна: Часть вторая</h2>
          <p className={styles.Metadata}>США, 2024 год, PGA-13</p>
        </div>
        <div className={styles["Details_Body"]}>
          <h3 className={styles.Subtitle}>Описание</h3>
          <p className={styles.Description}>
            Дюна: Часть вторая (англ. Dune: Part Two) — эпический
            научно-фантастический фильм. Продолжение фильма Дюна (2021), часть
            медиафраншизы с тем же названием. В этой части герцог Пол Атрейдес
            присоединяется к фрименам, чтобы стать Муад Дибом, одновременно
            пытаясь остановить наступление войны.
          </p>
        </div>
        <div className={styles["Details_Footer"]}>
          <h3 className={styles.Subtitle}>Заметки</h3>
          <Textarea
            ref={textareaRef}
            onInput={handleInput}
            onFocus={handleFocus}
            placeholder="Добавить заметку"
            padding={"12px"}
            bg={"#242425"}
            resize="none"
          />
        </div>
      </div>
    </div>
  );
};
