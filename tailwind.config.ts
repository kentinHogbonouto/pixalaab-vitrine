/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#105BC4",
        "afialab-green": "#35CC57",
        secondary: "#D8ECFE",
        "grsecondaryay-100": "#C8C2F0",
        "secondary-200": "#FFDDEA",
        "secondary-300": "#FAF1E7",
      },
    },
  },
  plugins: [],
};

export default config;
