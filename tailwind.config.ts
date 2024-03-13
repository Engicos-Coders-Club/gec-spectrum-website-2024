import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dotted-border": "linear-gradient(265.4deg, rgba(232, 232, 232, 0.139772) 0.16%, #E8E8E8 56.79%, rgba(232, 232, 232, 0) 107.45%)"
      },
      
      colors: {
        "primary": "#741CFF"
      }
    },
  },
  plugins: [],
};
export default config;
