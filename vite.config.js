import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Ensure this is set to '/' for user/organization pages
  plugins: [react()],
});
