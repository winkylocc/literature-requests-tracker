import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon/favicon.ico',
        'favicon/apple-touch-icon.png',
        'favicon/favicon-96x96.png',
        'favicon/favicon.svg'
      ],
      manifest: {
        name: 'Literature Requests Tracker',
        short_name: 'LitReqs',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#3f51b5',
        icons: [
          {
            src: 'favicon/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicon/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
})
