import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/lead": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
      "/districts": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
      "/regions": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
      "/real-estates": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
