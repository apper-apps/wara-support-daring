/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wara: {
          50: '#fff8f1',
          100: '#ffede1',
          200: '#ffd8c2',
          300: '#ffbb98',
          400: '#ff9169',
          500: '#ff7a29',
          600: '#de5e00',
          700: '#b84c00',
          800: '#9a4000',
          900: '#7d3500',
        }
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}