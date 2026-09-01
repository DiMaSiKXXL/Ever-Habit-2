import { defineConfig } from 'vite'

import path from 'path'

export default defineConfig({
  base: '/Ever-Habit-2/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})