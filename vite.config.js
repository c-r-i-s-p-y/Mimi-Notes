import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // enables LAN access
    port: 5173, // you can set your preferred port
  },
});
