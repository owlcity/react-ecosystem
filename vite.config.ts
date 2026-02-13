// import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import type { PluginOption } from "vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // file-based 自动代码分割- 必须在 react() 前 保证插件顺序（router-plugin 必须在 react() 前）
    // tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    ...(tailwindcss() as unknown as PluginOption[]),
  ],
  resolve: {
    alias: {
      "@": "/src",
      "@layout": "/src/layout",
      "@router": "/src/router",
      "@pages": "/src/pages",
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@api": "/src/api",
    },
  },
});
