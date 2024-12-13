import { Tabbar } from "@/widgets/Tabbar/ui/Tabbar";
import { AppRouter } from "../providers/RouteProvider";
import { BrowserRouter } from "react-router";
import { ModalManager } from "@/widgets/Modals";
import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    window.Telegram.WebApp.expand();
  });
  return (
    <>
      <BrowserRouter>
        <AppRouter />
        <Tabbar />
        <ModalManager />
      </BrowserRouter>
    </>
  );
};

export default App;
