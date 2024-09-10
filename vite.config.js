import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  assetsInclude: ["**/*.JPG"],
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          floatPrecision: 2,
        },
      },
    }),
  ],
  build: {
    minify: "terser",
    chunkSizeWarningLimit: 500,
    target: "esnext",
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Create a separate chunk for vendor libraries
            return "vendor";
          }
          // Additional chunk splitting logic if needed
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
  },
});
