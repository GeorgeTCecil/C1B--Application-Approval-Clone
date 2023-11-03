/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "credit-one-blue": "#0a5ec0",
        "grey190": "#bebebe",
        "grey66": "#424242",
        "background-grey": "#f7f7f7",
        "neutrals-grey118": "#767676",
        "credit-one-black": "#121212",
        "dark-grey38": "#262626",
        "dark-credit-one-blue": "#074d9d",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
