/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      m540: '540px',
      m768: '768px',
      m960: '960px',
      m1200: '1200px',
    },
    extend: {
      maxWidth: {
        'content': '1024px',
      },
    },
  },
  plugins: [],
};