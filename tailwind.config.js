/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          layout: {},
          colors: {}, // можешь не заполнять, если не нужно
        },
        dark: {
          layout: {},
          colors: {}, // стандартная тёмная тема
        }, 
        blue: {
          extend: "dark",
          colors: {
            background: "#0d1117",
            foreground: "#c9d1d9",
            primary: {
              DEFAULT: "#58a6ff",
              foreground: "#ffffff",
            },
            secondary: "#8b949e",
            accent: "#79c0ff",
            muted: "#444c56",
            border: "#30363d",
            card: "#161b22",
          },
        },
        purple: {
          extend: "dark",
          colors: {
            background: "#2a2539",
            foreground: "#c9d1d9",
            primary: {
              DEFAULT: "#58a6ff",
              foreground: "#ffffff",
            },
            secondary: "#8b949e",
            accent: "#79c0ff",
            muted: "#444c56",
            border: "#30363d",
            card: "#161b22",
          },
        },
        green: {
          extend: "dark",
          colors: {
            background: "#03624c",
            foreground: "#c9d1d9",
            primary: {
              DEFAULT: "#58a6ff",
              foreground: "#ffffff",
            },
            secondary: "#8b949e",
            accent: "#79c0ff",
            muted: "#444c56",
            border: "#30363d",
            card: "#161b22",
          },
        },
      },
    }),
  ],
};