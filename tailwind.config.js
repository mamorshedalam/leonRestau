/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      courgette: ['Courgette', 'ui-sans-serif', 'system-ui'],
    },
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1100px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};