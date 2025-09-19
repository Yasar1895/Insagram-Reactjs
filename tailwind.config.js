/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        igBlue: '#0095f6',
        softGray: '#f3f4f6',
      }
    },
  },
  plugins: [],
}
