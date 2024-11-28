import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/TheSilkVault.github.io",
  plugins: [react()],
})