import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // 自动代码分割- 必须在 react() 前 保证插件顺序（router-plugin 必须在 react() 前）
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
  ],
});
