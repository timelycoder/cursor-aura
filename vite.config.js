import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/cursor-aura/", //  এটা  GitHub রিপোজিটরির নাম
  build: {
    outDir: "docs", //  output যাবে /docs ফোল্ডারে
  },
});
