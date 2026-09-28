import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Spotify only accepts 127.0.0.1 (not "localhost") as an http redirect address.
export default defineConfig({ plugins: [react()], server: { host: '127.0.0.1', port: 5173, strictPort: true } });
