import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
