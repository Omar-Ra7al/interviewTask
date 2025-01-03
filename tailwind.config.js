/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "rgba(var(--main))",
        secondary: "rgba(var(--secondary))",
      },
    },
  },
};
