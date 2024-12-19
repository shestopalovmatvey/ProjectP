import { AchievementsTab } from "@/widgets/AchievementsTab";
import styles from "./ProfilePageContent.module.scss";
import { Tabs } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export const ProfilePageContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabChange = (details: string) => {
    switch (details) {
      case "achievements":
        navigate(`/profile/achievements`);
        return;
      case "settings":
        navigate(`/profile/settings`);
        return;
      case "stats":
        navigate(`/profile/settings`);
        return;
      default:
        navigate(`/profile/achievements`);
    }
  };

  useEffect(() => {
    if (location.pathname == "/profile") {
      navigate(`/profile/achievements`);
    }
  }, [location.pathname, navigate]);

  return (
    <div className={styles.Container}>
      <Tabs.Root
        defaultValue="achievements"
        variant="plain"
        fitted
        css={{ fontFamily: "SF Pro Display" }}
        onValueChange={(details) => handleTabChange(details.value)}
      >
        <Tabs.List
          bg="#4F5155"
          borderRadius={"8px"}
          p="1"
          fontWeight={"bold"}
          marginBottom={"24px"}
        >
          <Tabs.Trigger
            borderRadius={"4px"}
            value="achievements"
            height="32px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Достижения
          </Tabs.Trigger>
          <Tabs.Trigger
            borderRadius={"4px"}
            value="settings"
            height="32px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Настройки
          </Tabs.Trigger>
          <Tabs.Trigger
            borderRadius={"4px"}
            value="stats"
            height="32px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Статистика
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
