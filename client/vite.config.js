import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql/': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      // This section is for Rollup options, usually not needed for basic Vite setups
      // Remove `external` configuration for better handling of dependencies
      // external: ['@apollo/client'],
    },
  },
});
