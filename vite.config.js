import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base: '/Imbr_InsangTest/', // 🔥 레포 이름
})