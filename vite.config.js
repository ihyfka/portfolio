import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import ManglePlugin from "unplugin-tailwindcss-mangle/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ManglePlugin({
      dev: true,
      classPrefix: "tw-",
      exclude: [/active/, /modal/],
    }),
  ],
  css: {
    transformer: "lightningcss",
    minify: "lightningcss",
  },
  build: {
    sourcemap: false,
  },
});
