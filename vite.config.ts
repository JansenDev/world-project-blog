import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      "@config": path.resolve(__dirname, "./src/config"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@page": path.resolve(__dirname, "./src/page"),
      "@domain": path.resolve(__dirname, "./src/domain"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@service": path.resolve(__dirname, "./src/service"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    }
  },
  build: {
    sourcemap: true
  }
})
