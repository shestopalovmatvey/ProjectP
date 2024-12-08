import styles from "./MainPage.module.scss";
import { Image } from "@chakra-ui/react";
import MainPageImage from "@assets/images/MainPageImage.png";
import { Stack, For } from "@chakra-ui/react";

export const MainPage = () => {
  //   const tgApp = useTelegramWebApp();
  const arr = Array(5).fill(0);
  return (
    <div className={styles["Main-page"]}>
      <Stack
        className={styles["List-container"]}
        scrollBehavior={"smooth"}
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "24px",
          },
        }}
      >
        <For each={arr}>
          {(item, index) => (
            <div>
              <Image
                key={index}
                height="150px"
                src={MainPageImage}
                borderRadius={20}
                alt="Фильмы"
              />
            </div>
          )}
        </For>
      </Stack>
    </div>
  );
};
