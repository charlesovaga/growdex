// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        keyframes: {
          scrollLeft: {
            "0%": { transform: "translateX(0%)" },
            "100%": { transform: "translateX(-50%)" },
          },
          scrollRight: {
            "0%": { transform: "translateX(-50%)" },
            "100%": { transform: "translateX(0%)" },
          },
        },
        animation: {
          "scroll-left": "scrollLeft 30s linear infinite",
          "scroll-right": "scrollRight 30s linear infinite",
        },
      },
    },
    plugins: [],
  };
  