import { Tabbar } from "@/widgets/Tabbar/ui/Tabbar";
import { AppRouter } from "../providers/RouteProvider";
import { BrowserRouter } from "react-router";
import { ModalManager } from "@/widgets/Modals";

export const App = () => {
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
