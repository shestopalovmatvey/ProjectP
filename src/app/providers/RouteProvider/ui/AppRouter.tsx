import React from "react";
import { Route, Routes } from "react-router";
import { CategoryPage, MainPage, ProfilePage } from "@/pages";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path="/" element={<MainPage />}>
        {/* <Route path="/:category/:itemId" element={<ItemPage />} /> */}
      </Route>
      <Route path="/:category" element={<CategoryPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};
