import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // GitHub Pages用に相対パスにする場合が多いが、今回はカスタムドメインではないのでユーザー名/リポジトリ名になる可能性がある。一旦 './' にしておくのが無難。
})
