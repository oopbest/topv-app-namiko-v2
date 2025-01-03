import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005C5D",
        background: "#f7f7f7",
      },
      fontFamily: {
        sukhumvit: ["Sukhumvit", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }: any) {
      const headings = {
        h1: "4xl",
        h2: "3xl",
        h3: "2xl",
        h4: "xl",
        h5: "lg",
      };

      addBase(
        Object.fromEntries(
          Object.entries(headings).map(([tag, size]) => [
            tag,
            {
              fontSize: theme(`fontSize.${size}`),
              fontWeight: theme("fontWeight.bold"),
            },
          ])
        )
      );
    }),
  ],
};
export default config;
