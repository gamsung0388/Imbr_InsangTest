import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command }) => ({
  plugins: [vue()],
  base: '/Imbr_InsangTest/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}))