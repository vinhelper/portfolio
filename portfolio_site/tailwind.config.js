/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#22394a",
        surface: "#2c4a5e",
        heading: "#f1f6f8",
        body: "#cbdae2",
        muted: "#a9c0cc",
        faint: "#8fa8b6",
        brand: "#2bbd8f",
        brand300: "#6fdcb6",
        brand700: "#52d1a8",
        brandTint: "rgba(43, 189, 143, 0.16)",
        ink: "#12303f",
        rule: "rgba(255, 255, 255, 0.24)",
        divider: "rgba(255, 255, 255, 0.16)",
      },
      borderRadius: {
        control: "10px",
        frame: "14px",
      },
      fontSize: {
        display: ["clamp(44px, 5.4vw, 82px)", { lineHeight: "0.96" }],
        section: ["clamp(32px, 3.4vw, 52px)", { lineHeight: "1" }],
        banner: ["clamp(36px, 4.6vw, 68px)", { lineHeight: "0.98" }],
      },
      letterSpacing: {
        kicker: "0.14em",
        label: "0.1em",
        nav: "0.06em",
        action: "0.08em",
      },
    },
  },
  plugins: [],
};
