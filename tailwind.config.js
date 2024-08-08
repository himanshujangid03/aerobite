/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      matter: ["Matter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#00A9FF",
        secondary: "#001722",
      },
    },
  },
  plugins: [],
};
