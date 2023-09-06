import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://TediM98.github.io/Portfolio/',
  plugins: [react()],
})
