import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // absolute path to the root of the project
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
});
