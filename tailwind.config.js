/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      0: "#FFFFFF",
      1: "#a3e635",
      2: "#000000",
      3: "#dc2626",
      50: "#f0f7fe",
      100: "#deedfb",
      200: "#c4e2f9",
      300: "#9bcef5",
      400: "#6cb4ee",
      500: "#3d8fe6",
      600: "#347bdc",
      700: "#2b66ca",
      800: "#2953a4",
      900: "#264882",
      1000: "#dddddd",
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      glory: ["glory", "sans-serif"],
      pop: ["pop", "sans"],
      roboto: ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
};
