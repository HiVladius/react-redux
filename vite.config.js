import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    // Vite config
    define: {
      'import.meta.env.VITE_API_KEY_FIREBASE': JSON.stringify(env.VITE_API_KEY_FIREBASE),
      'import.meta.env.VITE_APPID': JSON.stringify(env.VITE_APPID),
    },
    
    // Plugins
    plugins: [react()],
  }
})
