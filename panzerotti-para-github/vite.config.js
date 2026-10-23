import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Rutas relativas: el sitio funciona en GitHub Pages (usuario.github.io/repositorio/)
  // y también en un dominio propio, sin cambiar nada.
  base: './',
  plugins: [react(), tailwindcss()],
})
