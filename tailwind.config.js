module.exports = {
  context: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {extend: {}},
  plugins: [require("@tailwindcss/forms")],
}