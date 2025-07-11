import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['pdfjs-dist'],
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  assetsInclude: ['**/*.pdf'],
});
