/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        cards: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      gridTemplateRows: {
        auto1: "auto 1fr",
      },
    },
  },
  plugins: [],
}
