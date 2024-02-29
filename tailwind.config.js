/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: '100dvh',
      },
      dropShadow: {
        glow: [
          '0 0 5px rgba(0, 255, 0, 0.4)',
          '0 0 15px rgba(0, 255, 0, 0.8)',
          '0 0 30px rgba(0, 255, 0, 1)',
        ],
      },
    },
  },
  plugins: [],
};
