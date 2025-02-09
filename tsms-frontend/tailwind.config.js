/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // Add more shades as needed
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          // Add more shades as needed
        }
      }
    },
  },
  plugins: [],
} 