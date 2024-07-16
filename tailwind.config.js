/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1400px",
    },
    extend: {
      colors: {
        sectionColor: "#E7E7E7",
        darkBodyColor: "#222222",
        darkSectionColor: "#141414",
        primaryColor: "hsl(288, 63%, 23%)",
        primaryColorLight: "#965CA4",
        whiteColor: "#fff",
        textColor: "#DDD",
        secondaryColor: "red",
      },
      keyframes: {
        move: {
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        scaleAnimation: "move 3s linear infinite",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        md: "30px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      Londrina: ["Londrina Outline", "sans-serif"],
    },
  },
  plugins: [],
};
