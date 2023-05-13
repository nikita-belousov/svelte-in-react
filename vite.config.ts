import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svelte()],
  build: {
    rollupOptions: {
      input: 'src/index.ts',
      output: [
        {
          dir: 'dist/cjs',
          format: 'cjs',
          sourcemap: true
        },
        {
          dir: 'dist/esm',
          format: 'esm',
          sourcemap: true
        }
      ],
    }
  }
})
