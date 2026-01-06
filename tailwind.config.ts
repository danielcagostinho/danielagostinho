import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6380cd',
        secondary: '#000000',
        tertiary: '#3b3b3b',
      },
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
        grotesque: ['"Darker Grotesque"', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': {
            boxShadow: '0 5px 15px 0px rgba(0, 0, 0, 0.6)',
            transform: 'translateY(0px)',
          },
          '50%': {
            boxShadow: '0 25px 15px 0px rgba(0, 0, 0, 0.2)',
            transform: 'translateY(-10px)',
          },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
