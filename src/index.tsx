import { createRoot } from "react-dom/client";
import "@assets/styles/main.scss";
import { App } from "./app";
import { Provider } from "@/components/ui/provider";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <App />
  </Provider>,
);
