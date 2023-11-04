import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'web-common',
      fileName: 'web-common'
    }
  }
})
