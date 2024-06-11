import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    // Vite config
    define: {
      'process.env.VITE_API_KEY_FIREBASE': JSON.stringify(env.VITE_API_KEY_FIREBASE),
    },
    
    // Plugins
    plugins: [react()],
  }
})
