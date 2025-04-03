import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path"; // Import path để sử dụng alias

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $icons: path.resolve("./src/icons"), // Alias trỏ đến thư mục /src/icons
    },
  },
  server: {
    hmr: false, // Đảm bảo HMR được bật
  },
});
