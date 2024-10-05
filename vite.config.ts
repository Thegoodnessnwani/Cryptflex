import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // define: {
  //   'global': {},
  //   'process.env': {},
  // },
  // define: {
  //   'global': {},
  // },
  // build: {
  //   rollupOptions: {
  //     external: ['global'],
  //   },
  // },
  // define: process.env.NODE_ENV === 'development' ? { global: 'window' } : {}
})
