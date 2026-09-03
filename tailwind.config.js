/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070b14',
          900: '#0a1120',
          800: '#0f1a2e',
          700: '#16233d',
          600: '#1e3050',
        },
        gold: {
          50: '#fbf6e9',
          100: '#f5ead0',
          200: '#e8d5a3',
          300: '#d9bd6c',
          400: '#c9a94e',
          500: '#b8923a',
          600: '#9c7830',
          700: '#7e5e28',
          800: '#5e4520',
          900: '#4a3619',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
      },
    },
  },
  plugins: [],
};
