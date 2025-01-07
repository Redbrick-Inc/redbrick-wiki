/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./theme.config.tsx", // Include the theme config file
    // Or if using `src` directory:
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "serif"],
        jaro: ['"Jaro"', "serif"],
        lexend: ['"Lexend"', "serif"],
        "bungee-inline": ['"Bungee Inline"', "serif"],
        "press-start": ['"Press Start 2P"', "serif"],
        galmuri: ['"Galmuri9"', "sans-serif"],
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 3s steps(20) infinite alternate, blink .7s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
