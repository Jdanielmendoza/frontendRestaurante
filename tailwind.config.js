/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#8960FE',
        'customColorFondo': '#D4CEF8',
      },
      textColor: {
        'letra-color': '#898484',
        'f-family': 'Inter',
      }
    },
  },
  plugins: [],
}
