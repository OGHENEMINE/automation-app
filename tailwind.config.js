/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Public-Sans-Regular": ["Public-Sans-Regular","sans-serif"],
        "Public-Sans-Medium": ["Public-Sans-Medium","sans-serif"],
        "Public-Sans-Bold": ["Public-Sans-Bold","sans-serif"],
      }
    },
  },
  plugins: [],
}
