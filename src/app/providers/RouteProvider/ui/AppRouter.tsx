import React from "react";
import { Route, Routes } from "react-router";
import { CategoryPage, ItemContentPage, MainPage, ProfilePage } from "@/pages";
import { AllItemsTab } from "@/widgets/AllItemsTab";
import { FoldersTab } from "@/widgets/FoldersTab";
import { AchievementsTab } from "@/widgets/AchievementsTab";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/:category" element={<CategoryPage />}>
        <Route path="allItems" element={<AllItemsTab />} />
        <Route path="folders" element={<FoldersTab />} />
      </Route>
      <Route path="/profile" element={<ProfilePage />}>
        <Route path="achievements" element={<AchievementsTab />} />
        <Route path="settings" element={<div>Настройки</div>} />
        <Route path="stats" element={<div>Статистика</div>} />
      </Route>
      <Route
        path="/:category/allItems/:contentId"
        element={<ItemContentPage />}
      />
    </Routes>
  );
};
