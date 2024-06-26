import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-space-grotesk)", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dotted-border":
          "linear-gradient(265.4deg, rgba(232, 232, 232, 0.139772) 0.16%, #E8E8E8 56.79%, rgba(232, 232, 232, 0) 107.45%)",
      },

      colors: {
        primary: "#741CFF",
        mango: "#FFBA25",
        tangerine: "#FA5622",
        bgDark: "#06050a",
      },
      keyframes: {
        jiggle: {
          "0%, 100%": { transform: "rotate(-3deg) skewY(10deg) skewX(3deg)" },
          "50%": { transform: "rotate(3deg) skewX(0deg) skewX(-1deg)" },
        },
      },
      animation: {
        jiggle: "jiggle 2s infinite 1s",
      },
    },
  },
  plugins: [],
};
export default config;
