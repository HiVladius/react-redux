// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Habilita el soporte para JSX en tus pruebas
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js', ], // Archivo de configuración inicial
  },
});