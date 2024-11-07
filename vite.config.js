import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		federation({
			name: "remotes",
			filename: "atomicLibrary.js",
      exposes: {
        "./DataTable": "./src/components/Table/Table.jsx"
      },
			shared: ["react", "react-dom"],
		}),
		react(),
	],
  build: {
    target: 'esnext',
    modulePreload: false,
    rollupOptions: {
      output: {
        format: "esm",
        entryFileNames: "[name].js",
      },
    },
  },
  preview: {
    port: 3006,
    strictPort: true,
  },
});
