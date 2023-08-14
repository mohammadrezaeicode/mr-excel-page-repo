import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: '/mr-excel-page/', // or '/', depending on your setup
  plugins: [vue()],
  resolve: {
    publicPath: '/mr-excel-page/', // or '/', depending on your setup
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
