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
        'content-large': '1280px',
      },
      fontSize: {
        'heading': 'clamp(1.875rem, 1.25rem + 3.125vw, 5rem);',
        'subheading':'clamp(1.125rem, 0.8182rem + 0.9091vi, 1.5rem);',
        'body-lg':'clamp(0.875rem, 0.6705rem + 0.6061vi, 1.125rem);',
        'body':'clamp(0.875rem, 0.7727rem + 0.303vi, 1rem);'
      },
    },
  },
  plugins: [],
};