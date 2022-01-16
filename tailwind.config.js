module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FB2E86",
        gray: "#E7E6EF",
        darkGray: "#8A8FB9",
        lightGray: "#F6F7FB",
        darkBlue: "#151875",
        blue: "#2F1AC4",
      },
      fontFamily: {
        heading: ['"Josefin Sans"', "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
