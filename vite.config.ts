import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    federation({

      remotes: {
        //web_main: "http://localhost:9999/main//web-main.js",
        web_main: "/main/web-main.js",
      },
    })],

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
