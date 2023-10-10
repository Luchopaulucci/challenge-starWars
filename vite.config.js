import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Asegúrate de que la opción "hmr" esté habilitada
    hmr: true,
  },
})
