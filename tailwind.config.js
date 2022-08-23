/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      aboreto: ["Aboreto"],
      playFairSc: ["Playfair Display SC"],
      ubuntu: ["Ubuntu"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
