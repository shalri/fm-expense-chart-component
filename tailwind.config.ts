import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ec-red": "hsl(var(--ec-red))",
        "ec-cyan": "hsl(var(--ec-cyan))",
        "ec-dark-brown": "hsl(var(--ec-dark-brown))",
        "ec-medium-brown": "hsl(var(--ec-medium-brown))",
        "ec-cream": "hsl(var(--ec-cream))",
        "ec-orange": "hsl(var(--ec-orange))",
      },
      fontFamily: {
        dmSans: ["var(--font-family)"],
      },
      fontWeight: {
        regular: "var(--font-weight-regular)",
        bold: "var(--font-weight-bold)",
      },
      backgroundImage: {
        // "sample-bg": "/tsugini" // basepath of github pages
      },
    },
  },
  plugins: [],
};
export default config;
