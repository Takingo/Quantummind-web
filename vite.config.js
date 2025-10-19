import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Use absolute paths from root for IONOS
  base: '/',
  
  build: {
    // Output to dist directory
    outDir: 'dist',
    
    // Generate source maps for debugging (optional, can be disabled for production)
    sourcemap: false,
    
    // Ensure all assets use relative paths
    assetsDir: 'assets',
    
    // Don't add any external domain references
    rollupOptions: {
      output: {
        // Ensure consistent file naming
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  },
  
  // No server-side configurations that could affect build output
  server: {
    port: 5173,
    strictPort: false,
  },
  
  // Ensure no CORS or proxy configurations affect the build
  preview: {
    port: 4173,
    strictPort: false,
  }
})
