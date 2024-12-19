import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
    compression({ algorithm: "brotliCompress" }),
  ],
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
    },
  },
});
