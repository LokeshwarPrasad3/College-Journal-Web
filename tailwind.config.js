/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app_header_bg: "#274472",
        app_border: "#716d6d",
        notification_bar_bg: "#0348bc"
      },
      fontFamily: {
        'roman' : ['Times New Roman']
      }
    },
  },
  plugins: [],
}