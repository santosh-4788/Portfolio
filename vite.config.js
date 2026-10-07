import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes every asset path relative, so the build works at
// https://<user>.github.io/<any-repo-name>/ and at a root domain alike.
export default defineConfig({
  base: './',
  plugins: [react()],
})
