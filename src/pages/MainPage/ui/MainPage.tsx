import styles from "./MainPage.module.scss";
import { Image } from "@chakra-ui/react";
import MainPageImage from "@assets/images/MainPageImage.png";
import { Stack, For } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { Categories } from "@/helpers/enums";

export const MainPage = () => {
  const navigate = useNavigate();
  //   const tgApp = useTelegramWebApp();
  const categories = Object.values(Categories);
  const handleCategoryClick = (category: string) => {
    navigate(`/${category}`);
  };
  return (
    <div className={styles["Main-page"]}>
      <Stack
        className={styles["List-container"]}
        scrollBehavior={"smooth"}
        gap={"3.5"}
      >
        <For each={categories}>
          {(category, index) => (
            <div onClick={() => handleCategoryClick(category)} key={index}>
              <Image
                height="150px"
                src={MainPageImage}
                borderRadius={20}
                alt={category}
                cursor="pointer"
              />
            </div>
          )}
        </For>
      </Stack>
    </div>
  );
};
