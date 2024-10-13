/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      minHeight: {'chat-min': 'calc(100vh - 14rem)'}
    },
  },
  plugins: [],
}

