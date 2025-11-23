import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure we don't use @ alias but if any library does, handle it
      // "@": path.resolve(__dirname, "./"), 
      // Actually, best to avoid aliases if we want to be safe with the "Make" environment constraints.
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase warning limit slightly
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'motion/react', 'lucide-react'],
          ui: ['@radix-ui/react-slot', 'class-variance-authority', 'clsx', 'tailwind-merge'],
        },
      },
    },
  },
});
