/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backGroundImage: { 
        'hero-pattern': "url(/images/background-image.jpg)",
      }
    },
  },
  plugins: [],
}