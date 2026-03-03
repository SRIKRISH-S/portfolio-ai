import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './', // Using relative paths makes it work on both GitHub Pages and root domains
    preview: {
        allowedHosts: true
    }
})
