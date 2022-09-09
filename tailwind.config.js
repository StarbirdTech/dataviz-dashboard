/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /col-start-(1|2|3)/,
    },
    {
      pattern: /row-start-(1|2|3)/,
    },
    {
      pattern: /col-span-(1|2|3)/,
    },
    {
      pattern: /row-span-(1|2|3)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
