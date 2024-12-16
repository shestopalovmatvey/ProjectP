import { Tabbar } from "@/widgets/Tabbar/ui/Tabbar";
import { AppRouter } from "../providers/RouteProvider";
import { BrowserRouter } from "react-router";
import { ModalManager } from "@/widgets/Modals";
import { useEffect } from "react";
import { useAppDispatch } from "@/helpers/hooks";
import { initializeApp } from "@/store/init";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

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
