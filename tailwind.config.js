/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#8960FE',
        'customColorFondo': '#D4CEF8',
        'CustomColorBotonPago':'#2B1A46',
        'CustomColorLineaPago':'#C7BEBE',
        'ColorLilaBoton':'#855FF1'
      },
      textColor: {
        'letra-color': '#898484',
        'f-family': 'Inter',
      },

      fontFamily: {
        custom: ['M PLUS Rounded 1c', 'sans'],
      },
      border:{
        'colorBordeDropDounw':'#B28989'
      }
    },
  },
  plugins: [],
}
