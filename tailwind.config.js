/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: "#633CFF",
        purple_hover: "#BEADFF",
        light_purple: "#EFEBFF",
        dark_gray: "#333333",
        gary: "#737373",
        light_gray: "#D9D9D9",
        white: "#FFFFFF",
        red: "#FF3939",
      },
    },
  },
  plugins: [require("daisyui")],
};
