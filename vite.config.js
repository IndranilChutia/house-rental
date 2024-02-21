import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      '@components': "/src/components",
      pages: "/src/pages",
      '@images': "/src/assets/images",
    },
  },
})
