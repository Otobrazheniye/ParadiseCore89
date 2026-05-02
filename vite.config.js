import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        includePaths: ['src']
      }
    }
  }
})



