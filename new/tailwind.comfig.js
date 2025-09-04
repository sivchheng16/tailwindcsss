// tailwind.config.js
export default {
  content: [
    "./index.html", // 👈 Vite entry
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 Scan all src files
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1da1f2",
        dark: "#0d1117",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
