import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ParadiseCore89/',  
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['src']
      }
    }
  }
})




