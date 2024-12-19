import { Categories, CategoryTitles } from "@/helpers/enums";
import { AllItemsTab } from "@/widgets/AllItemsTab";
import { FoldersTab } from "@/widgets/FoldersTab";
import { Tabs } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

export const CategoryPageContent = () => {
  const { category } = useParams<{ category: Categories }>();
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabChange = (details: string) => {
    if (details === "allItemsInCategory") {
      navigate(`/${category}/allItems`);
    } else if (details === "folders") {
      navigate(`/${category}/folders`);
    }
  };

  useEffect(() => {
    if (location.pathname === `/${category}`) {
      navigate(`/${category}/allItems`, { replace: true });
    }
  }, [category, location.pathname, navigate]);

  return (
    <Tabs.Root
      defaultValue="allItemsInCategory"
      onValueChange={(details) => handleTabChange(details.value)}
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
          value="allItemsInCategory"
          height="32px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {CategoryTitles[category as Categories]}
        </Tabs.Trigger>
        <Tabs.Trigger
          borderRadius={"4px"}
          value="folders"
          height="32px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Папки
        </Tabs.Trigger>
        <Tabs.Indicator borderRadius={"4px"} bg={"#24232D"} color={"#fff"} />
      </Tabs.List>
      <Tabs.Content value="allItemsInCategory">
        <AllItemsTab />
      </Tabs.Content>
      <Tabs.Content value="folders">
        <FoldersTab />
      </Tabs.Content>
    </Tabs.Root>
  );
};
