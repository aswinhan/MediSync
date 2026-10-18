/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Tells Tailwind to use the "dark" class on the <html> tag
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          base: 'var(--surface-base)',
          panel: 'var(--surface-panel)',
          input: 'var(--surface-input)',
          muted: 'var(--surface-muted)',
        },
        content: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        border: {
          subtle: 'var(--border-subtle)',
        }
      },
      boxShadow: {
        'neo-drop': 'var(--shadow-neo-drop)',
        'neo-inner': 'var(--shadow-neo-inner)',
        'glow': '0 0 15px rgba(6, 182, 212, 0.5)',
      }
    },
  },
  plugins: [],
}