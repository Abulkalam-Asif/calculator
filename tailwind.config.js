/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-light": "#ffff99",
        "yellow-medium": "#F3DD6D",
        purple: "#523178",
        grey: "#f2f2f2",
        disabled: "#DEDEDE",
        navy: "#000080",
        green: "#89CA9D",
        "light-blue": "#ACD6FF",
      },
      fontSize: {
        17: "1.0625rem",
      },
      boxShadow: {
        "input-button-shadow":
          "0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19)",
      },
    },
  },
  plugins: [],
};
