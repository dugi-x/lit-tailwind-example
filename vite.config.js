import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild',
    lib: {
      entry: 'src/main-element.js',
      formats: ['es'],
    },
    rollupOptions: {
      //external: /^lit/,
    },
  },
})
