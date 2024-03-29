/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "384px",
      md: "576px",
      lg: "864px",
      xlg: "1232px",
    },
    extend: {},
  },
  plugins: [],
};
