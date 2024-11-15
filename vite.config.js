import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: 'remotes',
      filename: 'atomicLibrary.js',
      exposes: {
        './Table': './src/components/Table/Table.tsx',
        './Button': './src/components/Form/Button.jsx',
        './Input': './src/components/Form/Input.tsx',
        './Option': './src/components/Form/Option.tsx',
        './UserCard': './src/components/Card/UserCard.jsx',
        './Tabs': './src/components/Tabs/Tabs.jsx',
        './Menu': './src/components/Menu/Menu.tsx',
        './Accordian': './src/components/Accordian/Accordian.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
    react(),
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: '[name].js',
      },
    },
    cssCodeSplit: false,
  },
  server: {
    port: 3006,
  },
});
