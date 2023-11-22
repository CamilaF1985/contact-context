// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.json'],
    alias: {
      '/src/main.jsx': path.resolve(__dirname, 'src', 'components', 'main.jsx'),
      '/src/Layout.jsx': path.resolve(__dirname, 'src', 'layouts', 'Layout.jsx'),
      // Agrega otras rutas según sea necesario
    },
  },
});


