/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Carbono", ...defaultTheme.fontFamily.sans],
      // serif: ["ui-serif", "tahoma"],
    },
    extend: {
      colors: {
        "dark-primary": "#212121",
        "dark-secondary": "#474747",
        "light-primary": "#FEFEFE",
        "light-secondary": "#E4E4E4",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
