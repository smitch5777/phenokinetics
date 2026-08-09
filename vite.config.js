import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Custom domain served from the root, so assets resolve from '/'.
  base: '/',
  build: {
    // gh-pages publishes ./build, and scripts/build-shells.js writes the
    // per-route HTML files into it. Keep the directory name CRA used.
    outDir: 'build',
  },
  resolve: {
    alias: { '@': path.resolve(root, 'src') },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
