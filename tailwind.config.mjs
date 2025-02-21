/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      maxHeight: {
        Card: '34rem',
        mCard: '30rem',
      },
      direction: {
        rtl: 'rtl',
      },
      colors: {
        background: {
          DEFAULT: '#eceff4',
          dark: '#2e3440',
        },
        foreground: {
          DEFAULT: '#2e3440',
          dark: '#eceff4',
        },
        primary: {
          DEFAULT: '#5e81ac',
          dark: '#81a1c1',
        },
        secondary: {
          DEFAULT: '#88c0d0',
          dark: '#8fbcbb',
        },
        accent: {
          DEFAULT: '#bf616a',
          dark: '#d08770',
        },
        muted: {
          DEFAULT: '#d8dee9',
          dark: '#434c5e',
        },
      },
    },
  },

  plugins: [],
};
