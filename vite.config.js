import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/mr-excel-page/' : '/', // or '/', depending on your setup
  plugins: [vue()],
  resolve: {
    // publicPath: '/', // or '/', depending on your setup
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
