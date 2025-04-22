import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from "path";
import dotenv from "dotenv";

// Charger les variables d'environnement
dotenv.config();

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Configure l'alias @ pour pointer vers src
    },
  },
  define: {
    global: "window",
    "process.env": process.env, // Injecter les variables d'environnement
  },
})
