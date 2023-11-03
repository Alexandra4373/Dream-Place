/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      container: {
        padding: "2rem",
        center: true,
      },

      colors: {
        primary: "#2F80ED",
      },
    },
  },
  plugins: [],
};
