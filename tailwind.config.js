module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: "0 3px 6px 0 rgba(0, 0, 0, 0.25)",
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

      animation: {
        fade: "fade .5s ease-in",
      },

      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
