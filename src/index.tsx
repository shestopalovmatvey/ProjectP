import { createRoot } from "react-dom/client";
import "@assets/styles/main.scss";
import { App } from "./app";
import { Provider } from "@/components/ui/provider";
import { StoreProvider } from "./app/providers/StoreProvider";

createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <Provider>
      <App />
    </Provider>
  </StoreProvider>,
);
