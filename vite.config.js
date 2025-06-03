import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
      deleteOriginFile: false,
      threshold: 10240, // Seuil de compression en octets
      compressionOptions: {
        level: 9, // Niveau de compression maximum
      },
    }),
  ],
  server: {
    headers: {
      // Cache pour les ressources statiques
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Génération de noms de fichiers avec hash pour le cache-busting
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
    // Configuration du cache pour la production
    assetsInlineLimit: 4096, // Inline les assets < 4kb
    cssCodeSplit: true,
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
