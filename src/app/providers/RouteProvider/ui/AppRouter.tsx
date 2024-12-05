import React from "react";
import { RouterProvider } from "react-router";
import { router } from "../../../routes/routes";

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
