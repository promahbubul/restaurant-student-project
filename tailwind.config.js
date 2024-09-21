/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#E1B168",
        dark: "#292E36",
        darkCream: "#555555",
        lightDark: "#343942",
        lightCream: "#FFF8F5",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        cormorant: ["Cormorant Infant", "serif"],
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
