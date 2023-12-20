import { defineConfig } from 'vite'


export default defineConfig({

  build: {
    target: "esnext",
    manifest: true,
    lib: {
      entry: './lib/main.ts',
      name: 'web-common',
      fileName: 'web-common'
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
      },
    }
  },
  server: {
    proxy: {
      "/main/": "http://127.0.0.1:9999/",
    },
    host: "0.0.0.0",
  },

})
