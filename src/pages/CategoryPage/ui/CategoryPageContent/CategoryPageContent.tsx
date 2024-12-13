import { Categories, CategoryTitles } from "@/helpers/enums";
import { Tabs } from "@chakra-ui/react";
import { useParams } from "react-router";

export const CategoryPageContent = () => {
  const { category } = useParams<{ category: Categories }>();

  return (
    <Tabs.Root
      defaultValue="allItemsInCategory"
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
        {CategoryTitles[category as Categories]}
      </Tabs.Content>
      <Tabs.Content value="folders">Папки</Tabs.Content>
    </Tabs.Root>
  );
};
