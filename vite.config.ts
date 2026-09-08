import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Для user site DianaKurt.github.io base = '/'
// Если деплой в project repo, смените на '/repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
