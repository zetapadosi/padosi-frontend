module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: "0 6px 12px 0 rgba(0, 0, 0, 0.25)",
    },
    extend: {
      fontFamily: {
        acme: ["Acme", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#94d2ff",
          DEFAULT: "#44b1ff",
          dark: "#006394",
          bg: "#EAF5FF",
        },
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
