import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/MSC_S1_MatematicasDiscretas",
  plugins: [react()],
});
