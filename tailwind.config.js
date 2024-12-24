/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],  theme: {
    extend: {
      colors: {
        'primary-dark': '#0d0718',
        'primary-purple': '#9282ec',
        'primary-light': '#fbf8ff',
        'secondary-purple': '#221d38',
      },
    },
  },
  plugins: [],
}

