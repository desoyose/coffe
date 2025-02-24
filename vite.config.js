import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: 'src/main.js', // Primer archivo JavaScript
        secondary: 'src/subscribe.js', // Segundo archivo JavaScript
        page1: 'index.html', // Página HTML 1
        page2: 'about.html', // Página HTML 2
        page3: 'subscribe.html', // Página HTML 3

      },
    },
  },
});
