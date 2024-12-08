import React from "react";
import { Route, Routes } from "react-router";
import { MainPage, ProfilePage } from "@/pages";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};
