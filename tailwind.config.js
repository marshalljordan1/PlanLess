/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        garden: {
          primary: "#5a7c65",
          "primary-focus": "#48604f",
          "primary-content": "#ffffff",

          secondary: "#ecf4e7",
          "secondary-focus": "#cde2c1",
          "secondary-content": "#24321a",

          accent: "#f9e1e1",
          "accent-focus": "#f4bebe",
          "accent-content": "#322020",

          neutral: "#5c5757",
          "neutral-focus": "#272525",
          "neutral-content": "#e9e7e7",

          "base-100": "#e9e7e7",
          "base-200": "#d1cccc",
          "base-300": "#b9b1b1",
          "base-content": "#100f0f",

          info: "#1c92f2",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",

          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": "0.5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
};
