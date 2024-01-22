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
      },

      animation: {
        wiggle: "wiggle 5.6s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%,100%": {
            transform:
              "rotate(30deg) perspective(80px) translate3d(40px, 0, 3px) rotate3d(1, 2, 3, 20deg)",
          },
          "25%": {
            transform:
              "rotate(30deg) perspective(20px) translate3d(40px, 70px, 2px) skew(-10deg, 40deg) rotate3d(0, 0, 0, 25deg)",
          },
          "50%": {
            transform:
              "rotate(30deg) perspective(20px) translate3d(40px, 70px, 2px) skew(-10deg, 40deg) rotate3d(0, 0, 0, 25deg)",
          },
          "95%": {
            transform:
              "rotate(30deg) perspective(80px) translate3d(40px, 0, 3px) rotate3d(1, 2, 3, 20deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
