import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mypage/', // GitHub Pages用: <username>.github.io リポジトリの場合は '/' でOK
})
