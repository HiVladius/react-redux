import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    // Vite config
    define: {
      API_KEY_FIREBASE: JSON.stringify(env.API_KEY_FIREBASE),
    },
    
    // Plugins
    plugins: [react()],
  }
})
