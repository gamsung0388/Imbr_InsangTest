import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command }) => {
  return {
    plugins: [vue()],
    base: process.env.VITE_BASE,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
})