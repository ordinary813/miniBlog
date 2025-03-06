import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigPaths from "vite-jsconfig-paths"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  build: {
    commonjsOptions: {
      esmExternals: true,
    },
  }
})
