import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Aquí añadimos la configuración del proxy
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // La URL de nuestro servidor backend
        changeOrigin: true,
        secure: false,
      }
    }
  }
})