/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        cardShadow: "-4px 4px 0 0 rgb(26, 188, 156)",
        cardShadow2: "-6px 6px 0 0 rgb(26, 188, 156)",
      },
      backgroundImage: {
        "side-bar":
          "linear-gradient(rgba(52, 73, 94, 0.9), rgba(52, 73, 94, 1)), url(../images/sidebar-img.jpg)",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        body: "#d4e6f1",
        heading: "#f7f9f9",
        base: "#34495e",
        base2: "#2c3e50",
        brand: "#1abc9c",
        brand2: "#16a085",
      },
      // colors: {
      //   body: "#f5f5f5", // Very light grey
      //   heading: "#424242", // Dark grey
      //   base: "#212121", // Almost black
      //   base2: "#1b1b1b", // Darker almost black
      //   brand: "#ffab40", // Light orange
      //   brand2: "#ff9100", // Bright orange
      // },
    },
  },
  plugins: [],
};
