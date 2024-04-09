import react from "@vitejs/plugin-react";
import * as glob from "glob";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: [
        ...glob.sync("html/*.html"),
        ...glob.sync("styles/*.css"),
        ...glob.sync("service_workers/**/*.ts"),
      ],
      output: {
        entryFileNames: "js/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
