/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b1120",
        panel: "#131c31",
        input: "#070b15",
        accent: "#06b6d4",
      },
      boxShadow: {
        'neo-inner': 'inset 2px 2px 5px rgba(0, 0, 0, 0.5), inset -1px -1px 2px rgba(255, 255, 255, 0.05)',
        'neo-drop': '5px 5px 10px rgba(0, 0, 0, 0.4), -2px -2px 5px rgba(255, 255, 255, 0.02)',
        'glow': '0 0 15px rgba(6, 182, 212, 0.5)',
      }
    },
  },
  plugins: [],
}