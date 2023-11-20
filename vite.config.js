import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import ghPages from 'vite-plugin-gh-pages';
import vue from "@vitejs/plugin-vue";


// https://vitejs.dev/config/
export default defineConfig({
  base: "/home/",
  plugins: [vue(),ghPages],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
