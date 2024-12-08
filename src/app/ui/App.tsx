import { Tabbar } from "@/widgets/Tabbar/ui/Tabbar";
import { AppRouter } from "../providers/RouteProvider";
import { BrowserRouter } from "react-router";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
        <Tabbar />
      </BrowserRouter>
    </>
  );
};

export default App;
