import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site is served from the repo root (username.github.io), so base stays '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
