import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // eslint-disable-next-line no-undef
  // base: process.env.NODE_ENV === 'production' ? '/iloom-dedicated-and-elegant-clothes-website--/' : '/',
  base: '/iloom-dedicated-and-elegant-clothes-website--/',
  plugins: [react()],
});
