// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // intercept any requests to /gas and forward them
      '/gas': {
        target: 'https://script.google.com/macros/s/AKfycbwQE4gjiY65VbmzHfyBJfgZg3XrgdnOv8TW2EW5f-0uwOMDFw6_oCiIJlPQfcz6ujKe/exec',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/gas/, ''), 
      },
    },
  },
});
