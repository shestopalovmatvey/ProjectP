import { AchievementsTab } from "@/widgets/AchievementsTab";
import styles from "./ProfilePageContent.module.scss";
import { Tabs, Link } from "@chakra-ui/react";

export const ProfilePageContent = () => {
  return (
    <div className={styles.Container}>
      <Tabs.Root
        defaultValue="achievements"
        variant="plain"
        fitted
        css={{ fontFamily: "SF Pro Display" }}
      >
        <Tabs.List
          bg="#4F5155"
          borderRadius={"8px"}
          p="1"
          fontWeight={"bold"}
          marginBottom={"15px"}
        >
          <Tabs.Trigger
            borderRadius={"4px"}
            value="achievements"
            height="32px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            asChild
          >
            <Link unstyled href="#achievements">
              Достижения
            </Link>
          </Tabs.Trigger>
          <Tabs.Trigger
            borderRadius={"4px"}
            value="settings"
            height="32px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            asChild
          >
            <Link unstyled href="#settings">
              Настройки
            </Link>
          </Tabs.Trigger>
          <Tabs.Trigger
            borderRadius={"4px"}
            value="stats"
            height="32px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            asChild
          >
            <Link unstyled href="#stats">
              Статистика
            </Link>
          </Tabs.Trigger>
          <Tabs.Indicator borderRadius={"4px"} bg={"#24232D"} color={"#fff"} />
        </Tabs.List>
        <Tabs.Content value="achievements">
          <AchievementsTab />
        </Tabs.Content>
        <Tabs.Content value="settings">Настройки</Tabs.Content>
        <Tabs.Content value="stats">Статистика</Tabs.Content>
      </Tabs.Root>
    </div>
  );
};
