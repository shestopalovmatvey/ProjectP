import { createRoot } from "react-dom/client";
import "@assets/styles/main.scss";
import { App } from "./app";

createRoot(document.getElementById("root")!).render(<App />);
