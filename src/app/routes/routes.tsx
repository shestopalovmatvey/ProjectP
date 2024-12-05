import { MainPage, ProfilePage } from "@/pages";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  { path: "/profile", element: <ProfilePage /> },
]);
