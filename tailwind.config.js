module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      colors: {
        // Accent palette (names kept so existing classes pick it up)
        purple: "#ec9594",
        pink: "#f5cd91",
        dp: "#6e4e29",
        sand: "#f2e5d2",
        blush: "#f2dfd0",
      },
    },
  },
  plugins: [],
};
