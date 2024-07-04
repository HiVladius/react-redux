import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
// @type {import('vite').UserConfig}
/// <reference types="vitest" />

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    // Vite config
    define: {
      'import.meta.env.VITE_API_KEY_FIREBASE': JSON.stringify(env.VITE_API_KEY_FIREBASE),
      'import.meta.env.VITE_APPID': JSON.stringify(env.VITE_APPID),
      'import.meta.env.VITE_APISECRET': JSON.stringify(env.VITE_APISECRET),
      'import.meta.env.VITE_API_KEY_CLOUDINARY': JSON.stringify(env.VITE_API_KEY_CLOUDINARY),
      'import.meta.env.VITE_API_KEY_FIREBASE_TESTING': JSON.stringify(env.VITE_API_KEY_FIREBASE_TESTING)
    },
    
    // Plugins
    plugins: [react()],

    test:{
      testMatch: ['**/*.test.js', '**/*.test.jsx', '**/*.test.ts', '**/*.test.tsx'],
      transform: {
        '^.+\\.jsx?$': 'esbuild-jest',
      },
      environment: 'jsdom',
      
    }

  }
})
