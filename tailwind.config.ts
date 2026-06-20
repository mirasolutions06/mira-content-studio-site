import type { Config } from 'tailwindcss';
import { tokens } from './design-tokens/tokens';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: tokens
  },
  plugins: []
};

export default config;
