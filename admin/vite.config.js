import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './components')
    }
  },
  server: {
    port: 3000,
    open: true,
    allowedHosts: ['.railway.app', '.be1st.io', 'localhost']
  },
  preview: {
    allowedHosts: ['.railway.app', '.be1st.io', 'localhost']
  }
});