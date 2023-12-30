/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.js", "./src/**/*.jsx"],
  darkMode: "class",
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      montserrat: ["Montserrat"],
    },
    extend: {
      screens: {
        mf: "1020px",
        mw: "1200px",
      },
      colors: {
        "gfg-green": "#5d9e52",
        "custom-grey": "#d9d9d9",
        "custom-dark": "#414341",
        "custom-dark-2": "#242424",
        "green-blue": "#a8e6c3",
        "custom-blue": "#a2d1e5",
        "custom-black": "#363636",
      },
      textColor: {
        "gfg-green": "#5d9e52",
        "custom-violet": "#0f2553",
        "gfg-dark": "#414341",
      },
      backgroundColor: {
        "gfg-green": "#5d9e52",
        "custom-grey": "#d9d9d9",
        "custom-dark": "#414341",
        "custom-dark-2": "#242424",
        "green-blue": "#a8e6c3",
        "custom-blue": "#a2d1e5",
        "custom-black": "#363636",
      },
    },
  },
  plugins: [],
};
