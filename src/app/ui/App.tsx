import { Tabbar } from "@/widgets/Tabbar/ui/Tabbar";
import { AppRouter } from "../providers/RouteProvider";
import { BrowserRouter } from "react-router";
import { ModalManager } from "@/widgets/Modals";
import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    window.Telegram.WebApp.expand();
    window.Telegram.WebApp.isClosingConfirmationEnabled = true;
  }, []);

  return (
    <div className="AppLayout">
      <BrowserRouter>
        <div className="ContentWrapper">
          <AppRouter />
        </div>
        <Tabbar />
        <ModalManager />
      </BrowserRouter>
    </div>
  );
};

export default App;
