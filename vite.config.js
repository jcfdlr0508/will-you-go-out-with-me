import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/will-you-go-out-with-me/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})
