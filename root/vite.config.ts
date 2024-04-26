import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'root',
      remotes: {
        'remoteApp': 'http://localhost:3000/assets/remoteEntry.js'
      },
      shared: ['vue', 'pinia']
    })
  ],
  build: {
    target: 'esnext'
  }
})
