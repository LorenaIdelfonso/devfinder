/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "100px-1fr": "100px 1fr",
      },
    },
  },
  plugins: [],
};
