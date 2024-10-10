import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E1E1E", // Cinza carvão escuro
        foreground: "#F4D03F", // Amarelo ouro suave para texto
        primary: "#F4D03F", // Dourado para botões e chamadas à ação
        secondary: "#E0E0E0", // Cinza claro para textos secundários
        accent: "#FFFFFF", // Branco para textos de destaque
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Fonte moderna e elegante
        serif: ["Merriweather", "serif"], // Fonte serifada para títulos
      },
    },
  },
  plugins: [],
};

export default config;