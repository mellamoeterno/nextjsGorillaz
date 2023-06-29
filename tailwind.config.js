/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        lavenderblush: "#ffebfb",
      },
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      "5xl": "24px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
