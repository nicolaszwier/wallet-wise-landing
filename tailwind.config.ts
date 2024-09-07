import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        serif: ['var(--font-iowan)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        blue: {
          100: '#dfe4ff',
          200: '#b3beff',
          300: '#3f5cff',
          400: '#152999',
          500: '#05177D'
        },
        yellow: '#FEE13D'
        // ...
      }
    },
  },
  plugins: [],
};
export default config;
